# Norvexa Technologies: corporate website

A multi-page, SEO-first website built with **Next.js 15 (App Router) + TypeScript**. Every page is prerendered to static HTML, so all content is crawlable without JavaScript.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in /out
```

## Pages (45 URLs)

| Section | URLs |
|---|---|
| Home | `/` |
| AI solutions (lead offering) | `/ai-solutions/`, `/ai-solutions/ai-agents/`, `/company-assistant/`, `/ai-apps/`, `/ai-audit/` |
| Services | `/services/` + 9 service pages (AI & ML, Web, Mobile, Custom Software, SaaS, E-commerce, UI/UX, Cloud & DevOps, Digital Transformation) |
| AI use cases | `/ai-use-cases/` (9 departments, 54 use cases, anchor links per department) |
| Industries | `/industries/` + 8 industry pages |
| Country pages | `/locations/`, `/us/`, `/uk/`, `/ae/`, `/ca/`, `/au/`, `/de/` (hreflang cluster + x-default) |
| Insights | `/insights/` + 4 articles |
| Company | `/about/` (key people), `/technologies/`, `/careers/`, `/contact/` |
| Legal | `/privacy-policy/`, `/terms/`, 404 |
| SEO files | `/sitemap.xml`, `/robots.txt` |

## SEO built in

- Unique `<title>`, meta description, canonical URL, Open Graph and X/Twitter cards on every page (`lib/seo.ts`)
- JSON-LD: Organization, WebSite, Service, BreadcrumbList, Article, FAQPage, Person (when real people are added)
- hreflang + x-default across the country pages
- Exactly one `<h1>` per page, semantic HTML, visible breadcrumbs
- Auto-generated `sitemap.xml` and `robots.txt`
- Internal linking: related services, industries → services, articles → services, country → services
- Content renders fully without JavaScript; animations are progressive enhancements and respect `prefers-reduced-motion`

## Before launch: fill these in

1. **`lib/site.ts`**: production domain, email, phone, address, WhatsApp number, social links, GA4 ID, Search Console token.
2. **`lib/content.ts` → `PEOPLE`**: real leadership names, roles, bios, photos (`/public/team/...`) and LinkedIn URLs.
3. **Contact form**: set `NEXT_PUBLIC_FORM_ENDPOINT` (see `.env.example`) to a form or CRM endpoint. Until set, the form shows your email instead of pretending to send.
4. **Legal pages**: have the privacy policy and terms reviewed by your legal adviser.
5. **Careers**: replace the sample roles in `app/careers/page.tsx`.
6. Add a cookie-consent banner before enabling GA4, Meta Pixel or the LinkedIn Insight Tag (GA4 loads with consent defaulted to *denied*).

## Editing content

All copy lives in `lib/content.ts` (services, AI solutions, industries, country pages, use cases, technologies, people, FAQs) and `lib/insights.ts` (articles). Add an entry and the page, navigation, footer, sitemap and structured data update automatically.

### Moving to Sanity CMS

`sanity/schemas/index.ts` contains matching Sanity schemas (services, AI solutions, industries, country pages, posts, authors, people, case studies, testimonials, redirects and an SEO object). To switch:

1. `npm create sanity@latest` inside `/sanity` and register `schemaTypes`.
2. Import the current content into Sanity.
3. Replace the arrays in `lib/content.ts` with GROQ queries via `next-sanity`. Page components do not need to change.
4. For instant publishing, remove `output: 'export'` and deploy to Vercel with ISR, or trigger a rebuild webhook on publish.

## Deploy

- **Netlify**: `netlify.toml` included (build `npm run build`, publish `out`, security headers).
- **Vercel**: import the repo; zero config.
- **Any static host / S3 + Cloudflare**: upload `/out`.

After launch: submit `https://<domain>/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## Structure

```
app/                 routes (App Router)
components/          Header, Footer, Effects (cursor/reveal/parallax), HeroNetwork, OfferingPage template, forms
lib/content.ts       site content
lib/insights.ts      articles
lib/seo.ts           metadata + JSON-LD helpers
lib/site.ts          global settings
public/              logos, favicon, OG image
sanity/schemas/      CMS schemas
```
