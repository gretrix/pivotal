import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPost {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  date: string
  slug: string
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
  }
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://pivotaltech.wordpress.com'
  
  try {
    // First, check if the site is accessible
    const siteCheck = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/`, {
      next: { revalidate: 300 },
      headers: {
        'User-Agent': 'PivotalTech Solutions Blog Integration',
      },
    })
    
    if (!siteCheck.ok) {
      console.log('WordPress site not ready or REST API not available')
      return null
    }
    
    const response = await fetch(
      `${WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed=true`,
      {
        next: { revalidate: 300 }, // Cache for 5 minutes
        headers: {
          'User-Agent': 'PivotalTech Solutions Blog Integration',
        },
      }
    )
    
    if (!response.ok) {
      console.log('Post not found or site still in setup mode')
      return null
    }
    
    const data = await response.json()
    return data.length > 0 ? data[0] : null
  } catch (error) {
    console.log('WordPress site not accessible yet:', error)
    return null
  }
}

async function getRelatedPosts(currentSlug: string): Promise<BlogPost[]> {
  const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://pivotaltech.wordpress.com'
  
  try {
    const response = await fetch(
      `${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed=true&per_page=4`,
      {
        next: { revalidate: 300 },
        headers: {
          'User-Agent': 'PivotalTech Solutions Blog Integration',
        },
      }
    )
    
    if (!response.ok) {
      return []
    }
    
    const data = await response.json()
    // Filter out the current post
    return data.filter((post: BlogPost) => post.slug !== currentSlug).slice(0, 4)
  } catch (error) {
    console.log('Error fetching related posts:', error)
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - PivotalTech Solutions',
    }
  }

  return {
    title: `${post.title.rendered} - PivotalTech Solutions Blog`,
    description: post.content.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  const relatedPosts = await getRelatedPosts(params.slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-pivotal-50">
      {/* Back Navigation */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/blogs"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group"
          >
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 overflow-hidden">
            {/* Featured Image */}
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            )}
            
            <div className="p-8 md:p-12">
              {/* Date Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 rounded-full text-sm font-medium shadow-md border border-blue-200 mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.date)}
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title.rendered}
              </h1>
              
              {/* Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Related Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore more articles from TechScape Insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Featured Image */}
                  {relatedPost._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                      <img
                        src={relatedPost._embedded['wp:featuredmedia'][0].source_url}
                        alt={relatedPost._embedded['wp:featuredmedia'][0].alt_text || relatedPost.title.rendered}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center mb-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-500 font-medium">
                        {formatDate(relatedPost.date)}
                      </p>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      <Link href={`/blogs/${relatedPost.slug}`}>
                        {stripHtml(relatedPost.title.rendered)}
                      </Link>
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {stripHtml(relatedPost.excerpt.rendered)}
                    </p>
                    
                    {/* Read More Link */}
                    <Link 
                      href={`/blogs/${relatedPost.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200 group"
                    >
                      Read More
                      <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {/* View All Posts CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                <Link 
                  href="/blogs"
                  className="group bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center">
                    View All Insights
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link 
                  href="/contact"
                  className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-md"
                >
                  <span className="flex items-center justify-center">
                    Get In Touch
                    <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}