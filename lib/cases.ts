export type CaseStudy = {
  slug: string;
  client: string;
  site?: string;
  kind: 'web' | 'app';
  industry: string;
  location: string;
  summary: string;
  challenge: string;
  built: string[];
  tags: string[];
  platforms?: string;
  services: string[];
};

export const CASES: CaseStudy[] = [
  {
    slug: 'aero-world', client: 'Aero World', site: 'aeroworld.org', kind: 'web', industry: 'Aerospace & Aviation', location: 'Global · Middle East',
    summary: 'A global aerospace parts marketplace with part-number search and market intelligence.',
    challenge: 'Aero World needed to come across as a serious global B2B aerospace marketplace, not a small trading site. Buyers had to be able to search parts and repair services straight from the homepage, and buyers and sellers each needed their own clear value story.',
    built: ['Full-screen aircraft hero with an integrated search by part number, description or CAGE code', 'Service pillars for parts trading, MRO, market intelligence, supply chain and AOG support', 'Separate buyer and seller sections, with commitments on secure payment, export compliance and refunds', 'Marketplace, surplus-inventory and shipping sections with Request Trial and login actions', 'A responsive dark glass interface with an animated services ticker'],
    tags: ['UI/UX', 'Web development', 'Marketplace UX', 'SEO'], services: ['web-development', 'ui-ux-design'],
  },
  {
    slug: 'beehive-trading', client: 'Beehive Trading', site: 'beehive-trading.com', kind: 'web', industry: 'Survey & Measurement Equipment', location: 'Abu Dhabi, UAE',
    summary: 'A product-led website for a land-survey and measurement equipment supplier.',
    challenge: 'Beehive Trading needed to be seen as a trusted UAE supplier of measurement and control equipment, show its products with availability, and make it easy to enquire, above all on WhatsApp.',
    built: ['Black-and-yellow split-screen hero with an animated product reveal', 'Category-based product catalogue showing availability, with progressive browsing', 'Services ticker for supply, rental, calibration and topographical and underground surveys', 'About content optimised for local search in Abu Dhabi and the UAE', 'Floating WhatsApp button and a simple contact flow'],
    tags: ['Web design', 'Product catalogue', 'Local SEO'], services: ['web-development', 'ui-ux-design'],
  },
  {
    slug: 'salt-wellness', client: 'SALT Wellness', site: 'saltwellness.ae', kind: 'web', industry: 'Wellness & Spa', location: 'Abu Dhabi & Dubai, UAE',
    summary: 'A premium site for at-home and in-office massage and recovery therapies.',
    challenge: 'A wellness brand serving homes and offices across Abu Dhabi and Dubai wanted a calm, premium presence that showcased its therapies and packages, drove bookings and captured corporate wellness enquiries.',
    built: ['Serif-led design with a full-screen hero slider and therapy thumbnails', 'Therapy catalogue (Swedish, deep tissue, sports, traditional and red-light) with detail pages', 'Packages, corporate wellness, blog and contact sections', 'Booking call to action, search, account access, WhatsApp and click-to-call in the header', 'Brand storytelling around relaxation, rejuvenation and recovery'],
    tags: ['Brand-led web design', 'Booking journey', 'Content'], services: ['web-development', 'ui-ux-design'],
  },
  {
    slug: 'al-khaleej-steel-builders', client: 'Al Khaleej Steel Builders', site: 'khaleejsteelbuilders.com', kind: 'web', industry: 'Steel Construction & PEB', location: 'Sultanate of Oman',
    summary: 'A corporate website for a pre-engineered building and steel structures company.',
    challenge: 'An Omani pre-engineered building company needed a corporate site that reflected two decades of steel construction and its parent group, and that generated quote requests from industrial, commercial and government clients across Oman.',
    built: ['Hero banner with an experience badge and brand-led messaging', 'Top bar with facility locations, phone, email and WhatsApp', 'Solutions, vision and mission, certifications and projects sections', 'Scrolling solutions ticker with a prominent request-a-quote action', 'Corporate red-and-navy design system aligned to the brand'],
    tags: ['Corporate website', 'UI/UX', 'Lead generation'], services: ['web-development', 'ui-ux-design'],
  },
  {
    slug: 'ecoglow', client: 'EcoGlow', site: 'ecoglow.ae', kind: 'web', industry: 'Cleaning Services', location: 'Dubai, UAE',
    summary: 'A luxury, eco-conscious cleaning brand website.',
    challenge: 'EcoGlow wanted an online presence that felt like a luxury, eco-friendly brand rather than a typical cleaning company, with residential and commercial services, packages, FAQs and booking reachable from every page.',
    built: ['Boutique hero slider with thumbnails for deep cleaning, upholstery, curtains and carpets', 'Brand story covering vision, mission and values', 'Service and package pages for homes and businesses', 'Book Your Service header button with WhatsApp and click-to-call', 'Soft, premium visual style with smooth page transitions'],
    tags: ['Web design', 'Brand positioning', 'Booking journey'], services: ['web-development', 'ui-ux-design'],
  },
  {
    slug: 'cadstar-design', client: 'Cadstar Design', site: 'cadstardesign.com', kind: 'web', industry: 'Engineering & Surveying', location: 'UAE',
    summary: 'A service-rich site for a surveying, BIM and mapping consultancy.',
    challenge: 'A UAE land-surveying and BIM consultancy with more than 18 years of experience needed its full service range explained clearly, and a site that ranked for UAE engineering survey and BIM searches and turned visitors into enquiries.',
    built: ['SEO-structured site targeting UAE engineering surveying and BIM searches', 'Mega-menu covering 3D scanning and BIM, survey and drafting services', 'A dedicated page for each service with a clear explanation and call to action', 'Header contact strip with email, phone and WhatsApp, plus a floating WhatsApp button', 'Video-style hero and experience counters to build trust'],
    tags: ['Web development', 'SEO', 'Service pages'], services: ['web-development'],
  },
  {
    slug: 'eduwings-kuwait', client: 'Eduwings Kuwait', site: 'eduwingskuwait.com', kind: 'web', industry: 'Education Consultancy', location: 'Kuwait',
    summary: 'A lead-generation site for distance and online degrees for Indians in Kuwait.',
    challenge: 'Eduwings needed qualified leads from Indians in Kuwait looking for recognised distance degrees, and visitors needed help choosing a programme plus answers on validity, attestation, exams and fees.',
    built: ['Conversion-focused hero with a programme shortlist across UG, PG, PG diploma and professional courses', 'Free consultation form capturing WhatsApp number, area, qualification and preferred university', 'Programme finder with category filters and a guided help-me-choose option', 'Partner-university pages, blog guides and a detailed FAQ', 'Floating WhatsApp, call and live-chat buttons on every page'],
    tags: ['Lead generation', 'Web development', 'Content & SEO'], services: ['web-development'],
  },
  {
    slug: 'vijo-fitness-academy', client: 'Vijo Fitness Academy', site: 'vijofitnessacademy.com', kind: 'web', industry: 'Fitness Education', location: 'Dubai, UAE & India',
    summary: 'A dual-country gateway website for a fitness academy.',
    challenge: 'Vijo Fitness Academy needed one brand site that served both India and Dubai, put each country’s accreditations up front and sent visitors to the right local experience.',
    built: ['Split-screen landing page with separate India and Dubai panels', 'Country-specific accreditation badges on each panel', 'Strong brand mark with career-focused messaging', 'Routing buttons to the dedicated country sites', 'Fully responsive, image-led design'],
    tags: ['UX strategy', 'Web design', 'Multi-country setup'], services: ['ui-ux-design', 'web-development'],
  },
  {
    slug: 'sohar-services', client: 'Sohar Services', site: 'soharservice.com', kind: 'web', industry: 'AC Cleaning & Maintenance', location: 'Sohar, Oman',
    summary: 'A fast, call-driven local-service website.',
    challenge: 'Sohar Services wanted to win local AC cleaning and maintenance jobs from Google search, with customers able to call or WhatsApp immediately.',
    built: ['Local-SEO landing page targeting AC cleaning and maintenance in Sohar', 'Call and WhatsApp buttons in the header, the hero and a floating button on every page', 'Why-choose-us section and service cards for split AC, window AC and maintenance', 'Local FAQ on servicing frequency in Sohar’s heat and dust', 'Lightweight, fast-loading, mobile-first build'],
    tags: ['Local SEO', 'Landing page', 'Mobile-first'], services: ['web-development'],
  },
  {
    slug: 'vertex-controls', client: 'Vertex Controls', site: 'vertex-controls.com', kind: 'web', industry: 'Industrial Automation', location: 'Dubai, UAE',
    summary: 'A high-tech site for an electromechanical and automation engineering firm.',
    challenge: 'Vertex Controls needed to position itself as a leading electromechanical and automation firm in the UAE, explain PLC/SCADA, MEP and IoT services to technical buyers, and drive quote requests and downloads.',
    built: ['Dark, futuristic interface with an animated 3D wireframe sphere and floating data cards', 'Trust strip with counters for projects, clients, UAE coverage and years of expertise', 'Mega-menu organising services, products, projects and downloads', 'Request a Quote action plus floating call and WhatsApp buttons', 'SEO-focused titles for electromechanical and industrial automation in Dubai'],
    tags: ['UI/UX', '3D & motion', 'Web development'], services: ['ui-ux-design', 'web-development'],
  },
  {
    slug: 'neon-minds-technical-trading', client: 'Neon Minds Technical Trading', site: 'neonmindstrading.com', kind: 'web', industry: 'Building Materials & Upholstery', location: 'UAE',
    summary: 'A corporate trading site for premium upholstery and building materials.',
    challenge: 'Neon Minds needed credibility as the link between global manufacturers and UAE projects, a showcase for its product ranges, and enquiries from contractors and interior firms.',
    built: ['Hero with a UAE warehouse-and-skyline scene and the brand front and centre', 'Mission, vision and values explaining why to choose Neon Minds', 'Product range pages for luxury curtains, upholstery fabrics and construction materials', 'Get in Touch header action and a dedicated contact page', 'Green-accented corporate design system'],
    tags: ['Corporate website', 'Product showcase', 'Web design'], services: ['web-development', 'ui-ux-design'],
  },
  {
    slug: 'almoued-travel', client: 'Almoued Travel', site: 'almouedtravel.com', kind: 'web', industry: 'Travel & Tourism', location: 'GCC & India',
    summary: 'A travel agency site for destinations, packages and trip booking.',
    challenge: 'Almoued Travel needed a site that inspires travellers, presents the business as a full travel-management company and turns interest into bookings and enquiries.',
    built: ['Panoramic hero with a gradient headline and prominent booking actions', 'Sections for destinations, services, packages and the core team', 'Customer review count and an about section to build trust', 'Floating WhatsApp button and a header contact button', 'Bilingual-ready branding, including an Arabic logo lockup'],
    tags: ['Web design', 'Travel UX', 'Content'], services: ['web-development', 'ui-ux-design'],
  },
  {
    slug: 'gh-physiocare', client: 'GH PhysioCare', site: 'ghphysiocare.co.uk', kind: 'web', industry: 'Physiotherapy', location: 'Nottingham, UK',
    summary: 'A conversion-focused clinic site for Nottingham and the Midlands.',
    challenge: 'GH PhysioCare wanted more physiotherapy bookings in Nottingham and the Midlands, which meant building trust quickly, ranking locally and making booking or WhatsApp contact a single tap.',
    built: ['Locally optimised hero for Nottingham physiotherapy with Book Now and WhatsApp actions', 'Trust badges for ratings, client numbers and years of experience', 'Services, gallery, price list, careers, blog and community pages', 'Clinic location section and a sticky booking widget', 'Call Now and Book Now fixed in the header'],
    tags: ['Web design', 'Local SEO', 'Booking journey'], services: ['web-development'],
  },
  {
    slug: 'q-care-solutions', client: 'Q Care Solutions', site: 'qcares.co.uk', kind: 'web', industry: 'Healthcare Staffing', location: 'United Kingdom',
    summary: 'A two-sided recruitment website for a healthcare staffing agency.',
    challenge: 'A UK healthcare staffing agency needed to win contracts from care providers while attracting nurses, HCAs and support workers, and to make its 24/7 availability and DBS-checked staff obvious.',
    built: ['Two clear paths: providers find staff, candidates join the team', 'Live-status badge and ticker showing open roles and 24/7 emergency cover', 'Why-choose-us section explaining temporary and permanent staffing', 'Service pages for registered nurses, HCAs, physiotherapy and support workers', 'Clean healthcare design with gradient branding'],
    tags: ['Web design', 'Recruitment UX', 'Web development'], services: ['web-development', 'ui-ux-design'],
  },
  {
    slug: 'assist-plus-care', client: 'Assist Plus Care', site: 'assistpluscare.co.uk', kind: 'web', industry: 'Healthcare Recruitment', location: 'UK & Ireland',
    summary: 'A trust-building site for a care recruitment consultancy supplying nurses and carers.',
    challenge: 'Assist Plus Care needed care homes to be able to request vetted staff quickly, including emergency cover, understand options from registered nurses to live-in carers, and request callbacks or a brochure.',
    built: ['Hero with staff-request and services actions', 'Top bar with phone, email, callback and brochure requests', 'Scrolling staffing-solutions bar and a 24/7 emergency staffing badge', 'Purpose, mission and vision written for care-home decision makers', 'Request-a-quote button in the header'],
    tags: ['Web design', 'Lead capture', 'Web development'], services: ['web-development'],
  },
  {
    slug: 'verotech-solutions', client: 'Verotech Solutions', site: 'verotechsolutions.co.uk', kind: 'web', industry: 'Software & IT', location: 'United Kingdom',
    summary: 'A modern dark-mode site for a software and digital transformation company.',
    challenge: 'A UK software engineering firm needed a site that would appeal to enterprise buyers as a premium partner and communicate precision, security and performance visually.',
    built: ['Animated dark hero with floating code panels and a cloud–data–API–security node diagram', 'Capabilities ticker and a storytelling section', 'Services, work, features, testimonials and about sections', 'Icon-led value grid for agile delivery, security, cloud and performance', 'Get Started as the primary call to action'],
    tags: ['UI/UX', 'Motion design', 'Web development'], services: ['ui-ux-design', 'web-development'],
  },
  {
    slug: 'spot-it-now', client: 'Spot It Now', site: 'spotitnow.co.uk', kind: 'web', industry: 'Business Directory', location: 'United Kingdom',
    summary: 'A curated local business directory with listings, categories and offers.',
    challenge: 'The client needed a directory where people find trusted local businesses by city and category, businesses manage their own listings, and premium placements and offers can be sold.',
    built: ['Directory platform with a region selector, category browsing and an Offer Zone', 'Listing pages with verification badges, ratings and location details', 'Featured listings and an Add Your Listing journey', 'User accounts and self-service listing management', 'Cookie consent and privacy-policy compliance'],
    tags: ['Web application', 'Directory platform', 'UI/UX'], services: ['custom-software-development', 'web-development'],
  },
  {
    slug: 'media-people', client: 'Media People', site: 'mediapeople.pro', kind: 'web', industry: 'Events & AV Production', location: 'United Kingdom',
    summary: 'A high-energy site for an audio, lighting and LED-screen events company.',
    challenge: 'An events production company needed to showcase its services for concerts, conferences and award shows, display past work and make it easy for organisers to get in touch.',
    built: ['Full-screen stage-lighting hero with a bold headline', 'Service sections for audio, lighting, LED screens, live streaming, video and photography', 'Event gallery and an about page', 'Header contact details and a WhatsApp chat widget', 'Dark, concert-inspired visual style'],
    tags: ['Web design', 'Gallery', 'WhatsApp integration'], services: ['web-development', 'ui-ux-design'],
  },
  {
    slug: 'pt-agri-fresh-indonesia', client: 'PT Agri Fresh Indonesia', site: 'ptagrifreshindonesia.com', kind: 'web', industry: 'Spice Export', location: 'Indonesia',
    summary: 'A B2B export site for a spice sourcing, processing and export company.',
    challenge: 'A spice exporter needed to attract international B2B buyers, demonstrate its sourcing, quality standards and export capability, and generate quote requests from importers.',
    built: ['Warm hero positioning the company as a global spice exporter, with two clear actions', 'Export counters plus sections on sourcing, fair trade and quality standards', 'Product, service, gallery and contact pages with a quote form', 'Heritage and processing content to build buyer trust', 'Elegant serif typography and an earthy palette'],
    tags: ['Web design', 'B2B lead generation', 'Content'], services: ['web-development'],
  },
  {
    slug: 'confident-health-care-services', client: 'Confident Health Care Services', site: 'confidenthealthcareservices.com.au', kind: 'web', industry: 'NDIS Disability Support', location: 'Australia',
    summary: 'An accessible site for an NDIS-registered disability support provider.',
    challenge: 'An NDIS-registered provider needed a website that participants, families and support coordinators could use comfortably, and that made it simple to ask about support.',
    built: ['Accessibility-first page structure, contrast and navigation', 'Clear explanations of the support services offered', 'Enquiry and referral forms', 'Responsive design that works on any device'],
    tags: ['Web design', 'Accessibility', 'Forms'], services: ['web-development', 'ui-ux-design'],
  },
  {
    slug: 'voltron-fx', client: 'Voltron FX', site: 'voltronfx.com', kind: 'web', industry: 'Forex & CFD Brokerage', location: 'Kyrgyzstan',
    summary: 'A trading-platform site with account types and live market quotes.',
    challenge: 'A broker needed to explain its trading accounts and conditions clearly to new traders, show live prices so the business felt active and credible, and drive account sign-ups.',
    built: ['Landing hero with a phone app preview over a global map', 'Live forex ticker for the major currency pairs', 'Account comparison cards covering MT5, base currencies, leverage and spreads', 'Open Account and Contact actions', 'Trading, markets and help sections in the main navigation'],
    tags: ['Web design', 'Fintech UX', 'Live data widgets'], services: ['web-development', 'ui-ux-design'],
  },
  {
    slug: 'thakkalies', client: 'Thakkalies', kind: 'app', industry: 'Grocery & Food E-commerce', location: 'Kerala, India', platforms: 'Android & iOS · cross-platform (Flutter)',
    summary: 'A two-app marketplace for Kerala spices and foods: a customer app and a vendor app.',
    challenge: 'Thakkalies needed a marketplace where shoppers can buy authentic Kerala spices and foods and independent vendors can run their own stores.',
    built: ['Customer app for browsing, ordering and tracking', 'Separate vendor app for managing products and orders', 'Shared marketplace backend connecting both sides', 'Android and iOS from one cross-platform codebase'],
    tags: ['Marketplace', 'Vendor app', 'Mobile app'], services: ['mobile-app-development', 'ecommerce-development'],
  },
  {
    slug: 'bumperpick', client: 'Bumperpick', kind: 'app', industry: 'Local Offers & Events', location: 'Thrissur, India', platforms: 'Android & iOS · geo-location',
    summary: 'A city-discovery platform for offers, events and contests, with customer and business apps.',
    challenge: 'Bumperpick needed a way for people in the city to discover nearby offers, events and contests, and for local businesses to publish and manage them.',
    built: ['Customer app for discovering offers, events and contests', 'Business app for publishing and managing promotions', 'Location-aware discovery of what is nearby', 'Two-sided platform on Android and iOS'],
    tags: ['Mobile app', 'Two-sided platform', 'Geo-location'], services: ['mobile-app-development'],
  },
  {
    slug: 'panjamadam-astrology', client: 'Panjamadam Astrology', kind: 'app', industry: 'Astrology & Spiritual Services', location: 'Kerala, India', platforms: 'Android',
    summary: 'A multilingual Vedic astrology app with daily Panchangam, horoscopes and live consultations.',
    challenge: 'Panjamadam wanted to bring its astrology services to users in their own language, with daily content and the ability to book a consultation.',
    built: ['Multilingual interface', 'Daily Panchangam and horoscopes', 'Live consultation booking', 'Android app'],
    tags: ['Multilingual UI', 'Consultation booking', 'Mobile app'], services: ['mobile-app-development'],
  },
  {
    slug: 'edutechy24', client: 'Edutechy24', kind: 'app', industry: 'Online Learning (LMS)', location: 'India', platforms: 'Android',
    summary: 'An all-in-one learning app with course bundles, video lessons, wishlist and progress tracking.',
    challenge: 'Edutechy24 needed a single app where learners can buy course bundles, watch lessons and keep track of their progress.',
    built: ['Course bundles and catalogue', 'Video lessons', 'Wishlist', 'Learner progress tracking'],
    tags: ['LMS app', 'Video learning', 'Mobile app'], services: ['mobile-app-development'],
  },
  {
    slug: 'topaz-academy', client: 'Topaz Academy', kind: 'app', industry: 'Education & Training', location: 'Kochi, India', platforms: 'Android',
    summary: 'A course app for degree, diploma, IELTS/OET and NEET programmes.',
    challenge: 'Topaz Academy needed a branded learning app to deliver its degree, diploma, language-test and entrance-exam programmes.',
    built: ['Course catalogue for degree, diploma, IELTS/OET and NEET programmes', 'Learning content inside the app', 'White-label LMS platform under the Topaz brand', 'Android app'],
    tags: ['LMS app', 'White-label platform', 'Mobile app'], services: ['mobile-app-development'],
  },
  {
    slug: 'freshbe', client: 'Freshbe', kind: 'app', industry: 'Fish & Seafood Delivery', location: 'India', platforms: 'Android',
    summary: 'An ordering app with categories, featured products and doorstep delivery.',
    challenge: 'Freshbe needed an easy way for customers to order fresh fish and seafood for delivery to their door.',
    built: ['Product categories and featured products', 'Simple ordering flow', 'Doorstep delivery', 'Clean, food-focused UI/UX'],
    tags: ['E-commerce app', 'UI/UX', 'Mobile app'], services: ['mobile-app-development', 'ecommerce-development'],
  },
  {
    slug: 'thaninadan', client: 'ThaniNadan', kind: 'app', industry: 'Meat, Fish & Grocery Delivery', location: 'United Kingdom', platforms: 'Android · WooCommerce',
    summary: 'A shopping app for Kerala-style fresh meat, fish and eggs, plus an admin app for store staff.',
    challenge: 'ThaniNadan needed a mobile shopping experience for its UK customers and an app its store team could use to manage orders, both running on its WooCommerce store.',
    built: ['Customer shopping app for meat, fish and eggs', 'Admin app for store staff', 'Integration with the existing WooCommerce store', 'Android apps'],
    tags: ['E-commerce app', 'Admin app', 'WooCommerce'], services: ['mobile-app-development', 'ecommerce-development'],
  },
  {
    slug: 'inject-english-quiz', client: 'Inject English Quiz', kind: 'app', industry: 'EdTech & Gamified Learning', location: 'India', platforms: 'Android',
    summary: 'A gamified vocabulary app with multiple quiz modes, themes and progress tracking.',
    challenge: 'Inject English wanted to make vocabulary practice engaging enough that learners keep coming back.',
    built: ['Multiple quiz modes', 'Selectable themes', 'Progress tracking', 'Gamified UI/UX'],
    tags: ['Gamified app', 'UI/UX', 'Mobile app'], services: ['mobile-app-development', 'ui-ux-design'],
  },
];

export const findCase = (slug: string) => CASES.find((c) => c.slug === slug);
