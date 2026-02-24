# HALOCORE Website - Agent Guide

## Project Overview

This is a static website for **HALOCORE**, a technology company offering autonomous AI agent services and mobile applications. The website serves as both a marketing site for AI services and a legal/policy hub for 43+ mobile applications published by the company.

### Key Facts
- **Type**: Static HTML website (no JavaScript frameworks)
- **Host**: Netlify
- **Primary Domain**: halocore.ai
- **Total Pages**: 174 HTML files
- **Apps Supported**: 43 mobile applications

## Technology Stack

| Component | Technology |
|-----------|------------|
| Markup | HTML5 |
| Styling | Tailwind CSS (via CDN) |
| Icons | Font Awesome 6.4.0 (via CDN) |
| Fonts | Google Fonts (Inter family) |
| Hosting | Netlify |
| Build | Static file copy (no compilation) |

### CDN Dependencies
```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Google Fonts -->
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

## Project Structure

```
halocore/
├── index.html                    # Main landing page (AI theme)
├── services.html                 # Services & pricing page
├── netlify.toml                  # Netlify configuration + redirects
├── apps/                         # Empty directory (reserved for future use)
│
├── {AppName}-privacy.html        # Privacy policy (43 apps)
├── {AppName}-terms.html          # Terms of service (43 apps)
├── {AppName}-delete-account.html # Account deletion guide (43 apps)
├── {AppName}-beta-signup.html    # Beta testing signup (43 apps)
│
└── AGENTS.md                     # This file
```

### Naming Conventions

**Main Pages:**
- `index.html` - Root landing page
- `services.html` - Service offerings

**App Pages (per app):**
- `{AppName}-privacy.html` - Privacy Policy
- `{AppName}-terms.html` - Terms of Service  
- `{AppName}-delete-account.html` - Delete Account Instructions
- `{AppName}-beta-signup.html` - Beta Testing Signup

**App Name Casing:**
- Most apps use **PascalCase**: `QRCodeSuite`, `SleepSoundsPro`, `AI_Suite_Production`
- One exception uses **lowercase**: `bond` (couples app)

**Supported Apps (43 total):**
```
AI_Suite_Production, BarcodeMaker, BLERadar, bond, BreakTimer, CallRecorder,
CalWidget, ColorPicker, CryptoIntel, DeviceInfo, FakeCall, FileConverter,
FocusList, GhostNet, HabitPunch, HaloCoreHub, HaloCoreToolkit, HashCheck,
HIITForge, InvoiceGenerator, KeyGen, LedgerLite, LocalAI, NetTools,
NotificationRules, PhotoResize, PixelPurge, PriceCompare, QRCodeSuite,
QuickNotes, RandomGen, ReceiptScanner, ResumeBuilder, SensorGraph,
SignalHunter, SimpleSteps, SleepSoundsPro, SplitBill, StreamViewer,
SubnetNinja, TimestampNotes, TinyFile, TipCalc
```

## Build Process

### Netlify Configuration (`netlify.toml`)

```toml
[build]
  command = "mkdir -p dist && cp *.html dist/"
  publish = "dist"
```

**Build Steps:**
1. Create `dist/` directory
2. Copy all `*.html` files to `dist/`
3. Deploy `dist/` folder to Netlify CDN

**No Build Tools Required:**
- No npm/yarn dependencies
- No bundlers (webpack, vite, etc.)
- No CSS preprocessors
- No JavaScript transpilation

### Redirect Rules

The `netlify.toml` contains 301 redirects for clean URLs:

```
/{appname}-privacy  → /{AppName}-privacy.html
/{appname}-terms    → /{AppName}-terms.html
/{appname}-delete   → /{AppName}-delete-account.html
/{appname}-beta     → /{AppName}-beta-signup.html
```

Example:
- `/bond-privacy` → `/bond-privacy.html`
- `/qrcodesuite-beta` → `/QRCodeSuite-beta-signup.html`

## Code Style Guidelines

### HTML Structure

**App Pages Template Pattern:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{AppName} | {PageType}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .gradient-text { /* app-specific gradient */ }
        .gradient-bg { /* app-specific gradient */ }
    </style>
</head>
<body class="bg-[#0a0a0f] text-gray-300 min-h-screen">
    <!-- Navigation -->
    <nav>...</nav>
    
    <!-- Main Content -->
    <div class="max-w-3xl mx-auto px-6 py-12">...</div>
    
    <!-- Footer -->
    <footer>...</footer>
</body>
</html>
```

### Design System

**Color Palettes by App Type:**

| App | Primary Color | Gradient |
|-----|--------------|----------|
| bond | Purple/Pink | `#9C27B0` → `#E91E63` |
| HALOCORE pages | Blue/Cyan | `#3b82f6` → `#06b6d4` |
| Most apps | Dark theme | `#0a0a0f` background |

**Common CSS Classes:**
```css
/* Background */
.bg-[#0a0a0f]        /* Dark app background */
.bg-[#020617]        /* HALOCORE landing page */
.bg-[#12121a]        /* Card backgrounds */

/* Typography */
.gradient-text       /* Gradient text effect */
.prose               /* Article content styling */

/* Components */
.glass-panel         /* Glass-morphism cards */
.gradient-border     /* Gradient borders */
```

### Navigation Pattern (App Pages)

```html
<nav class="w-full p-6 flex justify-between items-center border-b border-gray-800">
    <div class="flex items-center gap-3">
        <div class="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">{Initial}</span>
        </div>
        <span class="text-xl font-bold text-white">{AppName}</span>
    </div>
    <a href="/" class="text-sm text-gray-400 hover:text-white transition-colors">
        ← Back to Home
    </a>
</nav>
```

### Footer Pattern (App Pages)

```html
<footer class="border-t border-gray-800 py-8">
    <div class="max-w-3xl mx-auto px-6 text-center">
        <div class="flex justify-center gap-6 text-sm">
            <a href="{appname}-delete-account.html">Delete Account</a>
            <a href="{appname}-privacy.html">Privacy Policy</a>
            <a href="{appname}-terms.html">Terms of Service</a>
        </div>
        <p class="text-gray-600 text-sm mt-4">© 2026 {AppName}. All rights reserved.</p>
    </div>
</footer>
```

## Adding New App Pages

When adding a new app, create 4 HTML files following this naming:

```
{AppName}-privacy.html
{AppName}-terms.html
{AppName}-delete-account.html
{AppName}-beta-signup.html
```

**Required Steps:**
1. Copy an existing app's page as template
2. Update all `{AppName}` references
3. Choose a unique gradient color scheme
4. Add corresponding redirects to `netlify.toml`
5. Test all 4 URLs after deployment

**Redirect Template (add to netlify.toml):**
```toml
# {AppName} redirects
[[redirects]]
  from = "/{lowercase}-delete"
  to = "/{AppName}-delete-account.html"
  status = 301

[[redirects]]
  from = "/{lowercase}-privacy"
  to = "/{AppName}-privacy.html"
  status = 301

[[redirects]]
  from = "/{lowercase}-terms"
  to = "/{AppName}-terms.html"
  status = 301

[[redirects]]
  from = "/{lowercase}-beta"
  to = "/{AppName}-beta-signup.html"
  status = 301
```

## Testing

### Local Testing

Since this is static HTML, any local server works:

```bash
# Python 3
python -m http.server 8000

# Node.js (if npx available)
npx serve .

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000`

### What to Verify

1. **All pages load** without 404 errors
2. **Navigation links** work between app pages
3. **"Back to Home"** link returns to index.html
4. **Footer links** connect all 4 page types
5. **Redirects** (test on deployed site):
   ```
   curl -I https://halocore.ai/bond-privacy
   # Should return 301 to /bond-privacy.html
   ```

## Deployment

### Automatic Deployment

Netlify deploys automatically on git push to the default branch.

**Deploy Process:**
1. Git push triggers Netlify build
2. Build command copies HTML files to `dist/`
3. Netlify deploys `dist/` to CDN
4. Redirect rules applied from `netlify.toml`

### Manual Deploy (if needed)

```bash
# Using Netlify CLI (if installed)
netlify deploy --prod --dir=dist
```

## Security Considerations

1. **No Sensitive Data**: These are public legal/policy pages - no secrets in code
2. **HTTPS Only**: Netlify provides SSL certificates automatically
3. **Form Handling**: Contact forms are static (no backend) - use form services like Netlify Forms or Formspree if needed
4. **XSS Prevention**: All user-facing content is static HTML - no dynamic rendering

## Maintenance Notes

**Annual Updates Needed:**
- Copyright years (currently 2026)
- "Last Updated" dates on legal pages
- App version references in privacy policies

**Bulk Changes:**
When updating common elements across all app pages:
1. Use find/replace across files
2. Maintain consistent styling
3. Update footer navigation if adding new page types

## Contact & Support

- **Website**: https://halocore.ai
- **Main Email**: Refer to individual app pages for specific support emails
- **Pattern**: Most apps use `support@{appname}.app`
