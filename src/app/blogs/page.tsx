import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TechScape Insights - PivotalTech Solutions Blog',
  description: 'Stay updated with the latest insights, trends, and innovations in technology and business. Expert articles on AI, cloud computing, cybersecurity, and digital transformation.',
  alternates: {
    canonical: 'https://pivotaltech.solutions/blogs',
  },
  openGraph: {
    title: 'TechScape Insights - PivotalTech Solutions Blog',
    description: 'Stay updated with the latest insights, trends, and innovations in technology and business.',
    url: 'https://pivotaltech.solutions/blogs',
    siteName: 'PivotalTech Solutions',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

interface BlogPost {
  id: number
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  content: {
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

async function getBlogPosts(): Promise<BlogPost[]> {
  const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://pivotaltech.wordpress.com'
  
  try {
    // First, try to check if the site is accessible
    const siteCheck = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/`, {
      next: { revalidate: 300 },
      headers: {
        'User-Agent': 'PivotalTech Solutions Blog Integration',
      },
    })
    
    if (!siteCheck.ok) {
      console.log('WordPress site not ready or REST API not available')
      return []
    }
    
    // Now try to fetch posts
    const response = await fetch(
      `${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed=true&per_page=10`,
      {
        next: { revalidate: 300 }, // Cache for 5 minutes
        headers: {
          'User-Agent': 'PivotalTech Solutions Blog Integration',
        },
      }
    )
    
    if (!response.ok) {
      console.log('No posts available yet or site still in setup mode')
      return []
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.log('WordPress site not accessible yet:', error)
    return []
  }
}

export default async function BlogsPage() {
  const posts = await getBlogPosts()

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
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium shadow-md border border-emerald-200 mb-8">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Latest Insights • Technology & Business
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            TechScape
            <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in technology and business.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-100 rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Blog Coming Soon</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We&apos;re working on creating amazing content for you. Check back soon for our latest insights and updates!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/services" className="group bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span className="flex items-center justify-center">
                      Explore Services
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="/portfolio" className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                    <span className="flex items-center justify-center">
                      View Portfolio
                      <svg className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Featured Image */}
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                      <img
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500 font-medium">
                        {formatDate(post.date)}
                      </p>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      <Link href={`/blogs/${post.slug}`}>
                        {stripHtml(post.title.rendered)}
                      </Link>
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {stripHtml(post.excerpt.rendered)}
                    </p>
                    
                    {/* Read More Link */}
                    <Link 
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 group"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}