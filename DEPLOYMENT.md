# Deploying to Vercel

This project is ready for immediate deployment to Vercel. Follow these simple steps:

## Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "New Project"
3. Import the `bakdaaswandi5818/azkia` repository
4. Vercel will automatically detect Next.js - no configuration needed!
5. Click "Deploy"
6. Your site will be live in ~2 minutes at `https://azkia.vercel.app` (or similar)

## Option 2: Deploy via Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Navigate to the project directory and run:
   ```bash
   vercel
   ```

3. Follow the prompts - Vercel will automatically configure everything

## Option 3: One-Click Deploy

Click this button to deploy directly:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bakdaaswandi5818/azkia)

## After Deployment

Once deployed, your website will be available at a Vercel URL. You can:
- Add a custom domain in the Vercel dashboard
- Configure environment variables (if needed in the future)
- Enable automatic deployments for every push to the main branch

## Build Information

- **Framework**: Next.js 16.1.6
- **Build Command**: `npm run build` (automatically detected)
- **Output Directory**: `.next` (automatically detected)
- **Install Command**: `npm install` (automatically detected)

All pages are statically generated for optimal performance:
- `/` (Homepage)
- `/products` (Product listing)
- `/about` (About page)
- `/contact` (Contact page)

No additional configuration required! 🎉
