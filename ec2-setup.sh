#!/bin/bash

# Update system
sudo yum update -y

# Install Node.js 20.x
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Install Git
sudo yum install -y git

# Create app directory
mkdir -p ~/apps
cd ~/apps

# Clone your repository
git clone https://github.com/gretrix/pivotal.git
cd pivotal

# Install dependencies
npm install

# Create .env.local file
cat > .env.local << 'EOF'
SMTP_USER=jtremblay@jontremblay.com
SMTP_PASS=nnuo nmnv sryb uccc
NOTIFICATION_EMAIL=jtremblay@pivotaltech.solutions
EOF

# Build the Next.js app
npm run build

# Start with PM2
pm2 start npm --name "pivotal" -- start
pm2 save
pm2 startup

echo "Setup complete! App is running on port 3000"
