# 📸 Team Images Guide

## Overview

The website now supports team member profile images! Images are stored in the `public/team/` folder and will automatically display on the website.

## 🎯 Quick Steps

1. **Prepare your images** (professional headshots)
2. **Name them correctly** (see naming guide below)
3. **Place in folder**: `public/team/`
4. **Refresh website** - images appear automatically!

---

## 📁 Folder Location

```
dotselaw-website/
└── public/
    └── team/          ← Put your images here!
        ├── divine-dotse-tettey.jpg
        ├── patricia-mensah.jpg
        ├── nicholas-normeshie.jpg
        └── ... (other team photos)
```

---

## 📝 Image Naming Convention

**IMPORTANT:** Image filenames must match exactly (lowercase, with hyphens):

| Team Member | Required Filename |
|------------|-------------------|
| Divine Dotse Tettey | `divine-dotse-tettey.jpg` |
| Patricia Mensah | `patricia-mensah.jpg` |
| Nicholas Normeshie | `nicholas-normeshie.jpg` |
| Portia Bosompem | `portia-bosompem.jpg` |
| Martin Kpebu | `martin-kpebu.jpg` |
| Governor Ahene-Amanquanor | `governor-ahene-amanquanor.jpg` |
| Kodjo Baidoo | `kodjo-baidoo.jpg` |
| Michael Balimukuubo | `michael-balimukuubo.jpg` |

**Naming Rules:**
- ✅ All lowercase letters
- ✅ Use hyphens (-) instead of spaces
- ✅ Use `.jpg`, `.png`, or `.webp` extension
- ❌ No capital letters
- ❌ No spaces or underscores

---

## 🖼️ Image Specifications

### Recommended Settings
- **Format:** JPG (best for photos)
- **Dimensions:** 800x800px or larger
- **Aspect Ratio:** Square (1:1) or Portrait (3:4)
- **File Size:** 200-500KB (optimized)
- **Background:** Professional/plain (office/solid color)

### Minimum Requirements
- **Dimensions:** 400x400px minimum
- **File Size:** Under 2MB
- **Quality:** Clear, professional headshot

### Supported Formats
- ✅ `.jpg` or `.jpeg` (recommended)
- ✅ `.png` (if transparency needed)
- ✅ `.webp` (modern, smaller files)

---

## 🎨 Image Quality Tips

### Professional Look
1. **Professional headshot** style
2. **Good lighting** - natural or studio
3. **Sharp focus** - clear facial features
4. **Appropriate attire** - business professional
5. **Neutral expression** - friendly and approachable
6. **Eye contact** - looking at camera

### Technical Quality
1. **High resolution** - minimum 400x400px
2. **Proper exposure** - not too dark or bright
3. **No blur** - sharp and clear
4. **Minimal noise** - clean image quality
5. **Color accuracy** - natural skin tones

### Composition
1. **Centered framing** - face in center
2. **Head and shoulders** - standard headshot crop
3. **Plain background** - avoid distractions
4. **Proper headroom** - space above head
5. **Eye level** - camera at eye height

---

## 🚀 How to Add Images

### Method 1: Direct Copy (Easiest)

1. **Rename your photos** to match the required filenames
2. **Copy files** into `public/team/` folder
3. **Done!** Images will show automatically

### Method 2: Using VS Code

1. Open `dotselaw-website` in VS Code
2. Navigate to `public/team/` in sidebar
3. Drag and drop images into the folder
4. Rename if necessary to match required names
5. Save and refresh browser

### Method 3: Command Line

```bash
# Navigate to team folder
cd public/team/

# Copy your image (macOS/Linux)
cp ~/Desktop/photo.jpg divine-dotse-tettey.jpg

# Copy your image (Windows)
copy C:\Users\You\Desktop\photo.jpg divine-dotse-tettey.jpg
```

---

## 🔍 Testing Your Images

### Local Testing

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Open browser:** http://localhost:3000

3. **Navigate to** "Meet Our Team" section

4. **Check images:**
   - ✅ Images load correctly
   - ✅ Good quality and clarity
   - ✅ Proper cropping/framing

### What You Should See

- **With image:** Professional photo displayed in card
- **Without image:** Blue gradient with user icon (fallback)

---

## 🔧 Troubleshooting

### Image Not Showing?

**Check Filename:**
```bash
# View files in team folder
ls public/team/

# Make sure filename matches exactly
# ❌ Divine-Dotse-Tettey.jpg (wrong - has capitals)
# ❌ divine_dotse_tettey.jpg (wrong - has underscores)
# ✅ divine-dotse-tettey.jpg (correct!)
```

**Common Issues:**

| Problem | Solution |
|---------|----------|
| Image not appearing | Check filename matches exactly (lowercase, hyphens) |
| Filename has spaces | Rename using hyphens: `divine-dotse-tettey.jpg` |
| Wrong file extension | Use `.jpg`, `.png`, or `.webp` |
| File too large | Compress image to under 500KB |
| Image distorted | Use square/portrait aspect ratio |
| Slow loading | Optimize image file size |

### Quality Issues?

**Image looks blurry:**
- Use higher resolution (800x800px minimum)
- Don't upscale small images
- Export at high quality settings

**Colors look off:**
- Check original image color profile
- Use sRGB color space
- Adjust brightness/contrast

**File size too large:**
- Compress using online tools
- Reduce dimensions if very large
- Use JPG instead of PNG for photos

---

## 🛠️ Image Optimization Tools

### Free Online Tools
- **TinyPNG** - https://tinypng.com (best compression)
- **Squoosh** - https://squoosh.app (Google's tool)
- **Compress JPEG** - https://compressjpeg.com
- **iLoveIMG** - https://www.iloveimg.com/resize-image

### Desktop Software
- **GIMP** (Free) - Full image editor
- **Paint.NET** (Windows, Free)
- **Preview** (Mac) - Built-in tools
- **Photoshop** (Paid) - Professional editing

### Optimization Steps

1. **Crop/Resize:**
   - Crop to head and shoulders
   - Resize to 800x800px

2. **Adjust Quality:**
   - Export at 80-85% quality
   - Use progressive JPEG

3. **Compress:**
   - Use TinyPNG or similar
   - Aim for 200-500KB file size

4. **Convert Format:**
   - Convert PNG to JPG if no transparency
   - Consider WebP for smallest files

---

## 📤 Adding New Team Members

To add a new team member in the future:

### 1. Update the Code

Edit `app/page.tsx` and add to the `team` array:

```typescript
{
  name: 'New Team Member',
  role: 'Position Title',
  phone: '+233 XXX XXX XXX',
  email: 'email@dotselaw.com',
  image: '/team/new-team-member.jpg'  // Add this line
}
```

### 2. Add the Image

Create image file: `public/team/new-team-member.jpg`

### 3. Test

Run `npm run dev` and check the team section.

---

## ✅ Best Practices Checklist

Before uploading images:

- [ ] Professional headshot quality
- [ ] Consistent style across all photos
- [ ] Square or portrait aspect ratio
- [ ] Minimum 400x400px size
- [ ] File size under 500KB
- [ ] Correct filename (lowercase, hyphens)
- [ ] JPG or PNG format
- [ ] Plain/professional background
- [ ] Good lighting and focus
- [ ] Tested locally before deployment

---

## 🌐 After Adding Images

### Local Development
Images display immediately after adding to folder (may need to refresh browser)

### Production (After Deploying)
1. Add images to `public/team/` folder
2. Commit changes: `git add public/team/`
3. Push to GitHub: `git push`
4. Vercel auto-deploys with new images
5. Check live site in 1-2 minutes

---

## 💡 Pro Tips

1. **Consistency:** Use same photographer/style for all team photos
2. **Lighting:** Natural light or professional studio lighting
3. **Background:** Keep backgrounds consistent (same color/style)
4. **Compression:** Always compress before uploading
5. **Backup:** Keep original high-res versions separate
6. **Updates:** Update photos every 2-3 years to keep current
7. **Privacy:** Get consent before publishing team photos
8. **Accessibility:** Images have proper alt text (automatically handled)

---

## 📞 Need Help?

If you encounter issues:

1. Check the `public/team/README.md` file
2. Verify filename matches required format exactly
3. Ensure file is in correct folder
4. Test locally before deploying
5. Check browser console for errors

---

**Remember:** If an image is missing or fails to load, the website will automatically show a professional placeholder icon. Your site will still look great either way!
