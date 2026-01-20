# Cloudflare Configuration to Fix 502 Errors

## Root Cause
The 502 Bad Gateway errors are caused by:
1. **Redirect loops** - The Next.js redirects were conflicting with Cloudflare's proxy
2. **Server overload** - Infinite redirects crashed the Node.js server
3. **Cloudflare proxy issues** - Improper SSL/TLS configuration

## Fixes Applied

### 1. Removed Problematic Redirects from next.config.ts
- Removed www → non-www redirect (Cloudflare will handle this)
- Removed HTTP → HTTPS redirect (Cloudflare will handle this)
- Kept only the /meeting-jt redirect

### 2. Configure Cloudflare (REQUIRED STEPS)

#### Step 1: SSL/TLS Settings
1. Log in to Cloudflare Dashboard
2. Select your domain: **pivotaltech.solutions**
3. Go to **SSL/TLS** → **Overview**
4. Set encryption mode to: **Full (strict)** or **Full**
   - **Full (strict)**: Requires valid SSL certificate on origin server
   - **Full**: Works with self-signed certificates

#### Step 2: Page Rules for WWW Redirect
1. Go to **Rules** → **Page Rules**
2. Click **Create Page Rule**
3. Configure:
   - URL: `www.pivotaltech.solutions/*`
   - Setting: **Forwarding URL** → **301 Permanent Redirect**
   - Destination: `https://pivotaltech.solutions/$1`
4. Click **Save and Deploy**

#### Step 3: Always Use HTTPS
1. Go to **SSL/TLS** → **Edge Certificates**
2. Enable **Always Use HTTPS**
3. This forces all HTTP traffic to HTTPS

#### Step 4: Automatic HTTPS Rewrites
1. In **SSL/TLS** → **Edge Certificates**
2. Enable **Automatic HTTPS Rewrites**

#### Step 5: Check Origin Server Settings
1. Go to **SSL/TLS** → **Origin Server**
2. Verify your origin server (EC2) has a valid certificate
3. If not, create an **Origin Certificate** in Cloudflare:
   - Click **Create Certificate**
   - Use default settings (15 years validity)
   - Copy the certificate and private key
   - Install on your EC2 server

### 3. EC2 Server Configuration

#### Check if Server is Running
```bash
# SSH into your EC2 instance
ssh -i your-key.pem ec2-user@your-ec2-ip

# Check PM2 status
pm2 status

# Check logs for errors
pm2 logs pivotal --lines 100

# If server crashed, restart it
pm2 restart pivotal

# If not running, start it
cd ~/apps/pivotal
npm run build
pm2 start npm --name "pivotal" -- start
pm2 save
```

#### Update and Restart Server
```bash
# SSH into EC2
cd ~/apps/pivotal

# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Build the app
npm run build

# Restart with PM2
pm2 restart pivotal

# Check status
pm2 status
pm2 logs pivotal --lines 50
```

### 4. Verify Server is Responding

#### Test Direct Server Access
```bash
# From your EC2 instance
curl http://localhost:3000

# Should return HTML, not an error
```

#### Check Server Logs
```bash
pm2 logs pivotal --lines 100
```

Look for errors like:
- Port already in use
- Memory issues
- Crash loops
- Module not found

### 5. Cloudflare Caching

#### Purge Cache
1. Go to **Caching** → **Configuration**
2. Click **Purge Everything**
3. Confirm purge
4. Wait 30 seconds

#### Development Mode (Temporary)
1. Go to **Caching** → **Configuration**
2. Enable **Development Mode** (lasts 3 hours)
3. This bypasses cache for testing

## Troubleshooting Steps

### If Site Still Shows 502:

#### 1. Check Server Status
```bash
ssh into EC2
pm2 status
pm2 logs pivotal
```

#### 2. Check Port 3000
```bash
netstat -tulpn | grep 3000
# Should show Node.js listening on port 3000
```

#### 3. Restart Everything
```bash
pm2 delete pivotal
cd ~/apps/pivotal
npm run build
pm2 start npm --name "pivotal" -- start
pm2 save
```

#### 4. Check Nginx/Apache (if using reverse proxy)
```bash
sudo systemctl status nginx
# or
sudo systemctl status apache2

# Check configuration
sudo nginx -t
```

#### 5. Check Cloudflare Origin Settings
- Verify origin IP address is correct
- Check if port 3000 is accessible
- Verify SSL certificate is valid

### If Server Keeps Crashing:

#### Check Memory Usage
```bash
free -h
pm2 monit
```

#### Increase Memory Limit
```bash
pm2 delete pivotal
pm2 start npm --name "pivotal" --max-memory-restart 1G -- start
pm2 save
```

#### Check for Memory Leaks
```bash
pm2 logs pivotal --err
```

## Expected Cloudflare Configuration

### DNS Records
```
Type    Name    Content              Proxy Status
A       @       your-ec2-ip          Proxied (orange cloud)
CNAME   www     pivotaltech.solutions Proxied (orange cloud)
```

### SSL/TLS Settings
- **Encryption Mode**: Full or Full (strict)
- **Always Use HTTPS**: ON
- **Automatic HTTPS Rewrites**: ON
- **Minimum TLS Version**: 1.2

### Page Rules
1. `www.pivotaltech.solutions/*` → 301 redirect to `https://pivotaltech.solutions/$1`

## Verification Checklist

After configuration:

- [ ] Server is running on EC2 (pm2 status shows "online")
- [ ] Port 3000 is accessible locally (curl http://localhost:3000)
- [ ] Cloudflare SSL/TLS is set to Full or Full (strict)
- [ ] Always Use HTTPS is enabled
- [ ] WWW redirect page rule is active
- [ ] Cloudflare cache is purged
- [ ] Site loads at https://pivotaltech.solutions
- [ ] Site loads at https://www.pivotaltech.solutions (redirects to non-www)
- [ ] No 502 errors in browser
- [ ] Google Search Console can crawl the site

## Quick Fix Commands

```bash
# SSH into EC2
ssh -i your-key.pem ec2-user@your-ec2-ip

# Navigate to app
cd ~/apps/pivotal

# Pull latest code
git pull

# Install and build
npm install
npm run build

# Restart server
pm2 restart pivotal

# Check status
pm2 status
pm2 logs pivotal --lines 50

# If still issues, delete and restart
pm2 delete pivotal
pm2 start npm --name "pivotal" -- start
pm2 save
```

## Contact Support

If issues persist:
1. Check Cloudflare Status: https://www.cloudflarestatus.com/
2. Check EC2 instance health in AWS Console
3. Review CloudWatch logs (if configured)
4. Contact Cloudflare support with Ray ID from error page

## Prevention

To prevent future 502 errors:
1. **Never** add HTTP/HTTPS redirects in Next.js when using Cloudflare
2. **Never** add www redirects in Next.js when using Cloudflare
3. Let Cloudflare handle all domain-level redirects
4. Monitor server resources (CPU, memory, disk)
5. Set up PM2 monitoring and auto-restart
6. Configure health checks in AWS
7. Set up CloudWatch alarms for server issues

---

**Status**: Redirect loops fixed in code. Now you need to:
1. Deploy the updated code to EC2
2. Configure Cloudflare as described above
3. Restart your server
