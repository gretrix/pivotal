# PowerShell script to clean Git history of exposed credentials

Write-Host "🚨 CLEANING GIT HISTORY - REMOVING ALL EXPOSED CREDENTIALS" -ForegroundColor Red
Write-Host "============================================================" -ForegroundColor Red
Write-Host ""
Write-Host "This will completely rewrite Git history using BFG Repo-Cleaner." -ForegroundColor Yellow
Write-Host "This is IRREVERSIBLE and will change all commit hashes." -ForegroundColor Yellow
Write-Host ""

$confirm = Read-Host "Type 'YES' to continue"

if ($confirm -ne "YES") {
    Write-Host "Aborted." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 1: Creating backup branch..." -ForegroundColor Cyan
$backupBranch = "backup-before-clean-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
git branch $backupBranch
Write-Host "✅ Backup created: $backupBranch" -ForegroundColor Green

Write-Host ""
Write-Host "Step 2: Downloading BFG Repo-Cleaner..." -ForegroundColor Cyan
$bfgUrl = "https://repo1.maven.org/maven2/com/madgag/bfg/1.14.0/bfg-1.14.0.jar"
$bfgPath = "bfg.jar"

if (Test-Path $bfgPath) {
    Write-Host "BFG already downloaded" -ForegroundColor Green
} else {
    Invoke-WebRequest -Uri $bfgUrl -OutFile $bfgPath
    Write-Host "✅ BFG downloaded" -ForegroundColor Green
}

Write-Host ""
Write-Host "Step 3: Creating replacements file..." -ForegroundColor Cyan
$replacements = @"
nnuo nmnv sryb uccc==>REDACTED_PASSWORD
6Lc0pC0sAAAAADKvr_roi-e6VVJEldTQm2cdT2GE==>REDACTED_SITE_KEY
6Lc0pC0sAAAAAFqVVvW9gUI0DqylFwILklZcDO19==>REDACTED_SECRET_KEY
"@
$replacements | Out-File -FilePath "replacements.txt" -Encoding ASCII
Write-Host "✅ Replacements file created" -ForegroundColor Green

Write-Host ""
Write-Host "Step 4: Running BFG to clean history..." -ForegroundColor Cyan
Write-Host "This may take a few minutes..." -ForegroundColor Yellow

# Check if Java is installed
try {
    $javaVersion = java -version 2>&1
    Write-Host "Java found: $($javaVersion[0])" -ForegroundColor Green
} catch {
    Write-Host "❌ ERROR: Java is not installed!" -ForegroundColor Red
    Write-Host "Please install Java from: https://www.java.com/download/" -ForegroundColor Yellow
    exit 1
}

# Run BFG
java -jar bfg.jar --replace-text replacements.txt

Write-Host ""
Write-Host "Step 5: Cleaning up Git repository..." -ForegroundColor Cyan
git reflog expire --expire=now --all
git gc --prune=now --aggressive

Write-Host ""
Write-Host "✅ Git history cleaned successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "NEXT STEPS:" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Verify credentials are removed:" -ForegroundColor White
Write-Host "   git log --all -S 'nnuo nmnv'" -ForegroundColor Gray
Write-Host "   (Should return nothing)" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Force push to GitHub:" -ForegroundColor White
Write-Host "   git push origin --force --all" -ForegroundColor Gray
Write-Host "   git push origin --force --tags" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Rotate credentials immediately:" -ForegroundColor White
Write-Host "   - New reCAPTCHA keys: https://www.google.com/recaptcha/admin" -ForegroundColor Gray
Write-Host "   - New Gmail app password: https://myaccount.google.com/apppasswords" -ForegroundColor Gray
Write-Host ""
Write-Host "⚠️  WARNING:" -ForegroundColor Red
Write-Host "All collaborators will need to re-clone the repository!" -ForegroundColor Red
Write-Host ""
Write-Host "If something went wrong, restore from backup:" -ForegroundColor Yellow
Write-Host "   git checkout $backupBranch" -ForegroundColor Gray
Write-Host ""

# Cleanup
Remove-Item "replacements.txt" -ErrorAction SilentlyContinue
