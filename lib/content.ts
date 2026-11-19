// All website content lives here so pages stay consistent.
// Structure mirrors the Sanity schemas in /sanity/schemas, so this file can be
// replaced by CMS queries without changing the page components.

export type Pair = [string, string];
export type IconKey =
  | 'ai' | 'web' | 'mobile' | 'custom' | 'saas' | 'ecom' | 'uiux' | 'cloud' | 'dx'
  | 'agent' | 'chat' | 'app' | 'audit';

export interface Offering {
  slug: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  includes: Pair[];
  benefits: Pair[];
  tech: string[];
  faqs: Pair[];
  related: string[];
  icon: IconKey;
}

/* ------------------------------------------------------------------ */
/* AI SOLUTIONS (lead offering)                                         */
/* ------------------------------------------------------------------ */
export const AI_SOLUTIONS: Offering[] = [
  {
    slug: 'ai-agents',
    title: 'AI Agents',
    short: 'Agents that run routine processes end to end, with your people making the decisions.',
    metaTitle: 'AI Agent Development Company',
    metaDescription:
      'Norvexa builds secure AI agents that read documents, check records, update systems and route approvals, running routine work end to end with humans in control.',
    h1: 'AI agent development that runs your routine processes.',
    intro: [
      'An AI agent is software that can read, reason and act across your systems. It opens the email, extracts the invoice, checks it against the purchase order, posts the entry and tells the right person when something looks wrong.',
      'Norvexa designs agents around a specific process, connects them to the tools you already use, and puts clear approval steps in place so your team stays accountable for every decision that matters.',
    ],
    includes: [
      ['Process mapping', 'We document the current workflow, exceptions and approval rules before writing any code.'],
      ['Document understanding', 'Invoices, purchase orders, contracts, forms and emails in any format.'],
      ['System actions', 'Agents create, update and reconcile records in your ERP, CRM and helpdesk.'],
      ['Human-in-the-loop', 'Configurable approval steps, confidence thresholds and escalation paths.'],
      ['Monitoring dashboard', 'See what each agent did, how long it took and where it needed help.'],
      ['Continuous improvement', 'Monthly reviews to tune accuracy and extend coverage.'],
    ],
    benefits: [
      ['More capacity', 'Handle higher volumes without adding headcount for every spike.'],
      ['Faster cycle times', 'Work that took days moves in minutes.'],
      ['Fewer errors', 'The same checks applied consistently, every time.'],
      ['Full audit trail', 'Every read, decision and action is logged.'],
    ],
    tech: ['OpenAI GPT', 'Anthropic Claude', 'Google Gemini', 'LangGraph', 'Python', 'Node.js', 'PostgreSQL', 'Azure / AWS'],
    faqs: [
      ['Which processes are good candidates for AI agents?', 'High-volume, rules-based work with clear inputs and outputs, such as invoice processing, order entry, ticket triage, reconciliations and report preparation.'],
      ['Can an agent act without approval?', 'Only where you allow it. Most clients start with agents that prepare work for approval, then grant more autonomy as accuracy is proven.'],
      ['What happens when the agent is unsure?', 'It stops, explains what it found and routes the item to the right person with full context.'],
      ['How long does a first agent take to build?', 'A focused first agent typically goes live in 6 to 10 weeks, including testing with real data.'],
    ],
    related: ['company-assistant', 'ai-audit', 'ai-machine-learning'],
    icon: 'agent',
  },
  {
    slug: 'company-assistant',
    title: 'Company AI Assistant',
    short: 'One secure AI workspace for every team, connected to your systems and knowledge.',
    metaTitle: 'Private Enterprise AI Assistant Development',
    metaDescription:
      'A secure, private AI assistant connected to your CRM, ERP, documents and inbox, with team spaces for Sales, Finance, Operations and HR.',
    h1: 'An enterprise AI assistant for your whole company.',
    intro: [
      'Public AI chat tools do not know your customers, your pricing or your policies, and they should not see your data. A company assistant does both safely: it answers from your own knowledge and live systems, inside your security boundary.',
      'Norvexa deploys a private assistant with dedicated spaces for each team, connected to the tools each team relies on and governed by the permissions you already have.',
    ],
    includes: [
      ['Private deployment', 'Runs on your cloud tenancy or servers, using enterprise AI endpoints.'],
      ['Team spaces', 'Sales, Finance, Operations, HR, IT and Leadership each get tailored tools and prompts.'],
      ['Knowledge connection', 'SOPs, policies, contracts and wikis from SharePoint, Drive, Confluence or Notion.'],
      ['Live system access', 'Read-only or approved write access to CRM, ERP, helpdesk and BI data.'],
      ['Source citations', 'Every answer shows where the information came from.'],
      ['Adoption programme', 'Training, prompt libraries and champions for each department.'],
    ],
    benefits: [
      ['Answers in seconds', 'Stop searching across folders and asking colleagues.'],
      ['Consistent information', 'Everyone works from the same approved sources.'],
      ['Data stays private', 'Your data is not used to train public models.'],
      ['Role-based access', 'People only see what their role allows.'],
    ],
    tech: ['Microsoft Teams', 'Slack', 'SharePoint', 'Google Workspace', 'Entra ID / SSO', 'Vector search', 'OpenAI / Claude / Gemini'],
    faqs: [
      ['How is this different from ChatGPT or Copilot?', 'It is connected to your specific systems and knowledge, respects your existing permissions, and can be extended with company-specific tools and workflows.'],
      ['Where is our data stored?', 'In your own cloud tenancy or infrastructure. We configure enterprise AI endpoints that do not retain or train on your data.'],
      ['Can it work inside Microsoft Teams or Slack?', 'Yes. Most teams use it directly inside the chat tool they already have open all day.'],
      ['How do you drive adoption?', 'We run department workshops, publish ready-to-use prompts, and track usage so we can improve what people actually use.'],
    ],
    related: ['ai-agents', 'ai-apps', 'ai-audit'],
    icon: 'chat',
  },
  {
    slug: 'ai-apps',
    title: 'AI Apps',
    short: 'Custom software built around your work, with AI inside from day one.',
    metaTitle: 'AI App Development Company',
    metaDescription:
      'Norvexa designs and builds custom AI-powered web and mobile applications, from field-service tools to customer portals, built around how your business operates.',
    h1: 'AI app development built around how you work.',
    intro: [
      'Sometimes the right answer is not a chatbot but a purpose-built application: a mobile tool for technicians, a portal for customers, a dashboard that explains itself. AI apps put intelligence exactly where the work happens.',
      'We combine product design, full-stack engineering and applied AI to ship software that your teams and customers actually enjoy using.',
    ],
    includes: [
      ['Product discovery', 'Users, jobs to be done and success metrics defined upfront.'],
      ['UX and UI design', 'Clickable prototypes tested with real users.'],
      ['Full-stack build', 'Web, mobile and backend engineered for scale.'],
      ['Embedded AI', 'Extraction, recommendations, search, forecasting and assistants.'],
      ['Integrations', 'Connected to your ERP, CRM and identity provider.'],
      ['Launch and support', 'Release management, monitoring and iteration.'],
    ],
    benefits: [
      ['Fit to your process', 'No forcing teams into generic software.'],
      ['Competitive edge', 'Capabilities your competitors cannot buy off the shelf.'],
      ['You own the IP', 'Full source code and data ownership.'],
      ['Built to grow', 'Modular architecture that scales with demand.'],
    ],
    tech: ['Next.js', 'React Native', 'Flutter', 'Node.js', 'Python', 'PostgreSQL', 'AWS / Azure / GCP'],
    faqs: [
      ['What kinds of AI apps do you build?', 'Field-service and inspection apps, customer and partner portals, internal operations tools, analytics products and AI-enabled SaaS platforms.'],
      ['Do you build mobile apps too?', 'Yes, native iOS and Android or cross-platform with React Native and Flutter.'],
      ['Can you add AI to our existing application?', 'Yes. We often add search, document extraction or assistants to software that is already in production.'],
      ['How do you price app projects?', 'Fixed price for a well-defined scope, or a dedicated team for evolving products. Both start with a paid discovery.'],
    ],
    related: ['ai-agents', 'custom-software-development', 'mobile-app-development'],
    icon: 'app',
  },
  {
    slug: 'ai-audit',
    title: 'AI Readiness Audit',
    short: 'Find out where AI pays off first, and leave with a costed roadmap.',
    metaTitle: 'AI Readiness Audit & AI Consulting Roadmap',
    metaDescription:
      'The Norvexa AI audit maps your teams, processes, data and systems, scores every AI opportunity and delivers a prioritised, costed AI roadmap in 2 to 4 weeks.',
    h1: 'AI readiness assessment: start with the AI audit.',
    intro: [
      'Most AI projects stall because they start with the technology instead of the work. The Norvexa AI audit starts with your teams and processes, so the first project you fund is the one most likely to pay back.',
      'In two to four weeks we map how work really happens, score every opportunity on value and feasibility, and hand over a clear report and roadmap your leadership can act on.',
    ],
    includes: [
      ['Stakeholder interviews', 'Sessions with department heads and frontline teams.'],
      ['Process and systems map', 'Workflows, data sources, tools and integration points.'],
      ['Opportunity scoring', 'Value, effort, risk and data readiness for each use case.'],
      ['Governance review', 'Security, privacy and policy requirements for AI.'],
      ['Audit report', 'Findings, quick wins and risks in plain language.'],
      ['AI roadmap', 'Phased plan with costs, timelines and success metrics.'],
    ],
    benefits: [
      ['Fund the right project first', 'Evidence, not hype, decides the order of work.'],
      ['Clear business case', 'Expected savings and payback for each initiative.'],
      ['Aligned leadership', 'One shared view of where AI fits.'],
      ['Low commitment', 'A fixed-fee, fixed-timeline engagement.'],
    ],
    tech: ['Process mining', 'Workshops', 'Systems inventory', 'Data readiness checks', 'ROI modelling'],
    faqs: [
      ['How long does the AI audit take?', 'Typically two to four weeks, depending on the number of departments in scope.'],
      ['What do we receive at the end?', 'An audit report, a scored list of opportunities and a phased AI roadmap with costs and metrics.'],
      ['Are we obliged to build with Norvexa afterwards?', 'No. The roadmap is yours to execute with any partner or in-house team.'],
      ['Who needs to be involved from our side?', 'An executive sponsor plus a few hours from each department lead and a technical contact.'],
    ],
    related: ['ai-agents', 'company-assistant', 'digital-transformation'],
    icon: 'audit',
  },
];

/* ------------------------------------------------------------------ */
/* ENGINEERING SERVICES                                                 */
/* ------------------------------------------------------------------ */
export const SERVICES: Offering[] = [
  {
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    short: 'Generative AI, predictive models and computer vision deployed securely into your workflows.',
    metaTitle: 'AI & Machine Learning Development Services',
    metaDescription:
      'Generative AI, LLM applications, predictive analytics, computer vision and MLOps. Norvexa builds secure, production-grade AI and machine learning solutions.',
    h1: 'Generative AI and machine learning development that ships.',
    intro: [
      'From retrieval-augmented chat over your documents to demand forecasting and visual inspection, we build AI that solves a measurable business problem and runs reliably in production.',
      'We are model-agnostic. We select and evaluate models for each use case, balancing accuracy, cost, latency and data-privacy requirements.',
    ],
    includes: [
      ['Generative AI and LLM apps', 'Assistants, summarisation and content generation.'],
      ['RAG and enterprise search', 'Accurate answers grounded in your own data.'],
      ['Predictive analytics', 'Forecasting, scoring, churn and anomaly detection.'],
      ['Computer vision', 'Document, image and video understanding.'],
      ['MLOps', 'Evaluation, monitoring, versioning and retraining.'],
      ['AI governance', 'Guardrails, access control and audit logs.'],
    ],
    benefits: [
      ['Measurable ROI', 'Every model is tied to a business metric.'],
      ['Production-grade', 'Tested, monitored and maintainable.'],
      ['Secure by design', 'Private endpoints and data minimisation.'],
      ['No vendor lock-in', 'Swap models as the market evolves.'],
    ],
    tech: ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'Hugging Face', 'OpenAI', 'Claude', 'Gemini', 'Pinecone', 'pgvector'],
    faqs: [
      ['Which AI models do you work with?', 'GPT, Claude, Gemini, Llama, Mistral and open-source models, chosen per use case and approved by your organisation.'],
      ['Is our data used to train public models?', 'No. We use enterprise endpoints and private deployments configured not to retain or train on your data.'],
      ['Can you fine-tune models?', 'Yes, when it measurably improves results. Often retrieval and prompt design deliver more for less.'],
      ['How do you measure AI accuracy?', 'We build evaluation sets from your real data and track accuracy before and after launch.'],
    ],
    related: ['ai-agents', 'saas-development', 'cloud-devops'],
    icon: 'ai',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    short: 'Fast, secure, SEO-first websites and web platforms built with Next.js and headless CMS.',
    metaTitle: 'Web Development Company | Next.js Experts',
    metaDescription:
      'SEO-first corporate websites, web apps and portals built with Next.js, React, TypeScript and headless CMS, with fast Core Web Vitals and international SEO.',
    h1: 'Web development company building sites that rank and convert.',
    intro: [
      'Your website is often the first conversation you have with an international buyer. We build fast, accessible, search-optimised sites that communicate credibility and turn visitors into qualified enquiries.',
      'Every build includes a headless CMS so your marketing team can publish pages, update SEO fields and launch landing pages without waiting for developers.',
    ],
    includes: [
      ['Corporate websites', 'Premium, conversion-focused brand experiences.'],
      ['Web applications', 'Portals, dashboards and internal tools.'],
      ['Headless CMS', 'Sanity, Strapi or Contentful, set up for marketers.'],
      ['Technical SEO', 'Schema, sitemaps, canonicals and hreflang.'],
      ['Performance', 'Core Web Vitals targets: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.'],
      ['Accessibility', 'WCAG 2.1 AA design and development practices.'],
    ],
    benefits: [
      ['Higher rankings', 'Server-rendered, crawlable HTML for every page.'],
      ['More enquiries', 'Clear CTAs, forms and lead tracking.'],
      ['Marketing independence', 'Content updates without developer tickets.'],
      ['Global ready', 'Country pages and hreflang from day one.'],
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Sanity CMS', 'Vercel', 'Cloudflare', 'GA4'],
    faqs: [
      ['Why Next.js instead of WordPress?', 'Next.js gives finer control over performance, rendering and metadata, which matters for technical SEO and scale. WordPress remains a good choice for simpler sites.'],
      ['Can our team edit content?', 'Yes. Pages, blog posts, FAQs and SEO fields are all editable in the CMS.'],
      ['Do you handle website migrations?', 'Yes, including URL mapping and 301 redirects to protect existing rankings.'],
      ['How long does a corporate website take?', 'Typically 7 to 10 weeks from discovery to launch for a properly scoped site.'],
    ],
    related: ['ui-ux-design', 'ecommerce-development', 'cloud-devops'],
    icon: 'web',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    short: 'Native and cross-platform iOS and Android apps with polished UX and secure backends.',
    metaTitle: 'Mobile App Development Company',
    metaDescription:
      'Native iOS and Android and cross-platform React Native and Flutter apps, from MVP to enterprise scale, with secure APIs and AI features built in.',
    h1: 'Mobile app development for apps people keep using.',
    intro: [
      'Great mobile apps feel effortless, work offline when they need to, and stay fast as they grow. We design and engineer consumer and enterprise apps with that standard in mind.',
      'From the first prototype to App Store release and ongoing updates, one team owns the product with you.',
    ],
    includes: [
      ['iOS and Android', 'Native builds with Swift and Kotlin.'],
      ['Cross-platform', 'React Native and Flutter for faster delivery.'],
      ['Backend and APIs', 'Secure, scalable services and admin panels.'],
      ['Offline-first', 'Reliable sync for field and on-site teams.'],
      ['AI features', 'Scanning, recognition, recommendations and assistants.'],
      ['Store launch', 'Submission, review and release management.'],
    ],
    benefits: [
      ['One codebase option', 'Reach both platforms faster with cross-platform.'],
      ['Enterprise security', 'SSO, encryption and device management.'],
      ['Measured growth', 'Analytics and A/B testing built in.'],
      ['Long-term support', 'OS updates and new features handled.'],
    ],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase', 'Node.js', 'GraphQL'],
    faqs: [
      ['Native or cross-platform?', 'Cross-platform suits most business apps. We recommend native for heavy device integration or maximum performance.'],
      ['Do you publish to the App Store and Google Play?', 'Yes, we manage submission, compliance and releases.'],
      ['Can the app work offline?', 'Yes. We design offline-first data sync for teams in the field.'],
      ['Do you maintain apps after launch?', 'Yes, through support plans with defined response times.'],
    ],
    related: ['ui-ux-design', 'saas-development', 'ai-apps'],
    icon: 'mobile',
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    short: 'Enterprise systems, ERP and CRM extensions and workflow tools engineered around your processes.',
    metaTitle: 'Custom Software Development Company',
    metaDescription:
      'Custom enterprise software, ERP and CRM extensions, workflow automation, integrations and legacy modernisation, engineered around your business processes.',
    h1: 'Custom software development that fits how you work.',
    intro: [
      'Off-the-shelf software forces compromises. Custom software removes them, giving your teams tools that match your processes, data and growth plans.',
      'We build robust enterprise systems with clean architecture, automated testing and documentation, so your software remains an asset for years.',
    ],
    includes: [
      ['Enterprise applications', 'Secure, scalable line-of-business systems.'],
      ['ERP and CRM extensions', 'Fill gaps in SAP, Odoo, Dynamics and Salesforce.'],
      ['Workflow automation', 'Approvals, routing and notifications.'],
      ['Systems integration', 'APIs and middleware between platforms.'],
      ['Legacy modernisation', 'Re-platform without disrupting operations.'],
      ['Data platforms', 'Warehouses, pipelines and reporting.'],
    ],
    benefits: [
      ['Exact fit', 'Built for your process, not a generic one.'],
      ['Lower running costs', 'Reduce licences and manual work.'],
      ['Full ownership', 'Source code and IP transferred to you.'],
      ['Maintainable', 'Tested, documented and easy to extend.'],
    ],
    tech: ['TypeScript', 'Node.js', 'Java', '.NET', 'Python', 'PostgreSQL', 'Kafka', 'Docker'],
    faqs: [
      ['How do you estimate cost?', 'After a short discovery, we provide a fixed-scope estimate or a dedicated-team model.'],
      ['Who owns the code?', 'You do. Full IP and source-code transfer is standard.'],
      ['Can you work with our in-house team?', 'Yes. We regularly extend internal teams or take ownership of specific modules.'],
      ['Do you sign NDAs?', 'Yes, before any detailed discussion of your systems or data.'],
    ],
    related: ['cloud-devops', 'digital-transformation', 'ai-agents'],
    icon: 'custom',
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    short: 'Multi-tenant SaaS products from MVP to scale, with billing, analytics and AI built in.',
    metaTitle: 'SaaS Development Company',
    metaDescription:
      'End-to-end SaaS product development: discovery, MVP, multi-tenant architecture, subscriptions, analytics and AI features. Built to scale by Norvexa.',
    h1: 'SaaS development from first MVP to global scale.',
    intro: [
      'Building SaaS means balancing speed to market with an architecture that will not need rebuilding at your first thousand customers. We help founders and product teams get both right.',
      'We bring product thinking, design and engineering together so you launch quickly, learn from real users and scale with confidence.',
    ],
    includes: [
      ['Product discovery', 'Positioning, scope and roadmap.'],
      ['MVP delivery', 'A focused first release in weeks, not months.'],
      ['Multi-tenancy', 'Secure tenant isolation and configuration.'],
      ['Subscriptions and billing', 'Stripe plans, trials and invoicing.'],
      ['Admin and analytics', 'Usage, revenue and product-health metrics.'],
      ['Enterprise readiness', 'SSO, roles, audit logs and SOC 2-friendly practices.'],
    ],
    benefits: [
      ['Faster launch', 'Validate demand before over-investing.'],
      ['Scales cleanly', 'Architecture designed for growth.'],
      ['Investor-ready', 'Clean code, docs and metrics.'],
      ['AI differentiation', 'Intelligent features from day one.'],
    ],
    tech: ['Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'Stripe', 'Redis', 'AWS', 'Vercel'],
    faqs: [
      ['How quickly can we launch an MVP?', 'Typically 8 to 12 weeks, depending on scope.'],
      ['Do you help with product strategy?', 'Yes, product discovery is part of every SaaS engagement.'],
      ['Can you take over an existing SaaS codebase?', 'Yes, starting with a code and architecture audit.'],
      ['Which payment providers do you support?', 'Stripe, Paddle, Razorpay and others for global billing.'],
    ],
    related: ['ai-machine-learning', 'ui-ux-design', 'cloud-devops'],
    icon: 'saas',
  },
  {
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    short: 'High-converting stores and B2B commerce on Shopify, headless and custom platforms.',
    metaTitle: 'E-commerce Development Company | Shopify',
    metaDescription:
      'Shopify, Shopify Plus, headless and B2B e-commerce development with ERP integration, multi-currency payments and AI-powered merchandising.',
    h1: 'E-commerce development built for growth across borders.',
    intro: [
      'Whether you sell to consumers or trade partners, your store has to be fast, trustworthy and connected to the systems behind it. We build commerce experiences that convert and operations that scale.',
      'From Shopify launches to fully headless storefronts, we choose the platform that fits your catalogue, markets and growth plans.',
    ],
    includes: [
      ['Shopify and Shopify Plus', 'Themes, custom apps and migrations.'],
      ['Headless commerce', 'Next.js storefronts with any commerce engine.'],
      ['B2B portals', 'Customer pricing, quotes and bulk ordering.'],
      ['Global payments', 'Multi-currency, tax and regional gateways.'],
      ['ERP and inventory sync', 'Real-time stock, orders and fulfilment.'],
      ['AI merchandising', 'Search, recommendations and personalisation.'],
    ],
    benefits: [
      ['Higher conversion', 'Speed and UX tuned for buyers.'],
      ['Sell internationally', 'Currencies, languages and tax rules.'],
      ['Less manual work', 'Orders flow straight into operations.'],
      ['SEO-safe migrations', 'Redirects and data preserved.'],
    ],
    tech: ['Shopify', 'Next.js', 'Stripe', 'Algolia', 'NetSuite', 'Odoo', 'Klaviyo', 'Cloudflare'],
    faqs: [
      ['Can you migrate our existing store?', 'Yes, including products, customers, orders and SEO redirects.'],
      ['Do you support multiple currencies?', 'Yes, with regional pricing for USD, GBP, AED, CAD, AUD and EUR.'],
      ['Shopify or headless?', 'Shopify suits most brands. Headless makes sense for complex content, very high traffic or unusual checkout needs.'],
      ['Can you integrate with our ERP?', 'Yes, including NetSuite, SAP Business One, Odoo and Dynamics.'],
    ],
    related: ['web-development', 'ui-ux-design', 'ai-machine-learning'],
    icon: 'ecom',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    short: 'Research-led product design and design systems that make complex software feel simple.',
    metaTitle: 'UI/UX Design Agency for Web & Mobile',
    metaDescription:
      'User research, UX strategy, UI design, prototyping and design systems for web, mobile and SaaS products. Accessible, conversion-focused design by Norvexa.',
    h1: 'UI/UX design that makes complex software feel simple.',
    intro: [
      'Good design is how users experience your strategy. We research real user needs, simplify complex workflows and create interfaces that build trust.',
      'Our design systems give your developers reusable components, so products stay consistent as they grow.',
    ],
    includes: [
      ['User research', 'Interviews, analytics review and usability testing.'],
      ['Information architecture', 'Flows, navigation and content structure.'],
      ['UI design', 'High-fidelity screens in Figma.'],
      ['Design systems', 'Tokens, components and documentation.'],
      ['Prototyping', 'Clickable prototypes for testing and buy-in.'],
      ['Accessibility', 'WCAG-compliant, inclusive design.'],
    ],
    benefits: [
      ['Higher adoption', 'Software people actually want to use.'],
      ['Faster development', 'Reusable components reduce build time.'],
      ['Fewer support tickets', 'Clear, intuitive flows.'],
      ['Stronger brand', 'Consistent, premium experience.'],
    ],
    tech: ['Figma', 'FigJam', 'Maze', 'Hotjar', 'Microsoft Clarity', 'Storybook'],
    faqs: [
      ['Do you design in Figma?', 'Yes. You receive organised Figma files and a documented design system.'],
      ['Can you redesign an existing product?', 'Yes, starting with a UX audit to prioritise the highest-impact changes.'],
      ['Do you test designs with users?', 'Yes, with moderated and unmoderated usability tests.'],
      ['Can you work with our developers?', 'Yes. We provide developer-ready specs and support during build.'],
    ],
    related: ['web-development', 'mobile-app-development', 'saas-development'],
    icon: 'uiux',
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud Solutions & DevOps',
    short: 'Cloud architecture, migration, CI/CD and reliability on AWS, Azure and Google Cloud.',
    metaTitle: 'Cloud & DevOps Services | AWS, Azure, GCP',
    metaDescription:
      'Cloud migration, architecture, Kubernetes, CI/CD, infrastructure as code, observability and cost optimisation on AWS, Azure and Google Cloud.',
    h1: 'Cloud and DevOps services that keep you fast and reliable.',
    intro: [
      'Modern software depends on infrastructure that scales automatically, deploys safely and costs only what it should. We design, migrate and operate cloud platforms with those goals.',
      'Our DevOps practices shorten release cycles, reduce outages and give you clear visibility into performance and spend.',
    ],
    includes: [
      ['Cloud migration', 'Lift-and-shift, re-platform or re-architect.'],
      ['Architecture', 'Well-architected, secure landing zones.'],
      ['CI/CD pipelines', 'Automated testing and zero-downtime releases.'],
      ['Kubernetes and containers', 'Orchestration at scale.'],
      ['Infrastructure as code', 'Terraform and CDK, version-controlled.'],
      ['Observability and FinOps', 'Monitoring, alerting and cost optimisation.'],
    ],
    benefits: [
      ['Faster releases', 'Ship daily with confidence.'],
      ['Higher uptime', 'Resilient, monitored systems.'],
      ['Lower cloud bills', 'Right-sized resources.'],
      ['Stronger security', 'Policy as code and least privilege.'],
    ],
    tech: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'Cloudflare'],
    faqs: [
      ['Which clouds do you support?', 'AWS, Microsoft Azure and Google Cloud, plus Cloudflare and Vercel at the edge.'],
      ['Do you offer managed services?', 'Yes, including monitoring, patching, backups and incident response.'],
      ['Can you reduce our cloud costs?', 'Usually. A FinOps review identifies idle, oversized and mispriced resources.'],
      ['Do you help with compliance?', 'Yes, we design for GDPR, ISO 27001 and SOC 2 control requirements.'],
    ],
    related: ['custom-software-development', 'saas-development', 'digital-transformation'],
    icon: 'cloud',
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    short: 'Strategy and execution to modernise operations, data and customer experience.',
    metaTitle: 'Digital Transformation Consulting Company',
    metaDescription:
      'Digital transformation strategy and delivery: process redesign, data strategy, automation, AI adoption and change management for growing businesses.',
    h1: 'Digital transformation consulting that delivers results.',
    intro: [
      'Transformation succeeds when strategy, technology and people move together. We help leadership teams decide what to change, then deliver it in practical, measurable phases.',
      'Our approach connects process redesign, data, automation and AI so each phase funds and informs the next.',
    ],
    includes: [
      ['Transformation roadmap', 'Prioritised, costed and sequenced.'],
      ['Process redesign', 'Lean, automated workflows.'],
      ['Data strategy', 'A single source of truth for decisions.'],
      ['Automation and AI', 'RPA, agents and assistants where they pay off.'],
      ['Change management', 'Training, communication and adoption.'],
      ['KPI tracking', 'Measure outcomes, not activity.'],
    ],
    benefits: [
      ['Clear direction', 'One roadmap the whole leadership team owns.'],
      ['Quick wins early', 'Value delivered within the first quarter.'],
      ['Lower risk', 'Phased delivery with checkpoints.'],
      ['Lasting change', 'Teams trained to sustain improvements.'],
    ],
    tech: ['Process mining', 'Power BI', 'Microsoft 365', 'Google Workspace', 'Low-code platforms', 'AI agents'],
    faqs: [
      ['Where should we start?', 'Most clients start with our AI audit, which maps processes and identifies quick wins.'],
      ['How do you measure success?', 'We agree on KPIs upfront, such as hours saved, cycle time and revenue impact.'],
      ['How long does a transformation take?', 'Programmes run in quarterly phases, each delivering measurable value.'],
      ['Do you replace our existing systems?', 'Only when it makes sense. We prefer to integrate and extend first.'],
    ],
    related: ['ai-audit', 'custom-software-development', 'cloud-devops'],
    icon: 'dx',
  },
];

export const ALL_OFFERINGS = [...AI_SOLUTIONS, ...SERVICES];
export const offeringHref = (slug: string) =>
  AI_SOLUTIONS.some((s) => s.slug === slug) ? `/ai-solutions/${slug}/` : `/services/${slug}/`;
export const findOffering = (slug: string) => ALL_OFFERINGS.find((s) => s.slug === slug);

/* ------------------------------------------------------------------ */
/* INDUSTRIES                                                           */
/* ------------------------------------------------------------------ */
export interface Industry {
  slug: string; title: string; emoji: string; short: string; metaDescription: string;
  intro: string; challenges: string[]; solutions: Pair[]; services: string[];
}
export const INDUSTRIES: Industry[] = [
  { slug: 'healthcare', title: 'Healthcare', emoji: '🏥', short: 'Patient portals, claims automation and clinical document AI.',
    metaDescription: 'AI and software for healthcare providers: patient portals, claims automation, clinical document AI and secure, compliant platforms.',
    intro: 'Healthcare teams carry heavy administrative load alongside patient care. We build secure software and AI that reduces paperwork and improves patient experience, designed around privacy requirements such as HIPAA and GDPR.',
    challenges: ['Manual claims and prior-authorisation work', 'Fragmented patient records and communication', 'Strict privacy and security obligations'],
    solutions: [['Claims and billing agents', 'Extract, validate and prepare claims for review.'], ['Patient portals and apps', 'Booking, reminders, results and secure messaging.'], ['Clinical document AI', 'Summarise referrals, notes and discharge letters.'], ['Operations dashboards', 'Capacity, wait times and revenue cycle in one view.']],
    services: ['ai-agents', 'mobile-app-development', 'custom-software-development'] },
  { slug: 'finance-fintech', title: 'Finance & Fintech', emoji: '🏦', short: 'Secure platforms, KYC automation and reconciliation.',
    metaDescription: 'Fintech and financial services software: KYC automation, reconciliation agents, secure customer platforms and AI-driven risk analytics.',
    intro: 'Financial services demand accuracy, auditability and security at every step. We build platforms and AI agents that speed up onboarding, reconciliation and reporting without compromising control.',
    challenges: ['Slow, document-heavy customer onboarding', 'Time-consuming reconciliations and month-end close', 'Regulatory reporting and audit pressure'],
    solutions: [['KYC and onboarding automation', 'Document checks and risk flags in minutes.'], ['Reconciliation agents', 'Match transactions and surface exceptions.'], ['Customer platforms', 'Secure web and mobile banking experiences.'], ['Risk analytics', 'Scoring, anomaly detection and alerts.']],
    services: ['ai-agents', 'saas-development', 'cloud-devops'] },
  { slug: 'retail-ecommerce', title: 'Retail & E-commerce', emoji: '🛒', short: 'Storefronts, personalisation and inventory intelligence.',
    metaDescription: 'Retail and e-commerce technology: Shopify and headless storefronts, AI personalisation, inventory forecasting and customer service automation.',
    intro: 'Retailers compete on experience, availability and speed. We connect storefronts, inventory and service with AI so customers find what they want and operations keep up.',
    challenges: ['Stock-outs and overstock', 'High customer-service volumes', 'Low conversion on mobile'],
    solutions: [['High-converting storefronts', 'Fast Shopify and headless builds.'], ['Demand forecasting', 'Smarter purchasing and replenishment.'], ['Service automation', 'Order, return and delivery queries handled 24/7.'], ['Personalisation', 'Search and recommendations that lift basket size.']],
    services: ['ecommerce-development', 'ai-machine-learning', 'company-assistant'] },
  { slug: 'manufacturing', title: 'Manufacturing', emoji: '🏭', short: 'Order-to-cash automation, maintenance and quality.',
    metaDescription: 'Manufacturing software and AI: order-entry automation, maintenance assistants, quality inspection, ERP integration and production dashboards.',
    intro: 'Manufacturers run on tight margins and complex supply chains. We automate order processing, support maintenance teams with AI and give leaders real-time visibility across plants.',
    challenges: ['Orders arriving in many formats', 'Unplanned downtime', 'Disconnected ERP, MES and spreadsheets'],
    solutions: [['Order-entry agents', 'Purchase orders from email and PDF straight into ERP.'], ['Maintenance assistant', 'Answers from manuals and past work orders.'], ['Visual quality inspection', 'Defect detection with computer vision.'], ['Plant dashboards', 'OEE, output and quality in real time.']],
    services: ['ai-agents', 'custom-software-development', 'ai-machine-learning'] },
  { slug: 'logistics', title: 'Logistics & Supply Chain', emoji: '🚚', short: 'Dispatch, tracking and document automation.',
    metaDescription: 'Logistics software and AI: dispatch automation, shipment tracking portals, customs and freight document processing and route optimisation.',
    intro: 'Logistics moves on documents and updates. We automate shipping paperwork, give customers live visibility and help dispatchers make better decisions faster.',
    challenges: ['Paper-heavy shipping and customs processes', 'Customers asking "where is my shipment?"', 'Inefficient routes and loads'],
    solutions: [['Document automation', 'Bills of lading, invoices and customs forms.'], ['Tracking portals', 'Live status for customers and partners.'], ['Dispatch optimisation', 'Routes and loads planned with AI.'], ['Driver apps', 'Proof of delivery and offline sync.']],
    services: ['ai-agents', 'mobile-app-development', 'custom-software-development'] },
  { slug: 'real-estate-construction', title: 'Real Estate & Construction', emoji: '🏗️', short: 'Project portals, bids and contract workflows.',
    metaDescription: 'Real estate and construction technology: project portals, bid preparation AI, contract review, site reporting apps and property management platforms.',
    intro: 'Construction and property businesses manage large volumes of contracts, drawings and site data. We bring that information together and use AI to speed up bids, reviews and reporting.',
    challenges: ['Slow bid and tender preparation', 'Contract risk buried in long documents', 'Site updates scattered across channels'],
    solutions: [['Bid assistant', 'Draft tender responses from past submissions.'], ['Contract review', 'Flag risky clauses against your playbook.'], ['Site reporting apps', 'Photos, snags and progress from the field.'], ['Property platforms', 'Listings, tenants and maintenance in one place.']],
    services: ['company-assistant', 'mobile-app-development', 'web-development'] },
  { slug: 'education', title: 'Education', emoji: '🎓', short: 'Learning platforms and admissions automation.',
    metaDescription: 'Education technology: learning platforms, admissions automation, student support assistants and analytics for schools, universities and training providers.',
    intro: 'Education providers need engaging learning experiences and efficient administration. We build platforms and assistants that support students and free staff for teaching.',
    challenges: ['High admissions and enquiry volumes', 'Disconnected learning tools', 'Limited insight into student progress'],
    solutions: [['Admissions automation', 'Enquiries, applications and document checks.'], ['Learning platforms', 'Courses, assessments and certificates.'], ['Student assistant', 'Answers on courses, fees and policies 24/7.'], ['Learning analytics', 'Early alerts for at-risk learners.']],
    services: ['saas-development', 'company-assistant', 'web-development'] },
  { slug: 'travel-hospitality', title: 'Travel & Hospitality', emoji: '✈️', short: 'Booking engines and guest assistants.',
    metaDescription: 'Travel and hospitality technology: booking engines, guest messaging assistants, revenue dashboards and mobile apps for hotels and travel companies.',
    intro: 'Guests expect instant answers and seamless booking. We build booking experiences, guest assistants and operational tools that raise satisfaction and direct revenue.',
    challenges: ['Dependence on third-party booking channels', 'Guest messages at all hours', 'Manual revenue and occupancy reporting'],
    solutions: [['Direct booking engines', 'Fast, mobile-first booking flows.'], ['Guest assistant', 'WhatsApp and web chat in multiple languages.'], ['Revenue dashboards', 'Occupancy, rates and channel mix.'], ['Staff apps', 'Housekeeping and maintenance coordination.']],
    services: ['web-development', 'company-assistant', 'mobile-app-development'] },
];

/* ------------------------------------------------------------------ */
/* REGIONS (international SEO)                                          */
/* ------------------------------------------------------------------ */
export interface Region {
  slug: string; name: string; short: string; hreflang: string; currency: string; timezone: string;
  metaTitle: string; metaDescription: string; h1: string; intro: string[];
  why: Pair[]; compliance: string; focus: string[]; faqs: Pair[];
}
export const REGIONS: Region[] = [
  { slug: 'in', name: 'India', short: 'India', hreflang: 'en-IN', currency: 'INR', timezone: 'Headquartered at Infopark, Kochi, Kerala (IST)',
    metaTitle: 'IT Company in Kochi | AI & Software Development',
    metaDescription: 'AI and software development company at Infopark, Kochi, Kerala. Building AI agents, web and mobile apps and custom software for India and the world.',
    h1: 'IT company in Kochi for AI and software development.',
    intro: ['Norvexa Technologies is headquartered at Infopark, Kochi, one of Kerala\'s leading technology parks. From here, our engineers build AI agents, company assistants, web and mobile apps and custom software for businesses across India and around the world.', 'Indian businesses work with a local team that understands GST, Indian payment gateways, regional languages and the pace of growing companies, with the same engineering standards we deliver to clients in the UK, USA and UAE.'],
    why: [['Local team in Kochi', 'Meet us in person at Infopark, Kakkanad.'], ['Global delivery standards', 'The same processes we use for UK, US and UAE clients.'], ['India-ready integrations', 'GST invoicing, Razorpay, UPI, Tally, Zoho and WhatsApp Business.'], ['INR pricing', 'Clear, fixed-scope proposals in Indian rupees.']],
    compliance: 'We design in line with the Digital Personal Data Protection Act 2023 (DPDP Act) and sector rules, with data hosted in Indian cloud regions such as Mumbai or Hyderabad on request.',
    focus: ['ai-agents', 'web-development', 'mobile-app-development'],
    faqs: [['Where is Norvexa\'s office in Kochi?', 'Our office is at TBC, 8th Floor, Vismaya, Infopark Phase I, Infopark Road, Kakkanad, Kochi, Kerala 682042.'], ['Do you work with businesses across India?', 'Yes. We work with companies across Kerala and India, in person or remotely, as well as international clients.'], ['Can you integrate with Indian systems like Tally, Zoho or Razorpay?', 'Yes. We regularly integrate with Tally, Zoho, Razorpay, UPI payment flows, GST invoicing and WhatsApp Business.']] },
  { slug: 'us', name: 'United States', short: 'USA', hreflang: 'en-US', currency: 'USD', timezone: 'Overlap with EST, CST and PST business hours',
    metaTitle: 'AI & Software Development Company, USA',
    metaDescription: 'Norvexa helps US companies adopt AI agents, company assistants and custom software, with US-hours collaboration, USD pricing and enterprise-grade security.',
    h1: 'AI development company for US businesses.',
    intro: ['US companies are moving fast on AI, and the gap between leaders and laggards is widening. Norvexa helps mid-market and growth-stage businesses put AI to work in operations, sales and finance, without building a large in-house AI team.', 'Our delivery model provides overlap with US Eastern and Central business hours, with senior consultants available for planning calls and sprint reviews.'],
    why: [['US-hours collaboration', 'Daily overlap for stand-ups, reviews and urgent issues.'], ['Enterprise security', 'SSO, role-based access and audit trails as standard.'], ['Transparent USD pricing', 'Fixed-scope or dedicated-team engagements.'], ['Stack familiarity', 'Salesforce, HubSpot, NetSuite, Microsoft 365 and Google Workspace.']],
    compliance: 'We design with HIPAA, SOC 2 and CCPA requirements in mind where relevant, and sign NDAs and data-processing agreements before work begins.',
    focus: ['ai-agents', 'saas-development', 'custom-software-development'],
    faqs: [['Do you work US business hours?', 'Our team provides overlap with US Eastern and Central hours, and we schedule key meetings at times that suit your team.'], ['Can you contract in USD?', 'Yes, we invoice in USD and support standard US contract terms.']] },
  { slug: 'uk', name: 'United Kingdom', short: 'UK', hreflang: 'en-GB', currency: 'GBP', timezone: 'Full overlap with UK working hours',
    metaTitle: 'AI Consultancy & Software Development, UK',
    metaDescription: 'AI consultancy, AI agents and bespoke software development for UK businesses, with UK GDPR-aware delivery, GBP pricing and full UK working-day overlap.',
    h1: 'Software development and AI consultancy for UK organisations.',
    intro: ['UK organisations face rising costs and tight labour markets. AI agents and well-designed software help teams do more with the people they have. Norvexa partners with UK businesses to identify, build and run those solutions.', 'With working hours that overlap the full UK day, collaboration feels like working with a local team.'],
    why: [['Full UK-day overlap', 'Same-day responses and live collaboration.'], ['UK GDPR-aware delivery', 'Privacy by design and data-processing agreements.'], ['GBP pricing', 'Clear, fixed-scope proposals.'], ['Microsoft-first expertise', 'Teams, SharePoint, Dynamics 365 and Azure.']],
    compliance: 'Solutions are designed in line with UK GDPR and the Data Protection Act 2018, with data hosted in UK or EU regions on request.',
    focus: ['company-assistant', 'ai-audit', 'web-development'],
    faqs: [['Can our data stay in the UK?', 'Yes. We can deploy on UK-region cloud infrastructure in Azure, AWS or Google Cloud.'], ['Do you sign UK-standard contracts?', 'Yes, including data-processing agreements aligned with UK GDPR.']] },
  { slug: 'ae', name: 'United Arab Emirates', short: 'UAE', hreflang: 'en-AE', currency: 'AED', timezone: 'Close time-zone alignment with Gulf Standard Time',
    metaTitle: 'AI & Software Development Company, Dubai UAE',
    metaDescription: 'AI agents, digital transformation and custom software for businesses in Dubai, Abu Dhabi and across the UAE, with a local office in Dubai.',
    h1: 'Software development and AI company for Dubai and the UAE.',
    intro: ['The UAE is one of the most ambitious AI markets in the world, and businesses across Dubai and Abu Dhabi are investing to keep pace. Norvexa helps them move from AI ambition to working systems in operations, customer service and finance.', 'With only a short time difference from Gulf Standard Time, our team works in step with yours.'],
    why: [['Gulf time-zone alignment', 'Near-identical working hours.'], ['Bilingual experiences', 'Arabic and English interfaces and assistants.'], ['WhatsApp-first service', 'Customer assistants on the channel your customers prefer.'], ['AED pricing', 'Local-currency proposals.']],
    compliance: 'We design with the UAE Personal Data Protection Law and sector regulations in mind, and can deploy in UAE cloud regions.',
    focus: ['digital-transformation', 'company-assistant', 'mobile-app-development'],
    faqs: [['Do you support Arabic?', 'Yes, including right-to-left interfaces and bilingual AI assistants.'], ['Can data be hosted in the UAE?', 'Yes, using UAE regions from Azure, AWS or Oracle Cloud.']] },
  { slug: 'ca', name: 'Canada', short: 'Canada', hreflang: 'en-CA', currency: 'CAD', timezone: 'Overlap with Eastern business hours',
    metaTitle: 'AI & Software Development Company, Canada',
    metaDescription: 'AI agents, SaaS and custom software development for Canadian companies, with PIPEDA-aware delivery, CAD pricing and Eastern-hours collaboration.',
    h1: 'AI and software engineering for Canadian companies.',
    intro: ['Canadian businesses are investing in AI to offset labour shortages and stay competitive with larger US rivals. Norvexa helps them adopt AI and modern software pragmatically, starting with the processes that pay back fastest.', 'We provide overlap with Eastern business hours for planning, reviews and support.'],
    why: [['Eastern-hours overlap', 'Collaboration that fits your day.'], ['PIPEDA-aware delivery', 'Privacy by design in every build.'], ['CAD pricing', 'Clear proposals in Canadian dollars.'], ['Bilingual support', 'English and French interfaces where needed.']],
    compliance: 'We design in line with PIPEDA and applicable provincial privacy laws, with Canadian data residency available on request.',
    focus: ['ai-agents', 'saas-development', 'cloud-devops'],
    faqs: [['Can data stay in Canada?', 'Yes, using Canadian cloud regions.'], ['Do you build French-language interfaces?', 'Yes, we support bilingual English and French experiences.']] },
  { slug: 'au', name: 'Australia', short: 'Australia', hreflang: 'en-AU', currency: 'AUD', timezone: 'Morning overlap with AEST',
    metaTitle: 'AI & Software Development Company, Australia',
    metaDescription: 'Norvexa helps Australian businesses with AI agents, company assistants and custom software, with AUD pricing, AEST overlap and Privacy Act-aware delivery.',
    h1: 'AI and software engineering for Australian businesses.',
    intro: ['Australian businesses are adopting AI to improve productivity across distributed teams. Norvexa builds AI agents, assistants and software that fit how Australian companies operate.', 'Our working hours provide a useful overlap with AEST, so progress continues while your team is offline.'],
    why: [['AEST overlap', 'Shared hours for collaboration, extended coverage for delivery.'], ['Privacy Act-aware delivery', 'Australian Privacy Principles built in.'], ['AUD pricing', 'Fixed-scope proposals in Australian dollars.'], ['Field-ready apps', 'Offline-first tools for regional and remote teams.']],
    compliance: 'We design in line with the Privacy Act 1988 and the Australian Privacy Principles, with Australian data residency available.',
    focus: ['ai-agents', 'mobile-app-development', 'company-assistant'],
    faqs: [['Can data be hosted in Australia?', 'Yes, using Sydney or Melbourne cloud regions.'], ['How does the time difference work?', 'We overlap with AEST mornings and continue delivery during your evening, so work progresses around the clock.']] },
  { slug: 'de', name: 'Germany & Europe', short: 'Germany', hreflang: 'en-DE', currency: 'EUR', timezone: 'Overlap with CET business hours',
    metaTitle: 'AI & Software Development Partner, Germany & EU',
    metaDescription: 'GDPR-first AI agents, digital transformation and custom software for companies in Germany and across Europe, with EUR pricing and EU data residency.',
    h1: 'GDPR-first AI and software for German and European companies.',
    intro: ['European companies want the productivity benefits of AI with strong data protection. Norvexa builds AI and software with privacy by design, EU data residency and clear documentation for works councils and data-protection officers.', 'We overlap with Central European business hours for workshops, reviews and support.'],
    why: [['GDPR-first architecture', 'Data minimisation, EU hosting and full documentation.'], ['EU AI Act awareness', 'Risk classification and transparency built into design.'], ['EUR pricing', 'Clear, fixed-scope proposals.'], ['Engineering rigour', 'Tested, documented, maintainable code.']],
    compliance: 'We design to GDPR requirements and track obligations under the EU AI Act, with hosting in EU cloud regions such as Frankfurt.',
    focus: ['ai-audit', 'custom-software-development', 'cloud-devops'],
    faqs: [['Is data hosted in the EU?', 'Yes, we deploy in EU regions such as Frankfurt by default for European clients.'], ['Do you support German-language interfaces?', 'Yes, we deliver multilingual products and AI assistants.']] },
];

/* ------------------------------------------------------------------ */
/* AI USE CASES BY DEPARTMENT                                           */
/* ------------------------------------------------------------------ */
export interface Dept { name: string; slug: string; areas: string[]; items: [string, string, string[]][] }
export const USE_CASES: Dept[] = [
  { name: 'Sales', slug: 'sales', areas: ['Renewals & account care', 'Pipeline & forecasting', 'Proposals & quotes', 'Lead capture & routing'], items: [
    ['RFP responses from past wins', 'Drafts answers to new RFPs using your previous winning bids, ready for a salesperson to refine.', ['CRM', 'SharePoint']],
    ['Discount approvals with margin view', 'Routes discount requests to the right approver with the margin impact calculated upfront.', ['Salesforce', 'Teams']],
    ['Lead enrichment & routing', 'Researches inbound leads, scores fit and assigns them to the right rep within minutes.', ['HubSpot', 'Gmail']],
    ['Renewal risk alerts', 'Combines usage, tickets and payments to flag accounts likely to churn.', ['CRM', 'Zendesk']],
    ['Quote generation', 'Builds accurate quotes from price lists and deal terms in seconds.', ['NetSuite', 'Word']],
    ['Pipeline commentary', 'Writes a weekly pipeline narrative for leadership with risks highlighted.', ['Salesforce', 'Power BI']]] },
  { name: 'Marketing', slug: 'marketing', areas: ['Reporting', 'Campaigns & ads', 'Content', 'Market & competitor research'], items: [
    ['Daily ad-spend checks', 'Compares spend against plan every morning and flags campaigns drifting off budget.', ['Google Ads', 'Meta Ads']],
    ['Competitor watch digest', 'A weekly briefing on competitor launches, pricing and messaging changes.', ['Web', 'Email']],
    ['SEO content briefs', 'Turns keyword research into structured briefs for writers.', ['Search Console', 'Notion']],
    ['Campaign performance reports', 'Pulls numbers across channels into one readable report.', ['GA4', 'LinkedIn Ads']],
    ['Localised copy variants', 'Adapts campaign copy for US, UK, UAE and EU audiences.', ['CMS', 'Drive']],
    ['Lead attribution', 'Connects UTM data to closed revenue so you know what works.', ['GA4', 'CRM']]] },
  { name: 'Customer service', slug: 'customer-service', areas: ['Incoming queries', 'Complaints & escalations', 'Help articles', 'Feedback analysis'], items: [
    ['Email triage', 'Classifies and prioritises incoming email, and drafts replies for agents to send.', ['Outlook', 'Freshdesk']],
    ['Sentiment monitoring', 'Detects frustrated customers early and escalates before issues grow.', ['Zendesk', 'Slack']],
    ['Help-article drafting', 'Turns resolved tickets into new knowledge-base articles.', ['Intercom', 'Confluence']],
    ['WhatsApp support agent', 'Answers order and account questions 24/7, handing off to humans when needed.', ['WhatsApp', 'CRM']],
    ['Feedback themes', 'Summarises survey and review comments into clear themes each month.', ['Qualtrics', 'Sheets']],
    ['Escalation summaries', 'Gives managers a one-paragraph history of every escalated case.', ['Zoho Desk', 'Teams']]] },
  { name: 'Operations', slug: 'operations', areas: ['Order processing', 'Inventory & purchasing', 'Vendor management', 'Quality & audits', 'Dispatch paperwork'], items: [
    ['Order entry from email & PDF', 'Reads purchase orders in any format and creates sales orders automatically.', ['SAP', 'Outlook']],
    ['Maintenance assistant', 'Technicians ask questions and get answers from manuals and past work orders.', ['MaintainX', 'Mobile']],
    ['Phone-based stock counts', 'Count inventory with a phone camera; discrepancies are logged instantly.', ['Mobile app', 'ERP']],
    ['Vendor performance scorecards', 'Tracks delivery times, quality and pricing for every supplier.', ['NetSuite', 'Power BI']],
    ['Dispatch documents', 'Generates invoices, packing lists and shipping documents from order data.', ['ERP', 'DocuSign']],
    ['Audit preparation', 'Collects evidence and checklists ahead of quality audits.', ['SharePoint', 'Excel']]] },
  { name: 'Finance', slug: 'finance', areas: ['Invoicing & collections', 'Supplier bills & payments', 'Month-end close', 'Tax & compliance', 'MIS & cash flow'], items: [
    ['13-week cash-flow forecast', 'Updates a rolling cash forecast from receivables, payables and bank data.', ['NetSuite', 'Excel']],
    ['Bank reconciliation', 'Matches bank lines to ledger entries and flags exceptions for review.', ['ERP', 'Bank feeds']],
    ['Collections follow-ups', 'Sends polite, personalised reminders based on ageing and customer history.', ['Zoho Books', 'Gmail']],
    ['Invoice-to-PO matching', 'Three-way matching of invoices, POs and receipts with variance alerts.', ['SAP', 'Outlook']],
    ['Monthly MIS pack', 'Produces management reports with variance commentary.', ['Power BI', 'Excel']],
    ['VAT / GST checks', 'Validates tax fields before filing and highlights mismatches.', ['ERP', 'Sheets']]] },
  { name: 'HR', slug: 'hr', areas: ['Hiring', 'Onboarding', 'Leave & attendance', 'Payroll questions', 'Policy questions'], items: [
    ['Resume screening with reasons', 'Shortlists candidates against the role and explains every decision.', ['Darwinbox', 'Outlook']],
    ['HR policy assistant', 'Employees get instant, accurate answers from your HR policies.', ['Teams', 'SharePoint']],
    ['Onboarding journeys', 'Coordinates accounts, documents and first-week tasks for new joiners.', ['Keka', 'Entra ID']],
    ['Interview scheduling', 'Finds slots across panels and sends invites automatically.', ['Outlook', 'Teams']],
    ['Performance review drafts', 'Summarises goals and feedback to speed up reviews.', ['SuccessFactors', 'Docs']],
    ['Payroll query handling', 'Answers payslip and deduction questions with the source shown.', ['HRMS', 'Chat']]] },
  { name: 'IT', slug: 'it', areas: ['Helpdesk', 'Joiners & leavers access', 'Asset tracking', 'Security checks'], items: [
    ['Phishing detection', 'Analyses reported emails and quarantines confirmed threats.', ['Defender', 'Outlook']],
    ['Helpdesk first response', 'Resolves password, access and how-to tickets without waiting.', ['ServiceNow', 'Teams']],
    ['Access for joiners & leavers', 'Provisions and removes access across systems on schedule.', ['Entra ID', 'Intune']],
    ['Outage status updates', 'Posts clear updates every hour during incidents.', ['Jira', 'Slack']],
    ['Asset inventory', 'Keeps laptops, licences and owners up to date.', ['Intune', 'Freshservice']],
    ['Security posture checks', 'Reviews settings weekly and reports gaps.', ['M365 admin', 'Defender']]] },
  { name: 'Legal & compliance', slug: 'legal', areas: ['Contract review', 'Regulatory tracking', 'Policy upkeep'], items: [
    ['Contract review against playbook', 'Highlights clauses that deviate from your standard positions.', ['Word', 'DocuSign']],
    ['Policy attestation chasing', 'Tracks who has acknowledged policies and sends reminders.', ['Teams', 'SharePoint']],
    ['Regulatory change tracker', 'Monitors regulators in your markets and summarises what changed.', ['Web', 'Email']],
    ['NDA turnaround', 'Reviews incoming NDAs and suggests edits in minutes.', ['Outlook', 'Word']],
    ['Obligation register', 'Extracts renewal dates and obligations from signed contracts.', ['DocuSign', 'Sheets']],
    ['GDPR request handling', 'Organises data-subject requests and deadlines.', ['Ticketing', 'CRM']]] },
  { name: 'Leadership', slug: 'leadership', areas: ['Meeting follow-ups', 'Management reports', 'Board & investor packs'], items: [
    ['AI meeting minutes', 'Captures decisions and action items, and sends follow-ups to owners.', ['Teams', 'Google Meet']],
    ['Business review commentary', 'Explains why numbers moved, not just what they are.', ['Power BI', 'Excel']],
    ['Board pack assembly', 'Gathers inputs from each function into one consistent pack.', ['SharePoint', 'Word']],
    ['Daily leadership brief', 'A morning summary of sales, cash, operations and risks.', ['Email', 'Dashboards']],
    ['Strategy research', 'Market sizing and competitor analysis on demand.', ['Web', 'Docs']],
    ['OKR tracking', 'Keeps goals and progress up to date across teams.', ['Asana', 'Planner']]] },
];

/* ------------------------------------------------------------------ */
/* TECHNOLOGY                                                           */
/* ------------------------------------------------------------------ */
export type Tech = [name: string, color: string, abbr: string];
export const TECH: Record<string, Tech[]> = {
  'AI & ML': [['OpenAI', '#10a37f', 'AI'], ['Claude', '#d97757', 'CL'], ['Gemini', '#4285f4', 'GE'], ['Llama', '#0668e1', 'LL'], ['Mistral', '#fa520f', 'MI'], ['LangChain', '#1c3c3c', 'LC'], ['PyTorch', '#ee4c2c', 'PT'], ['TensorFlow', '#ff6f00', 'TF'], ['Hugging Face', '#ffb000', 'HF'], ['Pinecone', '#111111', 'PC'], ['Python', '#3776ab', 'Py'], ['scikit-learn', '#f89939', 'SK']],
  Frontend: [['Next.js', '#111111', 'N'], ['React', '#149eca', 'Re'], ['TypeScript', '#3178c6', 'TS'], ['Tailwind CSS', '#06b6d4', 'TW'], ['Framer Motion', '#e0218a', 'FM'], ['Vue.js', '#41b883', 'Vu'], ['Angular', '#dd0031', 'Ng'], ['Three.js', '#222222', '3D']],
  Backend: [['Node.js', '#3c873a', 'No'], ['Python', '#3776ab', 'Py'], ['Java', '#e76f00', 'Ja'], ['.NET', '#512bd4', '.N'], ['Go', '#00add8', 'Go'], ['GraphQL', '#e10098', 'GQ'], ['NestJS', '#e0234e', 'Ne'], ['Django', '#092e20', 'Dj']],
  Mobile: [['React Native', '#149eca', 'RN'], ['Flutter', '#02569b', 'Fl'], ['Swift', '#f05138', 'Sw'], ['Kotlin', '#7f52ff', 'Kt'], ['Expo', '#111111', 'Ex'], ['Firebase', '#ffa000', 'Fb']],
  'Cloud & DevOps': [['AWS', '#ff9900', 'AW'], ['Azure', '#0078d4', 'Az'], ['Google Cloud', '#4285f4', 'GC'], ['Vercel', '#111111', '▲'], ['Cloudflare', '#f38020', 'CF'], ['Docker', '#2496ed', 'Dk'], ['Kubernetes', '#326ce5', 'K8'], ['Terraform', '#7b42bc', 'Tf'], ['GitHub Actions', '#24292e', 'GA']],
  'Data & CMS': [['PostgreSQL', '#336791', 'PG'], ['MongoDB', '#47a248', 'MD'], ['Redis', '#dc382d', 'Rd'], ['Sanity', '#f03e2f', 'Sa'], ['Strapi', '#4945ff', 'St'], ['Snowflake', '#29b5e8', 'Sf'], ['Power BI', '#f2c811', 'BI'], ['Supabase', '#3ecf8e', 'SB']],
};
export const APPS: Tech[] = [['Salesforce', '#00a1e0', 'SF'], ['HubSpot', '#ff7a59', 'HS'], ['SAP S/4HANA', '#0a6ed1', 'SAP'], ['NetSuite', '#1b3b6f', 'NS'], ['Dynamics 365', '#002050', 'D3'], ['Microsoft Teams', '#5059c9', 'MT'], ['Slack', '#4a154b', 'SL'], ['Outlook', '#0078d4', 'OL'], ['Gmail', '#ea4335', 'GM'], ['Google Drive', '#1fa463', 'GD'], ['SharePoint', '#038387', 'SP'], ['Notion', '#111111', 'NO'], ['Jira', '#0052cc', 'JI'], ['Zendesk', '#03363d', 'ZD'], ['Freshdesk', '#25c16f', 'FD'], ['Zoho', '#e42527', 'ZO'], ['Shopify', '#5e8e3e', 'SH'], ['Power BI', '#f2c811', 'BI'], ['ServiceNow', '#62d84e', 'SN'], ['DocuSign', '#ffcc22', 'DS'], ['WhatsApp Business', '#25d366', 'WA'], ['Odoo', '#714b67', 'OD']];
export const MODELS: Tech[] = [['OpenAI GPT', '#10a37f', 'AI'], ['Anthropic Claude', '#d97757', 'CL'], ['Google Gemini', '#4285f4', 'GE'], ['Meta Llama', '#0668e1', 'LL'], ['Mistral', '#fa520f', 'MI'], ['Next.js', '#111111', 'N'], ['React', '#149eca', 'Re'], ['Node.js', '#3c873a', 'No'], ['Python', '#3776ab', 'Py'], ['TypeScript', '#3178c6', 'TS'], ['AWS', '#ff9900', 'AW'], ['Azure', '#0078d4', 'Az'], ['Google Cloud', '#4285f4', 'GC'], ['Kubernetes', '#326ce5', 'K8'], ['PostgreSQL', '#336791', 'PG'], ['Flutter', '#02569b', 'Fl']];
export const LIGHT_BG = ['#f2c811', '#ffcc22', '#62d84e', '#ffb000', '#ffa000'];

/* ------------------------------------------------------------------ */
/* PEOPLE: replace placeholders with confirmed leadership details      */
/* ------------------------------------------------------------------ */
export const PEOPLE: { name: string; role: string; bio: string; linkedin?: string; photo?: string }[] = [
  { name: 'Bijo C.B', role: 'CEO', bio: 'Leads company strategy, sales and overall business operations.', photo: '/team/bijo-cb.jpg' },
  { name: 'Jithesh Meethal', role: 'COO', bio: 'Drives operations, sales and marketing, and international growth.', photo: '/team/jithesh-meethal.jpg' },
  { name: 'Roopjith VN', role: 'CTO & CFO', bio: 'Leads technology, product engineering and AI, and oversees finance.', photo: '/team/roopjith-vn.jpg' },
  { name: 'Irwin Kudita', role: 'Director, UK', bio: 'Leads UK operations, client partnerships and business development.', photo: '/team/irwin-kudita.jpg' },
  { name: 'Drissia Ahmed Abdulqadar Laashir', role: 'Director, Middle East & Africa', bio: 'Leads growth and partnerships across the Middle East and Africa.', photo: '/team/drissia-laashir.jpg' },
  { name: 'Sreejith Kunjachan', role: 'Director, UK', bio: 'Drives client engagement, delivery and growth in the UK.', photo: '/team/sreejith-kunjachan.jpg' },
];

/* ------------------------------------------------------------------ */
/* OFFICES (global presence)                                            */
/* ------------------------------------------------------------------ */
export interface Office { label: string; company: string; address: string; phone?: string; email?: string; country: string; region?: string; accent?: boolean }
export const OFFICES: Office[] = [
  { label: 'India · Headquarters', company: 'Eurolink Technologies Pvt Ltd', address: 'TBC, 8th Floor, Vismaya, Carnival Infopark Phase I, Infopark Rd, Kakkanad, Kochi, Kerala 682042', phone: '+91 96055 98391', email: 'hello@eurolinktechnologies.com', country: 'IN' },
  { label: 'United Kingdom', company: 'Eurolink Technologies', address: 'Mansfield Road, NG5 2EL, Nottinghamshire, UK', phone: '+44 7384 031625', email: 'info@eurolinktechnologies.co.uk', country: 'GB', region: 'uk', accent: true },
  { label: 'India · Group company', company: 'Norvexa Technologies Pvt Ltd', address: 'TBC, 8th Floor, Vismaya, Infopark Phase I, Infopark Rd, Kochi, Kerala 682042', phone: '+91 62383 83735', email: 'info@norvexatechnologies.com', country: 'IN', region: 'in' },
  { label: 'Finland', company: 'STO Digital', address: 'Martinkyläntie 43, 01720 Vantaa · Business ID 3617994-6 · Unit of Norvexa Technologies', phone: '+358 44 9308234', country: 'FI', region: 'de' },
  { label: 'USA · Branch office (Global)', company: 'STO Digital', address: 'Innovation Center, Silicon Valley, California, USA', phone: '+358 44 9308234', country: 'US', region: 'us', accent: true },
  { label: 'UAE · Dubai', company: 'Toco Plus Marketing Consultancies', address: 'M-01, Al Riggah Building, Abu Baker Al Siddique Rd, near Clock Tower, Dubai', phone: '+971 56 393 1963', email: 'hr@tocoads.com', country: 'AE', region: 'ae' },
];

/* ------------------------------------------------------------------ */
/* HOME FAQ                                                             */
/* ------------------------------------------------------------------ */
export const HOME_FAQS: Pair[] = [
  ['What does Norvexa actually do?', 'We help companies put AI and modern software to work: AI agents, a company-wide AI assistant, custom AI apps, plus full-stack web, mobile, SaaS, e-commerce and cloud engineering.'],
  ['Where should we start with AI?', 'With the AI audit. In two to four weeks we map your processes and systems, score opportunities and hand over a prioritised roadmap with a business case.'],
  ['Will AI replace our team?', 'No. Our agents take on repetitive work so your people can focus on judgement, customers and growth. Humans approve every decision that matters.'],
  ['Is our data safe?', 'Yes. Solutions run on your own cloud or servers, use role-based access, log every action, and use enterprise AI endpoints that do not train on your data.'],
  ['Which AI models do you use?', 'We are model-agnostic and use GPT, Claude, Gemini, Llama, Mistral and others, choosing the providers your company approves for each job.'],
  ['Do we need to replace our existing software?', 'Rarely. We integrate with the CRM, ERP, email, chat and document tools you already use.'],
  ['How long does a typical project take?', 'An AI audit takes 2 to 4 weeks. A first AI agent or a corporate website typically takes 7 to 10 weeks. Larger platforms are delivered in phases.'],
  ['Who owns the code and IP?', 'You do: source code, prompts, configurations and data. No lock-in.'],
  ['Do you work with clients outside India?', 'Yes. We serve clients in the USA, UK, UAE, Canada, Australia, Germany and across Europe, with time-zone-aligned communication.'],
];
