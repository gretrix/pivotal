#!/bin/bash

echo "🚨 REMOVING SECRETS FROM GIT HISTORY"
echo "======================================"
echo ""
echo "This will rewrite Git history to remove exposed credentials."
echo "⚠️  WARNING: This will change commit hashes!"
echo ""
read -p "Continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "Aborted."
    exit 1
fi

echo ""
echo "Step 1: Creating backup..."
git branch backup-before-cleanup

echo "Step 2: Removing sensitive data from ec2-setup.sh..."

# Create a filter script
cat > /tmp/filter-script.sh << 'FILTER_EOF'
#!/bin/bash
if [ "$GIT_COMMIT" = "d6395a8" ] || [ "$GIT_COMMIT" = "5aa2d25" ]; then
    # Replace sensitive data in ec2-setup.sh
    sed -i 's/SMTP_PASS=nnuo nmnv sryb uccc/SMTP_PASS=your-app-password/g' ec2-setup.sh
    sed -i 's/NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc0pC0sAAAAADKvr_roi-e6VVJEldTQm2cdT2GE/NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key/g' ec2-setup.sh
    sed -i 's/RECAPTCHA_SECRET_KEY=6Lc0pC0sAAAAAFqVVvW9gUI0DqylFwILklZcDO19/RECAPTCHA_SECRET_KEY=your-secret-key/g' ec2-setup.sh
fi
FILTER_EOF

chmod +x /tmp/filter-script.sh

# Use git filter-branch to rewrite history
git filter-branch --tree-filter '/tmp/filter-script.sh' --tag-name-filter cat -- --all

echo ""
echo "Step 3: Cleaning up..."
rm -rf .git/refs/original/
git reflog expire --expire=now --all
git gc --prune=now --aggressive

echo ""
echo "✅ Secrets removed from Git history!"
echo ""
echo "Next steps:"
echo "1. Review the changes: git log --oneline"
echo "2. Force push to GitHub: git push origin --force --all"
echo "3. Verify on GitHub that secrets are gone"
echo ""
echo "If something went wrong, restore from backup:"
echo "  git checkout backup-before-cleanup"
echo ""
