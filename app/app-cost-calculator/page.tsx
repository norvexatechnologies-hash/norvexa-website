import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { AppCostCalculator } from '@/components/AppCostCalculator';
import { Faq } from '@/components/Faq';

export const metadata = pageMeta({
  title: 'App & Website Cost Calculator (India, UAE, UK)',
  description: 'Free calculator: estimate what your mobile app, website, web portal, AI chatbot or SaaS product will cost and how long it will take, in INR, AED, USD or GBP.',
  path: '/app-cost-calculator/',
});

const FAQS: [string, string][] = [
  ['How accurate is this estimate?', 'It gives a realistic planning range based on typical projects of each type. Your exact price depends on detailed requirements, which we confirm in a short discovery call before quoting.'],
  ['Why is there a range rather than a single price?', 'Two apps with the same feature list can differ a lot in complexity, integrations and design. The range covers a simple and a more complex version of what you selected.'],
  ['Can I start smaller and add features later?', 'Yes. Most clients launch a focused first version, learn from real users and add features in later phases. It is usually the most cost-effective approach.'],
  ['Do you work with clients outside India?', 'Yes. We work with clients across India, the UAE, Saudi Arabia, Oman, Qatar, Kuwait, the UK, Europe and the US, with quotes in your local currency.'],
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Free calculator" title="How much will your app cost?" lead="Pick what you want to build and the features you need. Get an instant budget and timeline range, then request a detailed quote." crumbs={[{ name: 'App cost calculator', path: '/app-cost-calculator/' }]} cta={false} />
      <section style={{ paddingTop: 56 }}><div className="wrap"><AppCostCalculator /></div></section>
      <section><div className="wrap faq-grid"><div><span className="eyebrow">FAQ</span><h2 style={{ fontSize: 'clamp(30px,4vw,42px)', margin: '16px 0' }}>About these estimates</h2></div><div><Faq faqs={FAQS} /></div></div></section>
    </>
  );
}
