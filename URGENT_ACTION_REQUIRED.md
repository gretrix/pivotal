# 🚨 URGENT ACTION REQUIRED - Credentials Still Exposed

## Current Situation

**Status**: 🔴 CRITICAL - Your credentials are STILL in Git history

**Problem**: Even though I removed credentials from the current code, they remain in Git history and are publicly visible on GitHub.

**Risk**: Anyone can access your:
- Gmail account (via app password)
- reCAPTCHA keys (can bypass your contact form)

## Immediate Actions (Choose ONE method)

### Option 1: NUCLEAR OPTION (Recommended - 5 minutes) ⭐

**Fastest and simplest - completely removes all Git history**

Read and follow: **`NUCLEAR_OPTION_CLEAN_HISTORY.md`**

Quick steps:
```powershell
# 1. Backup
Copy-Item -Path . -Destination ..\pivotal-backup -Recurse -Force

# 2. Remove Git history
Remove-Item -Path .git -Recurse -Force

# 3. Fresh start
git init
git add .
git commit -m "Initial commit - clean history"

# 4. Force push
git remote add origin https://github.com/ratneshdheeraj/pivotal.git
git push -u origin main --force
```

### Option 2: Use BFG Repo-Cleaner (15 minutes)

**Preserves Git history but requires Java**

Run: **`Clean-GitHistory.ps1`**

Requirements:
- Java must be installed
- PowerShell script execution enabled

### Option 3: Use git-filter-repo (15 minutes)

**Preserves Git history but requires Python**

Run: **`CLEAN_GIT_HISTORY_NOW.sh`** (in Git Bash)

Requirements:
- Python and pip installed
- Git Bash or WSL

## After Cleaning History

### CRITICAL: Rotate ALL Credentials

Even after cleaning Git history, you MUST rotate credentials because they were public:

#### 1. New reCAPTCHA Keys (2 minutes)
```
1. Go to: https://www.google.com/recaptcha/admin
2. Delete old site or create new one
3. Copy new Site Key and Secret Key
```

#### 2. New Gmail App Password (2 minutes)
```
1. Go to: https://myaccount.google.com/apppasswords
2. Delete old "Pivotal Tech" password
3. Create new app password
4. Copy 16-character password
```

#### 3. Update .env.local (2 minutes)

**On your local machine:**
```bash
nano .env.local
```

Update with NEW credentials:
```env
SMTP_USER=jtremblay@jontremblay.com
SMTP_PASS=your-new-16-char-password
NOTIFICATION_EMAIL=jtremblay@pivotaltech.solutions
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-new-site-key
RECAPTCHA_SECRET_KEY=your-new-secret-key
NODE_ENV=production
```

**On EC2 server:**
```bash
ssh -i your-key.pem ec2-user@your-ec2-ip
cd ~/apps/pivotal
nano .env.local
# Paste same NEW credentials
```

#### 4. Rebuild and Restart (2 minutes)

```bash
# On EC2
cd ~/apps/pivotal
git pull origin main
npm run build
pm2 restart pivotal
```

#### 5. Test (1 minute)

1. Visit: https://pivotaltech.solutions/contact
2. Fill form and complete reCAPTCHA
3. Submit
4. Verify emails are received

## Verification Checklist

After completing all steps:

- [ ] Git history cleaned (only 1-2 commits visible)
- [ ] Searched GitHub for old credentials (found nothing)
- [ ] New reCAPTCHA keys generated
- [ ] New Gmail app password generated
- [ ] .env.local updated locally with NEW credentials
- [ ] .env.local updated on EC2 with NEW credentials
- [ ] App rebuilt on EC2
- [ ] PM2 restarted
- [ ] Contact form tested successfully
- [ ] Emails received successfully
- [ ] GitGuardian alert resolved

## Why This is Urgent

### Current Risk Level: 🔴 CRITICAL

**What attackers can do RIGHT NOW:**

1. **Access your Gmail account**
   - Send emails as you
   - Read your emails
   - Use for phishing attacks

2. **Bypass your reCAPTCHA**
   - Spam your contact form
   - Launch bot attacks
   - Overwhelm your email

3. **Damage your reputation**
   - Send spam from your domain
   - Blacklist your email server
   - Harm your business credibility

### Timeline

| Time | Risk |
|------|------|
| **Now** | 🔴 Credentials are public |
| **After history clean** | 🟡 Old credentials still valid |
| **After rotation** | 🟢 Old credentials useless |

## Recommended Approach

**For fastest resolution (15 minutes total):**

1. **Clean history** using Nuclear Option (5 min)
2. **Rotate credentials** (5 min)
3. **Update and test** (5 min)

## Files to Read

1. **NUCLEAR_OPTION_CLEAN_HISTORY.md** ⭐ **START HERE** (simplest)
2. **Clean-GitHistory.ps1** (if you have Java)
3. **CLEAN_GIT_HISTORY_NOW.sh** (if you have Python)
4. **QUICK_SECURITY_FIX.md** (credential rotation guide)

## Support

If you need help:
1. Read the documentation files above
2. Follow step-by-step instructions
3. Verify each step before moving to next

## Summary

**Problem**: Credentials exposed in Git history
**Solution**: Clean history + Rotate credentials
**Time**: 15 minutes
**Priority**: 🚨 URGENT - Do this NOW

**Start with**: `NUCLEAR_OPTION_CLEAN_HISTORY.md` (easiest and fastest)

---

## Quick Command Reference

### Clean History (Nuclear Option)
```powershell
Remove-Item -Path .git -Recurse -Force
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ratneshdheeraj/pivotal.git
git push -u origin main --force
```

### Verify Clean
```powershell
git log --all -S "nnuo nmnv"  # Should return nothing
```

### Update EC2
```bash
cd ~/apps/pivotal
git pull origin main
nano .env.local  # Add NEW credentials
npm run build
pm2 restart pivotal
```

---

**DO THIS NOW - Your credentials are publicly exposed!**
