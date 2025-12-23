# Hero Background Image

This folder contains the background image for the hero section on the homepage.

## Required File

Place your hero background image in this folder with the following filename:

**background.jpg** - Main hero background image

## Image Specifications

### Recommended Format
- **File Format:** JPG (recommended for photos)
- **Alternative:** PNG, WebP
- **Dimensions:** 1920px × 1080px minimum (Full HD)
- **Aspect Ratio:** 16:9 or wider
- **File Size:** 200KB - 500KB (optimized)
- **Orientation:** Landscape (horizontal)

### Quality Guidelines
- High resolution (at least 1920px wide)
- Professional quality photograph
- Good lighting and composition
- Relevant to legal services (office, law books, scales of justice, etc.)
- Not too busy - text overlay needs to be readable

## Display Behavior

- **Full width** background image
- **Dark overlay** (gradient from left to right) for text readability
- **Responsive** - adjusts to all screen sizes
- **Optimized** - Next.js automatically optimizes the image
- **Priority loading** - Loads first for better performance

## Design Considerations

### What Works Well
- Professional office settings
- Legal imagery (law books, scales, gavels)
- Modern, clean architectural shots
- Subtle, professional backgrounds
- Images with space on the left for text overlay

### Avoid
- Overly busy or distracting images
- Too dark images (overlay adds more darkness)
- Images with important content on the left (text will cover it)
- Low resolution or pixelated images
- Unprofessional or casual photographs

## Image Suggestions

Good subject matter for hero background:
- Modern law office interior
- Law library with books
- Professional meeting room
- Scales of justice
- Legal documents (blurred/artistic)
- Modern architectural building
- Professional cityscape
- Abstract professional imagery

## How to Add/Replace

1. **Prepare your image:**
   - Resize to at least 1920×1080px
   - Optimize file size (use TinyJPG or similar)
   - Save as `background.jpg`

2. **Add to folder:**
   - Place in `public/hero/` folder
   - Filename must be exactly: `background.jpg`

3. **Test:**
   - Refresh your website
   - Check text readability
   - View on different screen sizes

## Text Overlay Area

The hero section displays text on the **LEFT side** of the image:
- Heading: "FULL SERVICE LAW FIRM"
- Subheading: Services description
- Call-to-action buttons

**Important:** Make sure the left 50% of your image works well with white text overlay.

## Image Optimization

Before uploading, optimize your image:

**Online Tools:**
- TinyJPG - https://tinyjpg.com
- Squoosh - https://squoosh.app
- Optimizilla - https://imagecompressor.com

**Tips:**
- Start with high quality original
- Resize to 1920px wide
- Compress to reduce file size
- Aim for 200-500KB final size
- Use JPG format (85-90% quality)

## Troubleshooting

### Image Not Showing?
1. Check filename is exactly `background.jpg` (lowercase)
2. Verify file is in `public/hero/` folder
3. Check file format (JPG, PNG, or WebP only)
4. Clear browser cache and refresh

### Text Hard to Read?
1. Use darker or less busy image
2. Image with more empty space on left
3. Try image with solid/plain areas
4. The gradient overlay should help, but start with a good base image

### Image Looks Distorted?
1. Use landscape orientation (horizontal)
2. Minimum 1920px wide recommended
3. Maintain 16:9 aspect ratio or wider
4. Don't use portrait (vertical) images

### Image Loads Slowly?
1. Compress the image file
2. Reduce dimensions if very large (max 2560px wide)
3. Use JPG format instead of PNG
4. Target 200-500KB file size

## Alternative Images

You can also use these alternative filenames:
- `background.jpg` (default, recommended)
- `background.png` (if transparency needed)
- `background.webp` (modern format, smaller size)

The code will automatically load `background.jpg` by default.

## File Structure

```
public/
└── hero/
    ├── README.md (this file)
    └── background.jpg (your hero image)
```

## Examples of Good Hero Images

Search stock photo sites for:
- "professional law office"
- "modern legal office interior"
- "law library books"
- "scales of justice modern"
- "corporate office meeting room"
- "professional business background"

## Free Stock Photo Resources

- Unsplash - https://unsplash.com
- Pexels - https://pexels.com
- Pixabay - https://pixabay.com

Search terms: "law office", "legal", "justice", "professional office", "modern workspace"

---

**Note:** The dark gradient overlay ensures text is always readable regardless of the image you choose.
