// Sanity Studio schemas for Norvexa. Mirrors lib/content.ts and lib/insights.ts.
// Usage: `npm create sanity@latest` in /sanity, then import these into sanity.config.ts.
import { defineField, defineType } from 'sanity';

const seo = defineType({
  name: 'seo', title: 'SEO', type: 'object',
  fields: [
    defineField({ name: 'metaTitle', type: 'string', validation: (r) => r.max(60) }),
    defineField({ name: 'metaDescription', type: 'text', rows: 3, validation: (r) => r.max(160) }),
    defineField({ name: 'canonical', type: 'url' }),
    defineField({ name: 'noindex', type: 'boolean', initialValue: false }),
    defineField({ name: 'ogImage', type: 'image' }),
    defineField({ name: 'keywords', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'topicCluster', type: 'string' }),
  ],
});
const pair = (name: string, a = 'title', b = 'description') => defineField({ name, type: 'array', of: [{ type: 'object', fields: [{ name: a, type: 'string' }, { name: b, type: 'text', rows: 2 }] }] });
const faq = defineType({ name: 'faq', type: 'object', fields: [{ name: 'question', type: 'string' }, { name: 'answer', type: 'text' }] });

const offering = (name: string, title: string) => defineType({
  name, title, type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'short', type: 'text', rows: 2 }),
    defineField({ name: 'h1', type: 'string' }),
    defineField({ name: 'intro', type: 'array', of: [{ type: 'text' }] }),
    pair('includes'), pair('benefits'),
    defineField({ name: 'tech', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'faqs', type: 'array', of: [{ type: 'faq' }] }),
    defineField({ name: 'related', type: 'array', of: [{ type: 'reference', to: [{ type: 'service' }, { type: 'aiSolution' }] }] }),
    defineField({ name: 'cta', type: 'string', title: 'CTA label' }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
});

export const schemaTypes = [
  seo, faq,
  offering('aiSolution', 'AI solution'),
  offering('service', 'Service'),
  defineType({ name: 'industry', type: 'document', fields: [
    { name: 'title', type: 'string' }, { name: 'slug', type: 'slug', options: { source: 'title' } }, { name: 'emoji', type: 'string' },
    { name: 'short', type: 'text' }, { name: 'intro', type: 'text' }, { name: 'challenges', type: 'array', of: [{ type: 'string' }] },
    pair('solutions'), { name: 'services', type: 'array', of: [{ type: 'reference', to: [{ type: 'service' }, { type: 'aiSolution' }] }] }, { name: 'seo', type: 'seo' }] }),
  defineType({ name: 'region', title: 'Country page', type: 'document', fields: [
    { name: 'name', type: 'string' }, { name: 'slug', type: 'slug' }, { name: 'hreflang', type: 'string', description: 'e.g. en-GB' },
    { name: 'currency', type: 'string' }, { name: 'timezone', type: 'string' }, { name: 'h1', type: 'string' },
    { name: 'intro', type: 'array', of: [{ type: 'text' }] }, pair('why'), { name: 'compliance', type: 'text' },
    { name: 'localContact', type: 'string' }, { name: 'focus', type: 'array', of: [{ type: 'reference', to: [{ type: 'service' }, { type: 'aiSolution' }] }] },
    { name: 'faqs', type: 'array', of: [{ type: 'faq' }] }, { name: 'seo', type: 'seo' }] }),
  defineType({ name: 'author', type: 'document', fields: [{ name: 'name', type: 'string' }, { name: 'role', type: 'string' }, { name: 'bio', type: 'text' }, { name: 'photo', type: 'image' }, { name: 'linkedin', type: 'url' }] }),
  defineType({ name: 'category', type: 'document', fields: [{ name: 'title', type: 'string' }, { name: 'slug', type: 'slug' }] }),
  defineType({ name: 'post', title: 'Insight article', type: 'document', fields: [
    { name: 'title', type: 'string' }, { name: 'slug', type: 'slug', options: { source: 'title' } }, { name: 'excerpt', type: 'text' },
    { name: 'category', type: 'reference', to: [{ type: 'category' }] }, { name: 'author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'publishedAt', type: 'datetime' }, { name: 'featured', type: 'boolean' }, { name: 'featuredImage', type: 'image', fields: [{ name: 'alt', type: 'string' }] },
    { name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image', fields: [{ name: 'alt', type: 'string' }] }] },
    { name: 'relatedServices', type: 'array', of: [{ type: 'reference', to: [{ type: 'service' }, { type: 'aiSolution' }] }] },
    { name: 'status', type: 'string', options: { list: ['idea', 'draft', 'review', 'scheduled', 'published'] } },
    { name: 'targetKeyword', type: 'string' }, { name: 'seo', type: 'seo' }] }),
  defineType({ name: 'person', title: 'Key person', type: 'document', fields: [{ name: 'name', type: 'string' }, { name: 'role', type: 'string' }, { name: 'bio', type: 'text' }, { name: 'photo', type: 'image' }, { name: 'linkedin', type: 'url' }, { name: 'order', type: 'number' }] }),
  defineType({ name: 'testimonial', type: 'document', fields: [{ name: 'quote', type: 'text' }, { name: 'name', type: 'string' }, { name: 'company', type: 'string' }, { name: 'approvedForPublication', type: 'boolean' }] }),
  defineType({ name: 'caseStudy', type: 'document', fields: [{ name: 'title', type: 'string' }, { name: 'slug', type: 'slug' }, { name: 'client', type: 'string' }, { name: 'industry', type: 'reference', to: [{ type: 'industry' }] }, { name: 'challenge', type: 'text' }, { name: 'solution', type: 'text' }, { name: 'results', type: 'array', of: [{ type: 'string' }] }, { name: 'seo', type: 'seo' }] }),
  defineType({ name: 'redirect', type: 'document', fields: [{ name: 'from', type: 'string' }, { name: 'to', type: 'string' }, { name: 'permanent', type: 'boolean', initialValue: true }] }),
];
