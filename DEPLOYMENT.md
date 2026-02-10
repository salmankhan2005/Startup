# Deployment Guide

## Performance Optimizations Applied ✅
- Image optimization (AVIF/WebP)
- CDN enabled for Sanity
- ISR with 60s revalidation
- Package import optimization
- Minimized bundle size

## Deploy to Vercel

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to https://vercel.com
2. Click "Import Project"
3. Select your GitHub repository
4. Add Environment Variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=tv7eiruy
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   SANITY_TOKEN=your_token_here
   NEXT_PUBLIC_SANITY_STUDIO_URL=https://your-domain.vercel.app
   AUTH_SECRET=your_auth_secret
   AUTH_GITHUB_ID=your_github_id
   AUTH_GITHUB_SECRET=your_github_secret
   ```
5. Click "Deploy"

### 3. Update Sanity CORS
After deployment, add your Vercel URL to Sanity CORS:
- Go to: https://www.sanity.io/manage/personal/project/tv7eiruy/api
- Add: `https://your-domain.vercel.app`

### 4. Update GitHub OAuth
- Go to: https://github.com/settings/developers
- Update callback URL: `https://your-domain.vercel.app/api/auth/callback/github`

## Deploy Sanity Studio

Your Sanity Studio is already included at `/studio` route.
Access it at: `https://your-domain.vercel.app/studio`

## Performance Tips
- Images auto-optimized to AVIF/WebP
- Pages cached for 60 seconds (ISR)
- CDN enabled for faster content delivery
- Automatic code splitting

## Monitoring
- Check Vercel Analytics for performance
- Monitor Sanity usage at: https://www.sanity.io/manage

Done! 🚀
