#!/bin/bash

# Build the client application
echo "Building client application..."
npm run build:client

echo "Build completed! The static files are in ./dist/public/"
echo ""
echo "Next steps:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to Pages section"
echo "3. Choose 'GitHub Actions' as the source"
echo "4. Push your changes to trigger the deployment"
echo ""
echo "Or you can manually upload the contents of ./dist/public/ to your GitHub Pages"