# Performance verification

Latest: [28 September 2026 — courses/mobile/desktop and home](2026-09-28.md).

## 12 September 2026

Measured with Lighthouse 13.4.1 against the local **production build**, served by Vite preview at http://127.0.0.1:4173. Mobile uses default simulated throttling; desktop uses `--preset=desktop`. Audits run sequentially. The user's 25?30 development-server score is not directly comparable to these production measurements.

| Audit | Performance | LCP | TBT | CLS | Accessibility | Best practices | SEO |
|---|---:|---:|---:|---:|---:|---:|---:|
| [before-home-mobile](before-home-mobile.json) | 82 | 3.65s | 263ms | 0.0000 | 91 | 96 | 83 |
| [verified-home-mobile](verified-home-mobile.json) | 94 | 2.68s | 158ms | 0.0000 | 91 | 96 | 92 |
| [verified-home-desktop](verified-home-desktop.json) | 100 | 0.61s | 28ms | 0.0023 | 91 | 96 | 92 |
| [before-career-mobile](before-career-mobile.json) | 93 | 2.76s | 128ms | 0.0000 | 96 | 100 | 83 |
| [verified-career-mobile](verified-career-mobile.json) | 97 | 2.43s | 14ms | 0.0000 | 96 | 100 | 92 |
| [verified-career-desktop](verified-career-desktop.json) | 100 | 0.55s | 0ms | 0.0023 | 96 | 100 | 92 |

## Acceptance

- Performance >=80: passed on both pages, mobile and desktop.
- Total blocking time <200ms: passed on both pages, mobile and desktop.
- LCP <2.5s: passed for career and both desktop audits; **home mobile remains 2.68s**, so this criterion is not fully met.
- Accessibility and best-practice scores did not regress against the production baseline. Existing home best-practice score is 96.
- Scores vary with machine load, network, browser version, and deployed hosting. These are recorded local lab results, not guarantees of field Core Web Vitals.

## Changes

- Split home, course, information and dashboard pages into React lazy routes, with a Suspense loading boundary. Main JavaScript decreased from 847.51KB (218.12KB gzip) to 264.05KB (82.04KB gzip); page dependencies download separately.
- Converted the existing 483x517 hero artwork from 334,747-byte PNG to 44,168-byte WebP, retaining dimensions and transparency. Added intrinsic dimensions, high fetch priority and an image preload. The small hero preload is shared by all routes because this SPA serves one HTML document.
- Lazy-loaded gallery and testimonial images. Added avatar dimensions and asynchronous decoding.
- Enabled browser offscreen rendering containment for gallery/testimonial sections, retaining their content and styles; the browser uses estimated offscreen section heights until layout occurs.
- Replaced StatsBar scroll-time geometry reads with an IntersectionObserver. Removed duplicate initial placement measurement; ResizeObserver supplies the initial measurement.
- Removed redundant hero state resets and cleaned up its delayed timer while preserving the text/counter animations.
- Corrected the favicon path/type and added a factual meta description.

## Validation and limits

Production build and ESLint for every changed JSX file pass. Lighthouse screenshots were inspected for the initial home/career layouts. Interactive browser control was unavailable, so no automated click-through or full-page visual regression check is claimed. Existing phone-number and career-button fixes remain in source.

Some Windows Lighthouse invocations returned a temporary Chrome-profile cleanup EPERM after writing their reports. The linked reports contain completed category scores and no Lighthouse runtimeError. Intermediate experiment reports are retained separately; use `verified-*` for the selected final build.

## Reproduce

From `Frontend`, run `npm run build` then `npm run preview -- --host 127.0.0.1`. Audit the preview URL, rather than the development server on port 5173:

```powershell
npx --yes lighthouse http://127.0.0.1:4173/ --chrome-flags="--headless --no-sandbox" --output=html --output-path=home-mobile.html
npx --yes lighthouse http://127.0.0.1:4173/career-assistance --preset=desktop --chrome-flags="--headless --no-sandbox" --output=html --output-path=career-desktop.html
```

Omit `--preset=desktop` for mobile. Test the deployed site separately after deployment.
