# Image Replacement Guide for Flash Logix

## Critical Images to Replace

### 1. Logo (HIGHEST PRIORITY)
**File**: `/public/logo.png`
**Current**: ULTRALARGE LTD logo
**Needed**: Flash Logix logo
**Specifications**:
- Dimensions: 200x75px (or similar aspect ratio)
- Format: PNG with transparent background
- Should include company name "Flash Logix"
- Colors: Professional blue/corporate colors

### 2. Hero Section Images
**Location**: Referenced in `components/hero-section.tsx`
**Current Images**:
- `/heroimage2.png`
- `/heroimage3.png`
- `/heroimage4.png`
- `/Express.png`
- `/workpermit2.jpg`

**Needed**: Replace with logistics-themed images:
1. **Cargo plane loading** - Air freight operations
2. **Shipping containers at port** - Sea freight
3. **Delivery trucks** - Road transport
4. **Modern warehouse interior** - Warehousing services
5. **Customs clearance/documentation** - Customs services

**Specifications**:
- Dimensions: 1200x800px minimum
- Format: JPG or PNG
- High quality, professional photography
- Show Flash Logix branding if possible

### 3. About Page Images
**Location**: Referenced in `app/about/page.tsx`
**Current Images**:
- `/New folder/visaimage.jpg`
- `/New folder/canadavisa2.jpg`

**Needed**: Replace with:
1. **Flash Logix team/office** - Professional team photo or modern office
2. **Logistics operations** - Warehouse, trucks, or cargo handling

**Specifications**:
- Dimensions: 600x400px minimum
- Format: JPG
- Professional quality

### 4. Public Folder Images to Review
**Location**: `/public/`

**Current Files** (check and replace if visa-related):
- `aa.jpg`
- `bbb.jpg`
- `cbm.jpg`
- `cvx.jpg`
- `ewrw.jpg`
- `family.jpg` ← Likely visa-related, replace
- `rr.jpg`
- `sss.jpg`
- `vd.jpg`
- `vzvzvv.jpg`
- `were.jpg`
- `werw.jpg`
- `workpermit2.jpg` ← Definitely visa-related, replace
- `xxx.jpg`

**New Folder** (`/public/New folder/`):
Review all images in this folder and replace visa/immigration images with logistics images.

### 5. Suggested New Images to Add

#### Logistics Services
1. **air-freight.jpg** - Cargo plane or air cargo operations
2. **sea-freight.jpg** - Container ship or port operations
3. **road-transport.jpg** - Fleet of delivery trucks
4. **warehouse.jpg** - Modern warehouse facility
5. **customs-clearance.jpg** - Documentation/customs office
6. **tracking.jpg** - GPS tracking or control center
7. **delivery.jpg** - Last-mile delivery
8. **team.jpg** - Flash Logix team photo

#### Icons/Graphics
1. **flash-logix-icon.png** - Simplified icon version of logo
2. **flash-logix-favicon.ico** - Browser favicon (16x16, 32x32)

## Image Sources

### Free Stock Photo Sites (Logistics)
1. **Unsplash** (unsplash.com)
   - Search: "cargo", "warehouse", "logistics", "shipping container", "freight"
   
2. **Pexels** (pexels.com)
   - Search: "delivery truck", "cargo plane", "warehouse", "shipping"
   
3. **Pixabay** (pixabay.com)
   - Search: "logistics", "freight", "cargo", "warehouse"

### Recommended Search Terms
- "cargo plane loading"
- "shipping containers port"
- "warehouse interior"
- "delivery trucks fleet"
- "customs clearance"
- "freight forwarding"
- "logistics operations"
- "supply chain"
- "cargo handling"
- "Rwanda logistics" (if available)

## Logo Creation Options

### Option 1: Professional Designer
- Hire a designer on Fiverr, Upwork, or 99designs
- Budget: $50-200
- Turnaround: 2-7 days

### Option 2: DIY Logo Makers
- **Canva** (canva.com) - Free/Pro
- **LogoMaker** (logomaker.com)
- **Looka** (looka.com)
- **Hatchful** by Shopify (free)

### Option 3: AI Logo Generators
- **Looka AI**
- **Brandmark**
- **Tailor Brands**

### Logo Design Tips for Flash Logix
- Include a lightning bolt or speed element (represents "Flash")
- Incorporate logistics symbols: truck, plane, or arrow
- Use professional blue color scheme
- Keep it simple and scalable
- Ensure it works in both color and monochrome

## Favicon Update
**File**: `/app/favicon.ico`
**Action**: Replace with Flash Logix favicon
**Tool**: Use favicon.io to convert logo to favicon

## Implementation Steps

1. **Immediate Priority**:
   - [ ] Create/obtain Flash Logix logo
   - [ ] Replace `/public/logo.png`
   - [ ] Update favicon.ico

2. **High Priority**:
   - [ ] Replace 5 hero section images
   - [ ] Replace about page images (2 images)
   - [ ] Remove visa-related images (family.jpg, workpermit2.jpg)

3. **Medium Priority**:
   - [ ] Review and replace all images in `/public/New folder/`
   - [ ] Add new logistics-specific images
   - [ ] Update any remaining visa-related images

4. **Testing**:
   - [ ] Verify all images load correctly
   - [ ] Check image quality on different screen sizes
   - [ ] Ensure alt text is updated for all images
   - [ ] Verify logo appears correctly in header and footer

## Image Optimization

Before uploading images:
1. **Compress images** using TinyPNG or ImageOptim
2. **Resize** to appropriate dimensions
3. **Convert** to WebP format for better performance (optional)
4. **Name files** descriptively (e.g., `flash-logix-warehouse.jpg`)

## Notes
- All images should reflect Flash Logix's professional brand
- Avoid generic stock photos when possible
- Consider using actual photos of Flash Logix operations if available
- Ensure all images are properly licensed for commercial use
- Update alt text in code when replacing images

---

**Status**: Waiting for logo and image assets
**Priority**: CRITICAL - Logo must be replaced before launch
**Estimated Time**: 2-4 hours for complete image replacement
