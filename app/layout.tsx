import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE } from '@/lib/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Effects } from '@/components/Effects';
import { Tracking } from '@/components/Tracking';
import { CookieConsent } from '@/components/CookieConsent';
import { JsonLd } from '@/components/JsonLd';
import { orgLd, websiteLd, localBusinessLd } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Norvexa Technologies | AI Development & Software Company', template: '%s | Norvexa' },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  formatDetection: { telephone: false },
  icons: { icon: '/favicon.png', apple: '/apple-icon.png' },
  verification: {
    ...(SITE.gscVerification ? { google: SITE.gscVerification } : {}),
    ...(SITE.bingVerification ? { other: { 'msvalidate.01': SITE.bingVerification } } : {}),
  },
};
export const viewport: Viewport = { themeColor: '#f7f9fd', width: 'device-width', initialScale: 1 };

// Google Consent Mode v2: everything denied until the visitor chooses. Stored choice is re-applied before GTM loads.
const consentBoot = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
try{var c=JSON.parse(localStorage.getItem('nx_consent')||'null');if(c){gtag('consent','update',{analytics_storage:c.analytics?'granted':'denied',ad_storage:c.marketing?'granted':'denied',ad_user_data:c.marketing?'granted':'denied',ad_personalization:c.marketing?'granted':'denied'});}}catch(e){}
(function(){var p=new URLSearchParams(location.search),k=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid','li_fat_id'],o={};k.forEach(function(x){if(p.get(x))o[x]=p.get(x)});try{if(Object.keys(o).length){o.landing=location.pathname;sessionStorage.setItem('nx_attr',JSON.stringify(o))}if(!sessionStorage.getItem('nx_ref'))sessionStorage.setItem('nx_ref',document.referrer||'direct')}catch(e){}})();`;

const gtm = (id: string) => `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script dangerouslySetInnerHTML={{ __html: consentBoot }} />
        {SITE.ga4Id && (<>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${SITE.ga4Id}`} />
          <script dangerouslySetInnerHTML={{ __html: `gtag('js',new Date());gtag('config','${SITE.ga4Id}');` }} />
        </>)}
        {SITE.gtmId && <script dangerouslySetInnerHTML={{ __html: gtm(SITE.gtmId) }} />}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {SITE.gtmId && (
          <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${SITE.gtmId}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="gtm" /></noscript>
        )}
        <a href="#main" className="sr" style={{ position: 'absolute' }}>Skip to content</a>
        <JsonLd data={[orgLd(), websiteLd(), localBusinessLd()]} />
        <Effects />
        <Tracking />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
        <a href={SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : '/contact/'} className="wa" aria-label="Chat with us on WhatsApp">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3z"/></svg>
        </a>
      </body>
    </html>
  );
}
