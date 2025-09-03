#!/bin/bash

echo "=================================================="
echo "Testing Wiley Author Services AEM Prototype"
echo "=================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in the project directory"
    echo "   Please run this from the wiley-author-services-aem directory"
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo ""

# Check for node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install http-server
fi

echo ""
echo "🚀 Starting simple HTTP server..."
echo "   Server will run on: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the server
npx http-server . -p 3000 -c-1 --cors
