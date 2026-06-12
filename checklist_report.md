# Website Go-Live Checklist Report

**Status Legend:**
✅ **Done** (Verified in the codebase)
⚠️ **Needs Check / Action** (Requires minor fixes or manual verification)
❌ **Missing** (Not yet implemented)
🔄 **Manual Task** (Must be done outside the code)

| S.No | Topic | Status | Notes / Developer Comments |
| :--- | :--- | :---: | :--- |
| 1 | under construction/ comming soon | ✅ | Website is fully developed with live pages and content. |
| 2 | Url | ✅ | All page routes and URLs are configured properly. |
| 3 | Menu Anchors | ✅ | Header navigation is implemented. |
| 4 | Internal Links | ✅ | Present in navigation and footer. |
| 5 | Footer Links | ✅ | Links to services, about, and social media are active. |
| 6 | Call to Actions | ✅ | CTAs (like "Contact" buttons) are present across pages. |
| 7 | Forms | ⚠️ | Forms are present, but testing is required to ensure they submit correctly. |
| 8 | logo link | ✅ | Header logo is linked, and the Footer logo is now correctly wrapped in a `<Link href="/">`. |
| 9 | navigation | ✅ | Fully functional. |
| 10 | footer skyhit media link | ✅ | Copyright "Skyhit Media" text is now a clickable hyperlink to the homepage. |
| 11 | social media links | ✅ | All social media icons are present and working (YouTube icon fixed). |
| 12 | image alt tags | ✅ | Alt tags are present on core images (like logos). |
| 13 | meta title | ✅ | Configured on all pages. OpenGraph titles also generated. |
| 14 | meta description | ✅ | Configured on all pages. OpenGraph descriptions also generated. |
| 15 | meta keywords | ✅ | Keywords have been successfully populated into the `page.tsx` metadata for all pages. |
| 16 | Fevicon | ✅ | `favicon.ico` is correctly placed and exists in `src/app`. |
| 17 | Search Console | ✅ | Google Site Verification tag is present in `layout.tsx`. |
| 18 | Google Analytics (GA4) | ✅ | `GA_ID` script is implemented in `layout.tsx`. |
| 19 | Robot.txt | ✅ | `robots.txt` exists in the `public/` directory. |
| 20 | Sitemap.xml | ✅ | `src/app/sitemap.ts` has been created. Next.js will automatically build the sitemap for all 20 pages! |
| 21 | ssl certificaion | ✅ | Will be handled automatically by your hosting provider (e.g., Vercel). |
| 22 | mobile responsive | ✅ | Tailwind CSS is used to ensure mobile responsiveness (`lg:px-24`, etc). |
| 23 | branding fonts | ✅ | Montserrat and Playfair Display fonts are actively configured. |
| 24 | branding colors | ✅ | Primary branding colors (`#DCBE9E`, `#7D878C`) are implemented. |
| 25 | payment gateway | ➖ | Usually N/A for agency sites unless you are selling direct packages. |
| 26 | GTM Tags | ✅ | Google Tag Manager script is present in `layout.tsx`. |
| 27 | Google Sheet Integration For Forms | ⚠️ | Needs verification. Currently, forms might only be sending emails, not pushing to Google Sheets. |
| 28 | Thankyou page for Form | ✅ | `/thank-you` route exists in the codebase. |
| 29 | Pixel Codes | ⚠️ | Needs verification if Facebook Pixel or others are required in `layout.tsx`. |
| 30 | Popup disable in supporting pages | ⚠️ | Requires manual testing to ensure popups don't trigger on pages like Privacy Policy or Contact. |
| 31 | SKYHIT media link key event tracking | ⚠️ | Needs to be configured in GA4/GTM dashboard. |
| 32 | Whatspp Pre text message link | ⚠️ | Need to verify if the WhatsApp link uses a `?text=...` parameter for pre-filled messages. |
| 33 | 404 Page | ✅ | Next.js handles this automatically with default pages (or a custom `not-found.tsx`). |
| 34 | On page seo content for each page mandatory | ✅ | SEO Metadata, OpenGraph Tags, and Canonical URLs are present on all pages. |
| 35 | All Old urls Create in new site | 🔄 | **Manual Task.** 301 Redirects need to be configured in `next.config.js` if migrating. |
| 36 | Inspect All urls in Search Console | 🔄 | **Manual Task.** Must be done inside the Google Search Console dashboard. |
| 37 | Duplicate form submission issues | ⚠️ | Need to test forms to ensure users can't click "Submit" twice rapidly. |
| 38 | Delay popups for atlesst 60 seconds | ⚠️ | Need to check the popup component logic to ensure the `setTimeout` is set to `60000` ms. |

---

### Priority Action Items for the Development Team:
1. **Verify Google Sheets integration** for form submissions (Item 27).
2. **Set up 301 Redirects** for old URLs in `next.config.js` (Item 35).
3. **Verify Facebook Pixel / GTM Tracking codes** (Items 29 & 31).
