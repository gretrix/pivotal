# 502 Error Fix - Quick Checklist

## ✅ Step-by-Step Checklist

### Part 1: Deploy Fixed Code (15 minutes)

- [ ] SSH into EC2 server
- [ ] Navigate to app: `cd ~/apps/pivotal`
- [ ] Pull changes: `git pull origin main`
- [ ] Install deps: `npm install`
- [ ] Build app: `npm run build`
- [ ] Restart server: `pm2 restart pivotal`
- [ ] Check status: `pm2 status` (should show "online")
- [ ] Check logs: `pm2 logs pivotal --lines 50` (no errors)
- [ ] Test health: `curl http://localhost:3000/api/health`

### Part 2: Configure Cloudflare (10 minutes)

- [ ] Login to Cloudflare Dashboard
- [ ] Select domain: pivotaltech.solutions
- [ ] Go to SSL/TLS → Overview
- [ ] Set encryption to: **Full** or **Full (strict)**
- [ ] Go to SSL/TLS → Edge Certificates
- [ ] Enable: **Always Use HTTPS**
- [ ] Go to Rules → Page Rules
- [ ] Create new rule:
  - URL: `www.pivotaltech.solutions/*`
  - Setting: Forwarding URL (301)
  - Destination: `https://pivotaltech.solutions/$1`
- [ ] Save rule
- [ ] Go to Caching → Configuration
- [ ] Click: **Purge Everything**
- [ ] Confirm purge

### Part 3: Test Everything (5 minutes)

- [ ] Open browser (incognito mode)
- [ ] Test: https://pivotaltech.solutions (should load)
- [ ] Test: https://www.pivotaltech.solutions (should redirect)
- [ ] Test: http://pivotaltech.solutions (should redirect to HTTPS)
- [ ] Test: https://pivotaltech.solutions/contact (should load)
- [ ] Test: https://pivotaltech.solutions/api/health (should show JSON)
- [ ] Check browser console (no errors)
- [ ] Test contact form (should work)

### Part 4: Google Search Console (5 minutes)

- [ ] Login to Google Search Console
- [ ] Go to URL Inspection
- [ ] Test URL: https://pivotaltech.solutions
- [ ] Click: **Request Indexing**
- [ ] Test URL: https://pivotaltech.solutions/contact
- [ ] Click: **Request Indexing**
- [ ] Repeat for other important pages

### Part 5: Monitor (24 hours)

- [ ] Check site every few hours
- [ ] Monitor PM2: `pm2 monit`
- [ ] Check logs: `pm2 logs pivotal`
- [ ] Verify no 502 errors
- [ ] Check Google Search Console for crawl errors

## 🚨 If Something Goes Wrong

### Server won't start:
```bash
pm2 delete pivotal
cd ~/apps/pivotal
npm run build
pm2 start npm --name "pivotal" -- start
pm2 save
```

### Still getting 502:
1. Check PM2 logs: `pm2 logs pivotal`
2. Check Cloudflare SSL is set to Full
3. Purge Cloudflare cache again
4. Wait 5 minutes and try again

### Build fails:
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📞 Quick Commands Reference

```bash
# Check status
pm2 status

# View logs
pm2 logs pivotal

# Restart
pm2 restart pivotal

# Monitor
pm2 monit

# Health check
curl http://localhost:3000/api/health
```

## ✅ Success Criteria

You're done when:
- ✅ No 502 errors on any URL
- ✅ WWW redirects to non-www
- ✅ HTTP redirects to HTTPS
- ✅ Contact form works
- ✅ PM2 shows "online" status
- ✅ Health endpoint returns JSON
- ✅ Google can crawl pages

---

**Estimated Total Time**: 30-40 minutes
**Difficulty**: Easy (just follow the steps)
**Risk**: Low (can rollback if needed)
