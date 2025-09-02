#!/bin/bash

# Wiley Author Services AEM Prototype - Installation Script

echo "=================================================="
echo "Wiley Author Services AEM Prototype Installation"
echo "=================================================="
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version is too old. Please install Node.js v18 or higher."
    echo "   Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check for npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm v8 or higher."
    exit 1
fi

echo "✅ npm $(npm -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"
echo ""

# Create necessary directories if they don't exist
echo "📁 Setting up directory structure..."
mkdir -p content/dam/wiley/author-services/assets/images
mkdir -p content/dam/wiley/author-services/assets/pdfs
mkdir -p content/dam/wiley/author-services/assets/videos
echo "✅ Directory structure created"
echo ""

# Display next steps
echo "=================================================="
echo "✅ Installation Complete!"
echo "=================================================="
echo ""
echo "Next steps:"
echo "1. Start the development server:"
echo "   npm start"
echo ""
echo "2. Open your browser to:"
echo "   http://localhost:3000"
echo ""
echo "3. For more information, see README.md"
echo ""
echo "Happy coding! 🚀"
