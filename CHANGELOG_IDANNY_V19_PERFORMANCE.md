# iDanny v19 — Performance / Core Web Vitals

Implemented:
- Added next/image optimization helper.
- Product cards use optimized images.
- Product page main image uses optimized image with priority.
- Added AVIF/WebP image formats in Next config.
- Added long-term cache headers for static assets.
- Enabled compression and disabled poweredByHeader.
- Added preconnect/dns-prefetch for remote images.
- Added CLS guard styles for image containers.
- Added content-visibility for below-fold grids/sections.
- Preserved dark premium UI and blue-violet CTA rules.

Notes:
- This is a practical performance MVP pass.
- Full production audit should be done after deploy with PageSpeed Insights / Lighthouse.
