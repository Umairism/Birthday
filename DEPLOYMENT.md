# 🚀 Deployment Guide

## Quick Setup for GitHub

1. **Initialize Git Repository** (if not already done):
```bash
git init
git add .
git commit -m "🎉 Initial commit - Birthday webapp ready!"
```

2. **Create GitHub Repository**:
   - Go to GitHub.com and create a new repository
   - Name it something like `birthday-webapp` or `special-birthday-wish`
   - Don't initialize with README (since we already have one)

3. **Connect and Push**:
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## Automatic Deployment

The project includes GitHub Actions that will automatically:
- ✅ Build the project when you push to main
- ✅ Deploy to GitHub Pages
- ✅ Make it available at `https://yourusername.github.io/repo-name`

## Manual Deployment

If you prefer manual deployment:

1. **Build the project**:
```bash
npm run build
```

2. **Deploy to GitHub Pages**:
```bash
npm run deploy
```

## Alternative Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. It will auto-deploy on every push
3. Custom domain support available

### Netlify
1. Drag and drop the `dist` folder after running `npm run build`
2. Or connect your GitHub repo for automatic deployments

### Surge.sh
```bash
npm install -g surge
npm run build
cd dist
surge
```

## Environment Setup

The webapp works out of the box with no environment variables needed!

## Custom Domain (Optional)

If you have a custom domain:
1. Add it to the `cname` field in `.github/workflows/deploy.yml`
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

---

Your beautiful birthday webapp will be live and ready to spread joy! 🎉💕