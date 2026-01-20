# Quick Fix Deployment Guide

## What Happened?

The 502 Bad Gateway errors were caused by **redirect loops** in your Next.js configuration. The redirects for www→non-www and HTTP→HTTPS were conflicting with Cloudflare's proxy, causing infinite loops that crashed your server.

## What Was Fixed?

✅ **Removed problematic redirects** from `next.config.ts`
✅ **Added health check endpoint** at `/api/health`
✅ **Improved deployment script** with better error handling
✅ **Added proper environment variables** to deployment

## Immediate Actions Required

### Step 1: Deploy Fixed Code to EC2

```bash
# SSH into your EC2 instance
ssh -i your-key.pem ec2-user@your-ec2-ip

# Navigate to app directory
cd ~/apps/pivotal

# Pull the latest changes
git pull origin main

# Install dependencies (if needed)
npm install

# Build the application
npm run build

# Restart the server
pm2 restart pivotal

# Check status
pm2 status
pm2 logs pivotal --lines 50
```

### Step 2: Configure Cloudflare (CRITICAL)

Since we removed the redirects from Next.js, you MUST configure them in Cloudflare:

#### A. Set SSL/TLS Mode
1. Go to Cloudflare Dashboard → **SSL/TLS** → **Overview**
2. Set to **Full** or **Full (strict)**

#### B. Enable Always Use HTTPS
1. Go to **SSL/TLS** → **Edge Certificates**
2. Turn ON **Always Use HTTPS**

#### C. Create WWW Redirect Rule
1. Go to **Rules** → **Page Rules** (or **Redirect Rules**)
2. Create new rule:
   - **If**: `www.pivotaltech.solutions/*`
   - **Then**: Redirect to `https://pivotaltech.solutions/$1`
   - Type: **301 Permanent**

#### D. Purge Cache
1. Go to **Caching** → **Configuration**
2. Click **Purge Everything**

### Step 3: Verify Everything Works

```bash
# Test health endpoint
curl http://localhost:3000/api/health

# Should return JSON with status: "healthy"
```

Then test in browser:
- https://pivotaltech.solutions ✅
- https://www.pivotaltech.solutions (should redirect to non-www) ✅
- http://pivotaltech.solutions (should redirect to HTTPS) ✅

## Troubleshooting

### If Server Won't Start

```bash
# Check what's using port 3000
sudo netstat -tulpn | grep 3000

# Kill the process if needed
sudo kill -9 <PID>

# Delete PM2 process and restart fresh
pm2 delete pivotal
pm2 start npm --name "pivotal" --max-memory-restart 1G -- start
pm2 save
```

### If Still Getting 502 Errors

1. **Check PM2 logs**:
   ```bash
   pm2 logs pivotal --lines 100
   ```

2. **Check server is responding**:
   ```bash
   curl http://localhost:3000
   ```

3. **Restart PM2**:
   ```bash
   pm2 restart pivotal
   ```

4. **Check Cloudflare settings**:
   - SSL/TLS mode is Full or Full (strict)
   - Always Use HTTPS is ON
   - Cache is purged

### If Build Fails

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Try building again
npm run build
```

## Testing Checklist

After deployment, verify:

- [ ] Server is running: `pm2 status` shows "online"
- [ ] Health check works: `curl http://localhost:3000/api/health`
- [ ] Main site loads: https://pivotaltech.solutions
- [ ] WWW redirects: https://www.pivotaltech.solutions → https://pivotaltech.solutions
- [ ] HTTP redirects: http://pivotaltech.solutions → https://pivotaltech.solutions
- [ ] Contact form works
- [ ] No console errors in browser
- [ ] Google Search Console can crawl pages

## Monitoring

### Check Server Status
```bash
pm2 status
pm2 monit  # Real-time monitoring
```

### View Logs
```bash
pm2 logs pivotal          # All logs
pm2 logs pivotal --err    # Error logs only
pm2 logs pivotal --lines 100  # Last 100 lines
```

### Server Resources
```bash
free -h              # Memory usage
df -h                # Disk usage
top                  # CPU usage
```

## Prevention

To avoid future 502 errors:

1. ✅ **Never add domain-level redirects in Next.js when using Cloudflare**
2. ✅ **Always handle redirects in Cloudflare Page Rules**
3. ✅ **Monitor server resources with PM2**
4. ✅ **Set memory limits for PM2 processes**
5. ✅ **Keep logs for debugging**

## Files Changed

1. `next.config.ts` - Removed redirect loops
2. `src/app/api/health/route.ts` - Added health check endpoint
3. `ec2-setup.sh` - Improved deployment script
4. `CLOUDFLARE_SETUP.md` - Detailed Cloudflare configuration guide

## Next Steps

1. **Deploy the fix** (Step 1 above)
2. **Configure Cloudflare** (Step 2 above)
3. **Test everything** (Step 3 above)
4. **Request reindexing** in Google Search Console
5. **Monitor for 24 hours** to ensure stability

## Support

If you need help:
- Check PM2 logs: `pm2 logs pivotal`
- Check health endpoint: `curl http://localhost:3000/api/health`
- Review Cloudflare Ray ID from error page
- Check AWS CloudWatch (if configured)

---

**Status**: Code is fixed and ready to deploy. Follow steps above to resolve 502 errors.
