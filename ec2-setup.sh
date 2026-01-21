#!/bin/bash

# Exit on error
set -e

echo "Starting PivotalTech Solutions deployment..."

# Update system
echo "Updating system packages..."
sudo yum update -y

# Install Node.js 20.x
echo "Installing Node.js 20.x..."
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs

# Install PM2 globally
echo "Installing PM2..."
sudo npm install -g pm2

# Install Git
echo "Installing Git..."
sudo yum install -y git

# Create app directory
echo "Creating app directory..."
mkdir -p ~/apps
cd ~/apps

# Clone your repository (or pull if exists)
if [ -d "pivotal" ]; then
  echo "Repository exists, pulling latest changes..."
  cd pivotal
  git pull origin main
else
  echo "Cloning repository..."
  git clone https://github.com/gretrix/pivotal.git
  cd pivotal
fi

# Create .env.local file
echo "Creating environment file..."
echo "⚠️  IMPORTANT: You need to create .env.local with your credentials"
echo "Create the file manually with:"
echo "  SMTP_USER=your-email@domain.com"
echo "  SMTP_PASS=your-app-password"
echo "  NOTIFICATION_EMAIL=your-notification-email"
echo "  NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key"
echo "  RECAPTCHA_SECRET_KEY=your-secret-key"
echo "  NODE_ENV=production"
echo ""
echo "Checking if .env.local exists..."
if [ ! -f .env.local ]; then
  echo "❌ ERROR: .env.local file not found!"
  echo "Please create .env.local with your environment variables before continuing."
  exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the Next.js app
echo "Building Next.js application..."
npm run build

# Stop existing PM2 process if running
echo "Stopping existing PM2 process..."
pm2 delete pivotal 2>/dev/null || true

# Start with PM2
echo "Starting application with PM2..."
pm2 start npm --name "pivotal" --max-memory-restart 1G -- start

# Save PM2 configuration
echo "Saving PM2 configuration..."
pm2 save

# Setup PM2 to start on system boot
echo "Setting up PM2 startup script..."
pm2 startup systemd -u $USER --hp $HOME

# Display status
echo ""
echo "=========================================="
echo "Deployment complete!"
echo "=========================================="
echo ""
pm2 status
echo ""
echo "Application is running on port 3000"
echo "Health check: http://localhost:3000/api/health"
echo ""
echo "Useful commands:"
echo "  pm2 status          - Check application status"
echo "  pm2 logs pivotal    - View application logs"
echo "  pm2 restart pivotal - Restart application"
echo "  pm2 monit           - Monitor resources"
echo ""
