#!/bin/bash
echo "🚀 Starting build process..."

# Clean install
echo "📦 Installing dependencies..."
npm ci --legacy-peer-deps

# Build
echo "🔨 Building project..."
npm run build

echo "✅ Build completed successfully!"
