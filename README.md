# Dotse@Law - Modern Legal Services Website

A modern, responsive website for Dotse@Law, a full-service law firm in Ghana. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js 14
- 🎨 Styled with Tailwind CSS
- 🔍 SEO optimized
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed
- VS Code (recommended)
- GitHub account
- Vercel account

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd dotselaw-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel via GitHub

### Step 1: Push to GitHub

1. **Create a new repository on GitHub** (don't initialize with README)

2. **Initialize Git in your project:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Dotse@Law website"
   ```

3. **Connect to GitHub and push:**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. **Go to [vercel.com](https://vercel.com) and sign in** with GitHub

2. **Click "Add New Project"**

3. **Import your GitHub repository:**
   - Select your repository from the list
   - Click "Import"

4. **Configure your project:**
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** .next (default)
   - **Install Command:** `npm install` (default)

5. **Click "Deploy"**

6. **Wait for deployment** (usually takes 1-2 minutes)

7. **Your site is live!** Vercel will provide you with a URL like:
   - `https://your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Add your custom domain (e.g., `dotselaw.com`)
3. Follow Vercel's instructions to configure your DNS settings

## Project Structure

```
dotselaw-website/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Sections Included

- **Hero Section** - Full service law firm introduction
- **About Us** - Firm overview and values
- **Practice Areas** - 9 specialized practice areas
- **Sectors** - 8 industry sectors served
- **Team** - 8 team members with contact information
- **Associations** - Professional memberships
- **Contact** - Office location and contact details

## Continuous Deployment

Once connected to Vercel:

1. **Push changes to GitHub:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. **Vercel automatically deploys** your changes
3. **Preview deployments** are created for pull requests
4. **Production deployment** happens on the main branch

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: { ... },  // Blue shades
  gold: { ... }      // Gold accents
}
```

### Content
Edit `app/page.tsx` to update:
- Practice areas
- Team members
- Contact information
- Any text content

### Styling
Modify Tailwind classes in components or add custom CSS in `app/globals.css`

## Performance

This website is optimized for:
- ⚡ Fast initial page load
- 🎯 SEO best practices
- 📱 Mobile-first responsive design
- ♿ Accessibility standards

## Support

For issues or questions:
- Email: info@dotselaw.com
- Create an issue in the GitHub repository

## License

© 2023 Dotse@Law. All rights reserved.
