#!/bin/bash

echo "🚨 CLEANING GIT HISTORY - REMOVING ALL EXPOSED CREDENTIALS"
echo "============================================================"
echo ""
echo "This will completely rewrite Git history to remove all traces"
echo "of exposed credentials. This is IRREVERSIBLE."
echo ""
read -p "Type 'YES' to continue: " confirm

if [ "$confirm" != "YES" ]; then
    echo "Aborted."
    exit 1
fi

echo ""
echo "Creating backup branch..."
git branch backup-before-history-clean-$(date +%Y%m%d-%H%M%S)

echo ""
echo "Installing git-filter-repo (if not already installed)..."
pip3 install git-filter-repo 2>/dev/null || pip install git-filter-repo 2>/dev/null || echo "git-filter-repo already installed or pip not available"

echo ""
echo "Creating replacements file..."
cat > /tmp/git-secrets-replacements.txt << 'EOF'
nnuo nmnv sryb uccc==>REDACTED_PASSWORD
6Lc0pC0sAAAAADKvr_roi-e6VVJEldTQm2cdT2GE==>REDACTED_SITE_KEY
6Lc0pC0sAAAAAFqVVvW9gUI0DqylFwILklZcDO19==>REDACTED_SECRET_KEY
jtremblay@jontremblay.com==>REDACTED_EMAIL
EOF

echo ""
echo "Rewriting Git history..."
git filter-repo --replace-text /tmp/git-secrets-replacements.txt --force

echo ""
echo "Cleaning up..."
rm -f /tmp/git-secrets-replacements.txt

echo ""
echo "✅ Git history cleaned!"
echo ""
echo "Next steps:"
echo "1. Verify credentials are gone: git log --all -S 'nnuo nmnv'"
echo "2. Force push to GitHub: git push origin --force --all"
echo "3. Force push tags: git push origin --force --tags"
echo ""
echo "⚠️  WARNING: All collaborators will need to re-clone the repository!"
echo ""
