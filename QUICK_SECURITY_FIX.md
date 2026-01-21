# 🚨 QUICK SECURITY FIX - Step by Step

## What's Wrong?

Your credentials were exposed in `ec2-setup.sh` which was committed to GitHub:
- reCAPTCHA keys
- SMTP password

## Quick Fix (15 minutes)

### Step 1: Rotate Credentials (5 min)

#### A. New reCAPTCHA Keys
1. Go to: https://www.google.com/recaptcha/admin
2. Create NEW site or regenerate keys
3. Copy the new Site Key and Secret Key

#### B. New Gmail App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Delete old "Pivotal Tech" password
3. Create new app password
4. Copy the 16-character password

### Step 2: Update .env.local (2 min)

**On your local machine:**
```bash
# Edit .env.local
nano .env.local
```

Update with NEW credentials:
```env
SMTP_USER=jtremblay@jontremblay.com
SMTP_PASS=your-new-app-password-here
NOTIFICATION_EMAIL=jtremblay@pivotaltech.solutions
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-new-site-key-here
RECAPTCHA_SECRET_KEY=your-new-secret-key-here
NODE_ENV=production
```

**On EC2 server:**
```bash
ssh -i your-key.pem ec2-user@your-ec2-ip
cd ~/apps/pivotal
nano .env.local
# Paste the same NEW credentials
```

### Step 3: Commit the Fixed ec2-setup.sh (1 min)

The credentials are already removed from `ec2-setup.sh`. Just commit:

```bash
# On your local machine
git add ec2-setup.sh .env.example SECURITY_FIX.md QUICK_SECURITY_FIX.md
git commit -m "Security: Remove hardcoded credentials from deployment script"
git push origin main
```

### Step 4: Remove from Git History (5 min)

**Option A: Simple Force Push (Easiest)**

```bash
# Create a fresh commit without the old history
git checkout --orphan temp-branch
git add -A
git commit -m "Security: Fresh start without exposed credentials"
git branch -D main
git branch -m main
git push -f origin main
```

**Option B: Using git filter-repo (Better)**

```bash
# Install git-filter-repo
pip install git-filter-repo

# Create a file with strings to replace
cat > replacements.txt << 'EOF'
REDACTED_PASSWORD==>your-app-password
REDACTED_SITE_KEY==>your-site-key
REDACTED_SECRET_KEY==>your-secret-key
EOF

# Replace in history
git filter-repo --replace-text replacements.txt

# Force push
git push origin --force --all
```

### Step 5: Rebuild on EC2 (2 min)

```bash
# SSH into EC2
ssh -i your-key.pem ec2-user@your-ec2-ip

# Navigate and pull
cd ~/apps/pivotal
git pull origin main

# Rebuild
npm run build

# Restart
pm2 restart pivotal
```

### Step 6: Test (2 min)

1. Visit: https://pivotaltech.solutions/contact
2. Fill out form with reCAPTCHA
3. Submit
4. Check if emails are received

## Verification

```bash
# Check Git history for old secrets
git log -S "REDACTED_PASSWORD" --all
# Should return nothing

git log -S "REDACTED_SITE_KEY" --all
# Should return nothing
```

## If You're in a Hurry

**Absolute minimum (5 minutes):**

1. Generate new reCAPTCHA keys: https://www.google.com/recaptcha/admin
2. Generate new Gmail app password: https://myaccount.google.com/apppasswords
3. Update `.env.local` on EC2 with new credentials
4. Restart: `pm2 restart pivotal`
5. Test contact form

Then do the Git history cleanup when you have more time.

## Files Changed

- ✅ `ec2-setup.sh` - Credentials removed
- ✅ `.env.example` - Safe template created
- ✅ `SECURITY_FIX.md` - Detailed guide
- ✅ `QUICK_SECURITY_FIX.md` - This file

## Important Notes

- `.env.local` was NEVER committed (it's in .gitignore) ✅
- Only `ec2-setup.sh` had credentials in Git history ❌
- The credentials are in 2 commits: `d6395a8` and `5aa2d25`

## After Fix

- [ ] New credentials generated
- [ ] .env.local updated locally
- [ ] .env.local updated on EC2
- [ ] ec2-setup.sh committed without secrets
- [ ] Git history cleaned
- [ ] Force pushed to GitHub
- [ ] App rebuilt and restarted
- [ ] Contact form tested
- [ ] GitGuardian alert resolved

---

**Priority**: CRITICAL
**Time**: 15 minutes
**Difficulty**: Easy
