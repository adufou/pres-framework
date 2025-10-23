#!/bin/bash

# Build all Observable Framework projects for GitHub Pages deployment
# This script builds the index project to dist/ and all presentations to dist/<presentation-name>/

set -e

echo "🔨 Building all presentations for GitHub Pages..."

# Create root dist directory
mkdir -p dist

# Build index project to root dist
echo "📍 Building index..."
cd index
pnpm build
cp -r dist/* ../dist/
cd ..

# Build each presentation to subdirectory
for pres_dir in presentations/*/; do
    pres_name=$(basename "$pres_dir")
    echo "📍 Building presentation: $pres_name..."
    cd "$pres_dir"
    pnpm build
    mkdir -p "../../dist/$pres_name"
    cp -r dist/* "../../dist/$pres_name/"
    cd ../..
done

echo "✅ Build complete! All projects ready in dist/"
echo "📂 dist/"
ls -la dist/
