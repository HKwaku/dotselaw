# 🚀 Quick Deployment Guide - VS Code to Vercel via GitHub

## Prerequisites Checklist
- [ ] VS Code installed
- [ ] Git installed
- [ ] Node.js 18+ installed
- [ ] GitHub account created
- [ ] Vercel account created (sign up with GitHub)

---

## Step-by-Step Deployment

### 1️⃣ Open Project in VS Code

```bash
# Navigate to your project folder
cd path/to/dotselaw-website

# Open in VS Code
code .
```

### 2️⃣ Install Dependencies

Open VS Code terminal (Ctrl+` or View → Terminal) and run:

```bash
npm install
```

### 3️⃣ Test Locally (Optional but Recommended)

```bash
npm run dev
```

Visit http://localhost:3000 to see your site. Press Ctrl+C to stop.

### 4️⃣ Initialize Git Repository

In VS Code terminal:

```bash
# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Dotse@Law website"
```

### 5️⃣ Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **"+"** icon → **"New repository"**
3. Name it: `dotselaw-website` (or your preferred name)
4. **Important:** Do NOT initialize with README, .gitignore, or license
5. Click **"Create repository"**

### 6️⃣ Push to GitHub

GitHub will show you commands. In VS Code terminal, run:

```bash
# Add remote origin (replace YOUR-USERNAME and YOUR-REPO)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Alternative:** Use VS Code's Source Control panel:
1. Click Source Control icon (Ctrl+Shift+G)
2. Click "Publish to GitHub"
3. Choose public or private
4. Select files to include
5. Click "Publish"

### 7️⃣ Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**

2. **Sign in with GitHub** (if not already signed in)

3. **Click "Add New..." → "Project"**

4. **Import your repository:**
   - Find your `dotselaw-website` repository
   - Click **"Import"**

5. **Configure (use defaults):**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

6. **Click "Deploy"**

7. **Wait 1-2 minutes** for deployment to complete

8. **Your site is live!** 🎉
   - Vercel provides a URL: `https://your-project.vercel.app`
   - Click the URL to view your live site

### 8️⃣ Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Click **"Add"**
4. Enter your domain: `dotselaw.com`
5. Follow DNS configuration instructions

---

## 📝 Making Updates

### From VS Code:

1. **Make your changes** in VS Code

2. **Save files** (Ctrl+S)

3. **Test locally:**
   ```bash
   npm run dev
   ```

4. **Commit changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

**Or use VS Code GUI:**
1. Open Source Control (Ctrl+Shift+G)
2. Review changes
3. Enter commit message
4. Click ✓ (Commit)
5. Click "..." → "Push"

5. **Vercel auto-deploys** within 1-2 minutes!

---

## 🔧 Useful Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Check for errors
npm run lint
```

---

## 🆘 Troubleshooting

### Build Fails on Vercel?
1. Check Vercel build logs for errors
2. Ensure `npm run build` works locally
3. Check that all dependencies are in `package.json`

### Git Issues?
```bash
# Check status
git status

# See commit history
git log --oneline

# View remote
git remote -v
```

### Port Already in Use?
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [VS Code Git Guide](https://code.visualstudio.com/docs/sourcecontrol/overview)

---

## ✅ Deployment Checklist

- [ ] Project opens in VS Code
- [ ] Dependencies installed (`npm install`)
- [ ] Site runs locally (`npm run dev`)
- [ ] Git initialized and committed
- [ ] Pushed to GitHub
- [ ] Imported to Vercel
- [ ] Site deployed successfully
- [ ] Live URL works
- [ ] Custom domain configured (optional)

**Congratulations! Your website is live! 🎉**
