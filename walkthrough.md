# Walkthrough of Changes

This document outlines the modifications made to resolve the user request for the SDETM 2026 conference platform. All changes have been built and verified successfully.

## 1. SEO & Geo-Location Improvements

- **Local SEO & Geo tags**: Added geo coordinates (`latitude: 18.6656`, `longitude: 73.6669`) using Schema.org `GeoCoordinates` format in JSON-LD within [index.html](file:///d:/my_%20Projects/SDETM_ICEM/index.html) and [SEO.tsx](file:///d:/my_%20Projects/SDETM_ICEM/src/components/SEO.tsx).
- **Precise Location Address**: Updated the `streetAddress` metadata to `Gat No. 276, Parandwadi, Tal. Maval, Pune` for consistency with official institute documents.
- **Sitemap Modification Dates**: Updated all modified pages in [sitemap.xml](file:///d:/my_%20Projects/SDETM_ICEM/public/sitemap.xml) to `2026-06-25` to prompt crawler indexing.
- **Keyword List**: Added "Prof. Vishal Abhiman Meshram" to keyword meta tags in `index.html` and the dynamic `SEO.tsx` hook.
- **Structured Data (JSON-LD)**: Added Prof. Vishal Abhiman Meshram as a contributor in the main schema graph in `index.html`.

## 2. Committee Updates

- **New Committee Member**: Added **Prof. Vishal Abhiman Meshram** (Assistant Professor, Mechanical Department) to the College Organizing Committee in [Committee.tsx](file:///d:/my_%20Projects/SDETM_ICEM/src/pages/Committee.tsx).
- **LinkedIn Integration**: Added Vishal sir's LinkedIn profile url (`https://www.linkedin.com/in/vishal-a-meshram-ba17b618/`) to both the profile card and JSON-LD schema.
- **Image Asset**: Copied the uploaded photo to [17_prof_vishal_abhiman_meshram.jpg](file:///d:/my_%20Projects/SDETM_ICEM/public/Organizing%20Committee/17_prof_vishal_abhiman_meshram.jpg).
- **Technical Secretary Details**: Updated the details for **Gaurav Raju Nawale** (Technical Secretary) in [Committee.tsx](file:///d:/my_%20Projects/SDETM_ICEM/src/pages/Committee.tsx) to read:
  `Student at ICEM, Pune`
  `Founder of CertiOwn; www.gauravnawale.in`

## 3. Submission Portal Links

- **Microsoft CMT Submission Button**: Replaced the placeholder `CMT Link — Coming Soon` text with a button styled `Submit Paper via Microsoft CMT`.
- **Target URL**: Configured the button's href to point to the live CMT link: `https://cmt3.research.microsoft.com/SDETM2026`.
- **Redirection in Guidelines**: Updated the submission portal target URL in [SubmissionGuidelines.tsx](file:///d:/my_%20Projects/SDETM_ICEM/src/pages/SubmissionGuidelines.tsx) to point directly to the SDETM 2026 portal.
- **Styling**: Added custom css for `.sub-cmt-btn` in [PaperSubmission.css](file:///d:/my_%20Projects/SDETM_ICEM/src/pages/PaperSubmission.css) to support interactive hover transitions and shadows matching the site's dark design system.

## 4. Footer Redirection

- **Footer Credits**: Updated the credit section in [Footer.tsx](file:///d:/my_%20Projects/SDETM_ICEM/src/components/Footer.tsx) to read `Designed & Developed by CertiOwn ( Gaurav Nawale)` and updated the redirection link to `http://www.gauravnawale.in`.

## 5. Header Menu Cleanups

- **Dropdown Removal**: Removed the `MORE` menu dropdown containing placeholder links (Technical Partners, Policies, Downloads, FAQs, Program) from [Header.tsx](file:///d:/my_%20Projects/SDETM_ICEM/src/components/Header.tsx).
- **Route Removal**: Cleaned up the unused routes in [App.tsx](file:///d:/my_%20Projects/SDETM_ICEM/src/App.tsx) and removed the unused `ComingSoon` page component import.
