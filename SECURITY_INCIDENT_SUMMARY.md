# 🚨 Security Incident Summary

## Incident Details

**Date**: January 20, 2026
**Severity**: HIGH
**Type**: Exposed Credentials in Public Repository
**Detected By**: GitGuardian
**Status**: PARTIALLY MITIGATED (Action Required)

## What Was Exposed

### Credentials Found in Git History
File: `ec2-setup.sh` (commits: `d6395a8`, `5aa2d25`)

1. **reCAPTCHA Site Key**: `6Lc...REDACTED...`
2. **reCAPTCHA Secret Key**: `6Lc...REDACTED...`
3. **SMTP Password**: `REDACTED`
4. **SMTP User**: `jtremblay@jontremblay.com`
5. **Notification Email**: `jtremblay@pivotaltech.solutions`

### Impact Assessment

**reCAPTCHA Keys**:
- ⚠️ **Risk**: Medium-High
- **Impact**: Attackers could bypass reCAPTCHA on your contact form
- **Potential**: Spam submissions, bot attacks
- **Mitigation**: Regenerate keys immediately

**SMTP Credentials**:
- 🚨 **Risk**: HIGH
- **Impact**: Attackers could send emails from your account
- **Potential**: Phishing, spam, reputation damage
- **Mitigation**: Revoke app password immediately

## Actions Taken

### ✅ Completed

1. **Removed credentials from code**
   - Updated `ec2-setup.sh` to not include hardcoded credentials
   - Created `.env.example` as a safe template
   - Committed changes to repository

2. **Created documentation**
   - `SECURITY_FIX.md` - Detailed remediation guide
   - `QUICK_SECURITY_FIX.md` - Quick step-by-step fix
   - `SECURITY_INCIDENT_SUMMARY.md` - This document

3. **Verified .gitignore**
   - Confirmed `.env*` pattern is in .gitignore
   - Verified `.env.local` was never committed

### ⚠️ CRITICAL - Actions Required from You

1. **Rotate ALL Credentials** (DO THIS NOW)
   - [ ] Generate new reCAPTCHA keys
   - [ ] Generate new Gmail app password
   - [ ] Update `.env.local` locally
   - [ ] Update `.env.local` on EC2 server

2. **Clean Git History**
   - [ ] Remove old credentials from Git history
   - [ ] Force push to GitHub
   - [ ] Verify credentials are gone

3. **Rebuild and Test**
   - [ ] Rebuild app on EC2
   - [ ] Restart PM2 process
   - [ ] Test contact form
   - [ ] Verify emails work

4. **Monitor**
   - [ ] Check GitGuardian dashboard
   - [ ] Monitor for suspicious activity
   - [ ] Review email logs

## Step-by-Step Remediation

### Priority 1: Rotate Credentials (5 minutes)

#### New reCAPTCHA Keys
```
1. Visit: https://www.google.com/recaptcha/admin
2. Select your site or create new one
3. Copy new Site Key and Secret Key
```

#### New Gmail App Password
```
1. Visit: https://myaccount.google.com/apppasswords
2. Delete old "Pivotal Tech" password
3. Create new app password
4. Copy 16-character password
```

### Priority 2: Update Environment Variables (3 minutes)

**Local Machine:**
```bash
nano .env.local
# Update with NEW credentials
```

**EC2 Server:**
```bash
ssh -i your-key.pem ec2-user@your-ec2-ip
cd ~/apps/pivotal
nano .env.local
# Update with NEW credentials
```

### Priority 3: Clean Git History (5 minutes)

**Quick Method (Recommended):**
```bash
# Create fresh branch without history
git checkout --orphan temp-branch
git add -A
git commit -m "Security: Fresh start without exposed credentials"
git branch -D main
git branch -m main
git push -f origin main
```

**Alternative Method:**
```bash
# Use git filter-repo
pip install git-filter-repo

# Create replacements file
cat > replacements.txt << 'EOF'
REDACTED_PASSWORD==>REDACTED
REDACTED_SITE_KEY==>REDACTED
REDACTED_SECRET_KEY==>REDACTED
EOF

# Replace in history
git filter-repo --replace-text replacements.txt

# Force push
git push origin --force --all
```

### Priority 4: Rebuild and Test (3 minutes)

```bash
# On EC2
cd ~/apps/pivotal
git pull origin main
npm run build
pm2 restart pivotal

# Test
curl http://localhost:3000/api/health
```

## Verification

### Check Git History is Clean
```bash
# Should return nothing:
git log -S "REDACTED_PASSWORD" --all
git log -S "REDACTED_SITE_KEY" --all
```

### Test Application
1. Visit: https://pivotaltech.solutions/contact
2. Fill form and complete reCAPTCHA
3. Submit form
4. Verify emails are received

### Check Health Endpoint
```bash
curl https://pivotaltech.solutions/api/health
```

Should show all environment variables as `true`.

## Timeline

| Time | Action | Status |
|------|--------|--------|
| Jan 20, 8:08 AM | GitGuardian detected exposure | ✅ Detected |
| Jan 20, 10:43 PM | Alert forwarded to admin | ✅ Notified |
| Jan 21, ~2:00 PM | Code fixed, credentials removed | ✅ Fixed |
| Jan 21, ~2:00 PM | Documentation created | ✅ Done |
| **Pending** | Credentials rotated | ⚠️ **YOU NEED TO DO THIS** |
| **Pending** | Git history cleaned | ⚠️ **YOU NEED TO DO THIS** |
| **Pending** | Application tested | ⚠️ **YOU NEED TO DO THIS** |

## Lessons Learned

### What Went Wrong
1. Hardcoded credentials in deployment script
2. Script committed to public repository
3. Credentials remained in Git history

### Prevention Measures
1. ✅ Never hardcode credentials in any file
2. ✅ Use `.env.local` for all secrets (already in .gitignore)
3. ✅ Use `.env.example` as template (safe to commit)
4. ✅ Review commits before pushing
5. ✅ Enable GitGuardian monitoring
6. ✅ Use pre-commit hooks to scan for secrets

### Future Best Practices
- Always use environment variables
- Never commit `.env.local`
- Use `.env.example` as documentation
- Review diffs before committing
- Enable secret scanning on GitHub
- Rotate credentials regularly

## Resources

### Documentation Created
1. **QUICK_SECURITY_FIX.md** - ⭐ Start here for quick fix
2. **SECURITY_FIX.md** - Detailed remediation guide
3. **SECURITY_INCIDENT_SUMMARY.md** - This document
4. **.env.example** - Safe template for environment variables

### External Resources
- reCAPTCHA Admin: https://www.google.com/recaptcha/admin
- Gmail App Passwords: https://myaccount.google.com/apppasswords
- GitGuardian Dashboard: https://dashboard.gitguardian.com
- GitHub Security: https://github.com/gretrix/pivotal/security

## Current Status

### ✅ Completed
- Code fixed (credentials removed from ec2-setup.sh)
- Documentation created
- Changes committed to repository
- .gitignore verified

### ⚠️ CRITICAL - Pending (YOU MUST DO)
- **Rotate reCAPTCHA keys**
- **Rotate Gmail app password**
- **Update .env.local files**
- **Clean Git history**
- **Force push to GitHub**
- **Rebuild and test application**

### 📊 Risk Level
- **Before rotation**: 🚨 HIGH (credentials are public)
- **After rotation**: ✅ LOW (old credentials useless)

## Next Steps

1. **Read**: `QUICK_SECURITY_FIX.md` for step-by-step instructions
2. **Rotate**: All exposed credentials (15 minutes)
3. **Clean**: Git history (5 minutes)
4. **Test**: Application functionality (5 minutes)
5. **Monitor**: GitGuardian and email logs (ongoing)

---

## Summary

**What happened**: Credentials were accidentally committed to GitHub in `ec2-setup.sh`

**Current status**: Code is fixed, but old credentials are still in Git history and still valid

**Your action required**: Rotate all credentials, clean Git history, rebuild app

**Time required**: 20-30 minutes

**Priority**: 🚨 CRITICAL - Do this as soon as possible

**Start here**: Read `QUICK_SECURITY_FIX.md` and follow the steps
