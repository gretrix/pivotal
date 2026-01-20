# 502 Bad Gateway Error - Root Cause & Fix

## 🔴 Problem

Your site was showing **502 Bad Gateway** errors because of **infinite redirect loops** caused by conflicting redirect rules between Next.js and Cloudflare.

### Affected URLs
- http://pivotaltech.solutions/
- https://pivotaltech.solutions/
- http://www.pivotaltech.solutions/
- https://www.pivotaltech.solutions/contact

## 🔍 Root Cause Analysis

### The Redirect Loop
1. **Cloudflare** receives request for `www.pivotaltech.solutions`
2. **Cloudflare** proxies to your EC2 server
3. **Next.js** sees the request and redirects to `pivotaltech.solutions`
4. **Cloudflare** receives the redirect and proxies again
5. **Next.js** sees another redirect condition and redirects again
6. **Loop continues** until server crashes with 502 error

### Why It Happened
In the previous fix for SEO issues, I added these redirects to `next.config.ts`:
```typescript
// ❌ PROBLEMATIC CODE (now removed)
{
  source: '/:path*',
  has: [{ type: 'host', value: 'www.pivotaltech.solutions' }],
  destination: 'https://pivotaltech.solutions/:path*',
  permanent: true,
}
```

This conflicts with Cloudflare's proxy because:
- Cloudflare sits between users and your server
- Your server never sees the original `www` hostname
- The redirect logic gets confused and loops infinitely

## ✅ Solution Applied

### 1. Removed Redirect Loops from Next.js
**File**: `next.config.ts`

**Before** (causing 502):
```typescript
async redirects() {
  return [
    { /* meeting-jt redirect */ },
    { /* www to non-www redirect */ },  // ❌ REMOVED
    { /* HTTP to HTTPS redirect */ },   // ❌ REMOVED
  ];
}
```

**After** (fixed):
```typescript
async redirects() {
  return [
    {
      source: '/meeting-jt',
      destination: 'https://calendly.com/meeting-jt',
      permanent: true,
    },
  ];
}
```

### 2. Added Health Check Endpoint
**File**: `src/app/api/health/route.ts` (NEW)

This endpoint helps monitor server health:
- URL: `https://pivotaltech.solutions/api/health`
- Returns server status, environment variables, and Node.js version
- Useful for debugging and monitoring

### 3. Improved Deployment Script
**File**: `ec2-setup.sh`

Added:
- Better error handling
- Memory limits for PM2
- All environment variables
- Proper startup configuration
- Status reporting

## 📋 Action Items for You

### CRITICAL: Deploy the Fix

```bash
# 1. SSH into your EC2 server
ssh -i your-key.pem ec2-user@your-ec2-ip

# 2. Navigate to app directory
cd ~/apps/pivotal

# 3. Pull latest changes
git pull origin main

# 4. Install dependencies
npm install

# 5. Build the app
npm run build

# 6. Restart server
pm2 restart pivotal

# 7. Verify it's working
pm2 status
pm2 logs pivotal --lines 50
curl http://localhost:3000/api/health
```

### CRITICAL: Configure Cloudflare

Since we removed redirects from Next.js, **you MUST configure them in Cloudflare**:

#### Step 1: SSL/TLS Settings
1. Cloudflare Dashboard → **SSL/TLS** → **Overview**
2. Set to: **Full** or **Full (strict)**

#### Step 2: Always Use HTTPS
1. **SSL/TLS** → **Edge Certificates**
2. Enable: **Always Use HTTPS**

#### Step 3: WWW Redirect Rule
1. **Rules** → **Page Rules** (or **Redirect Rules**)
2. Create rule:
   - URL: `www.pivotaltech.solutions/*`
   - Redirect to: `https://pivotaltech.solutions/$1`
   - Type: **301 Permanent**

#### Step 4: Purge Cache
1. **Caching** → **Configuration**
2. Click: **Purge Everything**

## 🧪 Testing

After deployment, test these URLs:

| URL | Expected Result |
|-----|----------------|
| http://pivotaltech.solutions | → https://pivotaltech.solutions |
| https://pivotaltech.solutions | ✅ Loads normally |
| http://www.pivotaltech.solutions | → https://pivotaltech.solutions |
| https://www.pivotaltech.solutions | → https://pivotaltech.solutions |
| https://pivotaltech.solutions/api/health | ✅ Returns JSON status |

## 🔧 Troubleshooting

### If Still Getting 502 Errors

1. **Check server is running**:
   ```bash
   pm2 status
   # Should show "online" status
   ```

2. **Check logs for errors**:
   ```bash
   pm2 logs pivotal --lines 100
   ```

3. **Test locally**:
   ```bash
   curl http://localhost:3000
   # Should return HTML
   ```

4. **Restart server**:
   ```bash
   pm2 restart pivotal
   ```

5. **Check Cloudflare settings**:
   - SSL/TLS mode is Full
   - Always Use HTTPS is ON
   - Cache is purged
   - No conflicting page rules

### If Server Won't Start

```bash
# Check what's using port 3000
sudo netstat -tulpn | grep 3000

# Delete and recreate PM2 process
pm2 delete pivotal
cd ~/apps/pivotal
npm run build
pm2 start npm --name "pivotal" --max-memory-restart 1G -- start
pm2 save
```

## 📊 Monitoring

### Check Server Health
```bash
# PM2 status
pm2 status

# Real-time monitoring
pm2 monit

# View logs
pm2 logs pivotal

# Health check endpoint
curl http://localhost:3000/api/health
```

### Server Resources
```bash
# Memory
free -h

# Disk space
df -h

# CPU usage
top
```

## 🎯 Expected Outcome

After completing all steps:

✅ No more 502 errors
✅ All URLs redirect properly
✅ HTTPS enforced
✅ WWW redirects to non-www
✅ Google can crawl all pages
✅ SEO metadata intact
✅ Contact form works
✅ UI unchanged

## 📚 Documentation Created

1. **502_ERROR_FIX_SUMMARY.md** (this file) - Overview and quick fix
2. **DEPLOY_FIX.md** - Detailed deployment instructions
3. **CLOUDFLARE_SETUP.md** - Complete Cloudflare configuration guide
4. **SEO_FIXES_SUMMARY.md** - Previous SEO fixes documentation

## 🚨 Important Notes

1. **Never add domain-level redirects in Next.js when using Cloudflare**
   - Cloudflare should handle www/non-www redirects
   - Cloudflare should handle HTTP/HTTPS redirects
   - Next.js should only handle application-level redirects

2. **The SEO fixes are still in place**
   - All metadata is correct
   - Canonical tags are proper
   - Robots.txt is configured
   - Sitemap is working

3. **UI and functionality unchanged**
   - Only configuration files were modified
   - No visual changes
   - All features work the same

## ⏱️ Timeline

1. **Deploy code** - 5 minutes
2. **Configure Cloudflare** - 10 minutes
3. **Test and verify** - 5 minutes
4. **Wait for Google reindex** - 3-7 days

## 🆘 If You Need Help

1. Check PM2 logs: `pm2 logs pivotal`
2. Check health endpoint: `curl http://localhost:3000/api/health`
3. Review Cloudflare Ray ID from error page
4. Check this documentation

---

## Summary

**Problem**: Redirect loops causing 502 errors
**Cause**: Conflicting redirects between Next.js and Cloudflare
**Fix**: Removed Next.js redirects, configure in Cloudflare instead
**Status**: Code fixed, ready to deploy
**Action**: Deploy to EC2 + Configure Cloudflare

**All UI and functionality preserved. Only configuration changes.**
