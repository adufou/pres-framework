#!/bin/bash

# Build all Observable Framework projects for GitHub Pages deployment
# This script builds the index project to docs/ and all presentations to docs/<presentation-name>/

set -e

echo "🔨 Building all presentations for GitHub Pages..."

# Create root docs directory
mkdir -p docs

# Build index project to root docs
echo "📍 Building index..."
cd index
pnpm build
cp -r dist/* ../docs/
cd ..

# Build each presentation to subdirectory
for pres_dir in presentations/*/; do
    pres_name=$(basename "$pres_dir")
    echo "📍 Building presentation: $pres_name..."
    cd "$pres_dir"
    pnpm build
    mkdir -p "../../docs/$pres_name"
    cp -r dist/* "../../docs/$pres_name/"
    cd ../..
done

# Copy .nojekyll to disable Jekyll processing on GitHub Pages
cp .nojekyll docs/

echo "✅ Build complete! All projects ready in docs/"
echo "📂 docs/"
ls -la docs/
