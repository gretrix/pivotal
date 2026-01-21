# 🚨 CRITICAL SECURITY FIX - Exposed Credentials

## What Happened?

Your reCAPTCHA keys and SMTP credentials were accidentally exposed in:
1. `ec2-setup.sh` (deployment script)
2. `.env.local` (local environment file)

These files were committed to GitHub, making your credentials publicly visible.

## Immediate Actions Required

### 1. Rotate ALL Exposed Credentials (CRITICAL - Do This NOW)

#### A. Generate New reCAPTCHA Keys
1. Go to: https://www.google.com/recaptcha/admin
2. Find your site: pivotaltech.solutions
3. Click **Settings** (gear icon)
4. Click **Delete this site** (or create a new one)
5. Create a new reCAPTCHA v2 site:
   - Label: PivotalTech Solutions
   - reCAPTCHA type: "I'm not a robot" Checkbox
   - Domains: pivotaltech.solutions
6. Copy the new **Site Key** and **Secret Key**

#### B. Generate New Gmail App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Delete the old app password for "Pivotal Tech"
3. Create a new app password:
   - App: Mail
   - Device: Custom (enter "Pivotal Tech Server")
4. Copy the new 16-character password

### 2. Update Environment Variables

#### On Your Local Machine
```bash
# Edit .env.local (this file is NOT committed to git)
nano .env.local
```

Update with NEW credentials:
```env
SMTP_USER=jtremblay@jontremblay.com
SMTP_PASS=xxxx xxxx xxxx xxxx  # NEW app password
NOTIFICATION_EMAIL=jtremblay@pivotaltech.solutions
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc...  # NEW site key
RECAPTCHA_SECRET_KEY=6Lc...  # NEW secret key
NODE_ENV=production
```

#### On EC2 Server
```bash
# SSH into EC2
ssh -i your-key.pem ec2-user@your-ec2-ip

# Navigate to app
cd ~/apps/pivotal

# Edit .env.local
nano .env.local
```

Update with the SAME NEW credentials as above.

### 3. Update Frontend reCAPTCHA Key

The site key is used in the frontend, so you need to update it:

```bash
# On EC2 server
cd ~/apps/pivotal

# Pull latest changes (after you commit the fixes)
git pull origin main

# Rebuild the app
npm run build

# Restart server
pm2 restart pivotal
```

### 4. Clean Git History (CRITICAL)

The old credentials are still in your Git history. You need to remove them:

#### Option A: Using git-filter-repo (Recommended)

```bash
# On your local machine
cd ~/path/to/pivotal

# Install git-filter-repo
pip install git-filter-repo

# Remove .env.local from history
git filter-repo --path .env.local --invert-paths

# Remove sensitive data from ec2-setup.sh
git filter-repo --path ec2-setup.sh --invert-paths

# Force push to GitHub
git push origin --force --all
```

#### Option B: Using BFG Repo-Cleaner

```bash
# Download BFG
wget https://repo1.maven.org/maven2/com/madgag/bfg/1.14.0/bfg-1.14.0.jar

# Remove .env.local
java -jar bfg-1.14.0.jar --delete-files .env.local

# Clean up
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push
git push origin --force --all
```

#### Option C: Nuclear Option (Easiest but loses history)

If you don't care about Git history:

```bash
# Create a new repository
cd ~/path/to/pivotal

# Remove .git directory
rm -rf .git

# Initialize new repo
git init
git add .
git commit -m "Initial commit with secure configuration"

# Force push to GitHub
git remote add origin https://github.com/gretrix/pivotal.git
git push -u origin main --force
```

### 5. Verify Credentials Are Removed

After cleaning Git history:

```bash
# Search for old credentials in Git history
git log --all --full-history --source --all -- .env.local
git log --all --full-history --source --all -- ec2-setup.sh

# Search for the old reCAPTCHA key
git log -S "6Lc0pC0sAAAAADKvr_roi-e6VVJEldTQm2cdT2GE" --all

# Search for the old SMTP password
git log -S "nnuo nmnv sryb uccc" --all
```

If these commands return results, the credentials are still in history.

## Files Fixed

### ✅ ec2-setup.sh
- Removed hardcoded credentials
- Now requires manual .env.local creation
- Added instructions for environment variables

### ✅ .env.example (NEW)
- Template for environment variables
- Safe to commit to Git
- No actual credentials

### ✅ .gitignore
- Already includes `.env*` pattern
- Prevents future .env files from being committed

## Security Best Practices

### ✅ DO:
- Keep credentials in `.env.local` (never commit)
- Use `.env.example` as a template
- Rotate credentials regularly
- Use app-specific passwords for Gmail
- Monitor GitGuardian alerts

### ❌ DON'T:
- Never commit `.env.local` to Git
- Never hardcode credentials in scripts
- Never share credentials in documentation
- Never commit API keys or passwords

## Verification Checklist

- [ ] New reCAPTCHA keys generated
- [ ] New Gmail app password generated
- [ ] `.env.local` updated locally with NEW credentials
- [ ] `.env.local` updated on EC2 with NEW credentials
- [ ] App rebuilt and restarted on EC2
- [ ] Contact form tested with new reCAPTCHA
- [ ] Old credentials removed from Git history
- [ ] Git history verified clean
- [ ] Force pushed to GitHub
- [ ] GitGuardian alert resolved

## Testing

After updating credentials:

### Test reCAPTCHA
1. Go to: https://pivotaltech.solutions/contact
2. Fill out the contact form
3. Complete the reCAPTCHA challenge
4. Submit the form
5. Should work without errors

### Test Email
1. Submit the contact form
2. Check if you receive the notification email
3. Check if the user receives confirmation email

### Test Health Endpoint
```bash
curl https://pivotaltech.solutions/api/health
```

Should return:
```json
{
  "status": "healthy",
  "envVariables": {
    "SMTP_USER": true,
    "SMTP_PASS": true,
    "NOTIFICATION_EMAIL": true,
    "RECAPTCHA_SECRET_KEY": true,
    "NEXT_PUBLIC_RECAPTCHA_SITE_KEY": true
  }
}
```

## Monitoring

### GitGuardian
- Monitor for future credential leaks
- Set up alerts for your repository
- Review security dashboard regularly

### GitHub Security
1. Go to: https://github.com/gretrix/pivotal/security
2. Enable **Dependabot alerts**
3. Enable **Secret scanning**
4. Review security advisories

## Prevention

### For Future Deployments

1. **Never hardcode credentials** in any file that goes to Git
2. **Use environment variables** for all sensitive data
3. **Use .env.example** as a template (safe to commit)
4. **Keep .env.local** out of Git (already in .gitignore)
5. **Review commits** before pushing to ensure no secrets
6. **Use pre-commit hooks** to scan for secrets

### Pre-commit Hook (Optional)

Create `.git/hooks/pre-commit`:
```bash
#!/bin/bash

# Check for potential secrets
if git diff --cached | grep -E "(SMTP_PASS|RECAPTCHA_SECRET_KEY|password|secret|api_key)" > /dev/null; then
    echo "❌ ERROR: Potential secret detected in commit!"
    echo "Please remove sensitive data before committing."
    exit 1
fi
```

Make it executable:
```bash
chmod +x .git/hooks/pre-commit
```

## Summary

**What was exposed:**
- reCAPTCHA Site Key: `6Lc0pC0sAAAAADKvr_roi-e6VVJEldTQm2cdT2GE`
- reCAPTCHA Secret Key: `6Lc0pC0sAAAAAFqVVvW9gUI0DqylFwILklZcDO19`
- SMTP Password: `nnuo nmnv sryb uccc`
- SMTP User: `jtremblay@jontremblay.com`

**Actions taken:**
- ✅ Removed credentials from ec2-setup.sh
- ✅ Created .env.example template
- ✅ Updated .gitignore (already had .env*)
- ✅ Created security documentation

**Actions required from you:**
1. ⚠️ Generate NEW reCAPTCHA keys
2. ⚠️ Generate NEW Gmail app password
3. ⚠️ Update .env.local locally and on EC2
4. ⚠️ Clean Git history to remove old credentials
5. ⚠️ Force push to GitHub
6. ⚠️ Test contact form with new credentials

---

**Priority**: CRITICAL
**Time Required**: 30-45 minutes
**Risk**: High (credentials are public until rotated)
