// Centralized site content — sourced from the existing NorthByte Labs website.
import {
  Code2, Wand2, Wrench, Search, BarChart3, PenTool,
  UtensilsCrossed, Boxes,
} from 'lucide-react';

export const CONTACT = {
  brand: 'NorthByte Labs',
  email: 'hello@northbytelabs.in',
  phoneDisplay: '+91 96438 76061',
  phoneTel: '+919643876061',
  whatsapp: '919643876061',
  location: 'India · Working worldwide',
  tagline: 'Building better digital experiences.',
  priceHook: 'Websites starting at just ₹3,999',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  { icon: Code2, title: 'Website Development', desc: 'Modern, responsive and high-performance websites built around your business and customers.', accent: 'blue' },
  { icon: Wand2, title: 'Website Redesign', desc: 'Transform outdated websites into modern digital experiences with a fresh visual point of view.', accent: 'violet' },
  { icon: Wrench, title: 'Website Maintenance', desc: 'Content updates, bug fixes, security checks and practical ongoing website support.', accent: 'cyan' },
  { icon: Search, title: 'SEO & Google Ranking', desc: 'Technical SEO, on-page content and local optimisation to attract more organic traffic.', accent: 'blue' },
  { icon: BarChart3, title: 'Analytics Dashboards', desc: 'Simple dashboards that turn website traffic and leads into actionable business decisions.', accent: 'cyan' },
  { icon: PenTool, title: 'Logo & Brand Identity', desc: 'Simple, ownable identities so every first impression counts — consistent and memorable.', accent: 'violet' },
  { icon: UtensilsCrossed, title: 'Menu Design', desc: 'Appetising digital and printable menus for restaurants — print, QR, takeaway and screens.', accent: 'blue' },
  { icon: Boxes, title: 'Digital Solutions', desc: 'Custom solutions designed around your specific business needs and growth goals.', accent: 'violet' },
];

export const SHOWCASE_FEATURES = [
  'Fast', 'Responsive', 'SEO Ready', 'Mobile First', 'Secure', 'Conversion Focused',
];

export const SEO_METRICS = [
  { value: 148, suffix: '%', prefix: '+', label: 'Organic Traffic' },
  { value: 72, suffix: '%', prefix: '+', label: 'Search Visibility' },
  { value: 54, suffix: '%', prefix: '+', label: 'Qualified Leads' },
  { value: 3, suffix: '', prefix: 'Top ', label: 'Google Rankings' },
];

export const WHY_CHOOSE = [
  { no: '01', title: 'Modern Design', desc: 'Distinctive, current visual systems that feel premium — never generic.' },
  { no: '02', title: 'Mobile First', desc: 'Designed for the smallest screen first, so it feels great everywhere.' },
  { no: '03', title: 'SEO Ready', desc: 'Search-friendly foundations baked in from the very first build.' },
  { no: '04', title: 'Performance Focused', desc: 'Fast-loading, GPU-friendly experiences with 96 average performance.' },
  { no: '05', title: 'Ongoing Support', desc: 'We stay close after launch — maintenance, reporting and improvements.' },
];

export const PROCESS = [
  { no: '01', title: 'Discover', desc: 'Understand the business, audience, needs and the opportunity ahead.' },
  { no: '02', title: 'Strategy', desc: 'Turn insight into a clear plan and a confident digital direction.' },
  { no: '03', title: 'Design', desc: 'Create the visual system — layout, type, colour and motion.' },
  { no: '04', title: 'Develop', desc: 'Build a fast, accessible and search-friendly website.' },
  { no: '05', title: 'Launch', desc: 'Test every detail, deploy and optimise for real users.' },
  { no: '06', title: 'Grow', desc: 'SEO, analytics and continuous improvement after go-live.' },
];

export const STATS = [
  { value: 16, suffix: '+', label: 'Projects launched' },
  { value: 19, suffix: '', label: 'Months online' },
  { value: 96, suffix: '', label: 'Avg. performance score' },
  { value: 100, suffix: '%', label: 'Invested in outcomes' },
];

export const PORTFOLIO_FILTERS = ['All', 'Websites', 'Branding', 'SEO', 'Dashboards', 'Restaurant'];

export const PORTFOLIO = [
  {
    title: 'Moss & Marrow',
    categories: ['Branding', 'Restaurant'],
    category: 'Brand identity + menu system',
    desc: 'Full brand identity, menu design and website for a farm-to-table restaurant in Mumbai.',
    tech: ['Brand', 'Menu', 'Web'],
    image: 'https://images.unsplash.com/photo-1570177504254-a44aa5a5e990',
    real: true,
  },
  {
    title: 'codeformatterpro.com',
    categories: ['Websites'],
    category: 'Website development',
    desc: 'Built from scratch — fast, clean and exactly the way the founder described it.',
    tech: ['React', 'SEO', 'Perf'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    url: 'https://codeformatterpro.com',
    real: true,
  },
  {
    title: 'Saffron Table',
    categories: ['SEO', 'Restaurant'],
    category: 'SEO & ongoing maintenance',
    desc: 'Months of SEO and website maintenance producing a visible lift in Google ranking.',
    tech: ['SEO', 'Care', 'Local'],
    image: 'https://images.unsplash.com/photo-1611636827215-3372f3d095ba',
    real: true,
  },
  {
    title: 'Analytics Suite',
    categories: ['Dashboards'],
    category: 'Analytics dashboard · Concept',
    desc: 'A clean reporting dashboard concept turning traffic and leads into decisions.',
    tech: ['Recharts', 'Data', 'UI'],
    image: 'https://images.pexels.com/photos/8636589/pexels-photo-8636589.jpeg',
    real: false,
  },
  {
    title: 'Identity Kit',
    categories: ['Branding'],
    category: 'Brand identity · Concept',
    desc: 'A cohesive identity concept — logo, palette, type and collateral in one system.',
    tech: ['Logo', 'Type', 'Print'],
    image: 'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb',
    real: false,
  },
  {
    title: 'Studio Commerce',
    categories: ['Websites', 'Dashboards'],
    category: 'Business website · Concept',
    desc: 'A conversion-focused business website concept with an integrated insights view.',
    tech: ['Web', 'CRO', 'SEO'],
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
    real: false,
  },
];

// Real testimonials from the existing NorthByte Labs website.
export const TESTIMONIALS = [
  {
    quote: 'NorthByte Labs brought order to a messy brief and made the whole process feel surprisingly easy. Our new site finally feels like us.',
    name: 'Riya Patel',
    business: 'Founder, Moss & Marrow',
  },
  {
    quote: 'NorthByte Labs built codeformatterpro.com for me from scratch and it turned out better than I imagined. The site is fast, clean, and works exactly the way I described.',
    name: 'Sangeeta',
    business: 'Founder, codeformatterpro.com',
    link: 'https://codeformatterpro.com',
  },
  {
    quote: 'They took care of our SEO and website maintenance for months and I can see the difference in our Google ranking. Easy to talk to, quick to reply, and they just get things done.',
    name: 'Meera Krishnan',
    business: 'Owner, Saffron Table',
  },
];

export const BRAND_ITEMS = [
  'Logo', 'Colour palette', 'Typography', 'Business card', 'Social post', 'Restaurant menu', 'Packaging',
];

export const FAQS = [
  { q: 'How long does a website take?', a: 'A focused marketing website normally takes 2–4 weeks. Larger projects get a custom timeline after our first conversation.' },
  { q: 'Can you improve my current website?', a: 'Yes. We can refresh the design, fix technical issues, improve performance, add pages, and strengthen on-page SEO.' },
  { q: 'Do you design menus and logos?', a: 'Yes. We create practical, brand-aligned logo systems and menus for print, QR, digital screens and takeaway.' },
  { q: 'Will I be able to update the site?', a: 'Yes. We recommend the right setup and make handover simple. Ongoing support is also available.' },
];

export const SERVICE_OPTIONS = [
  'Website development', 'Website redesign', 'Website maintenance', 'SEO optimization',
  'Google ranking', 'Analytics dashboards', 'Logo & brand identity', 'Menu design', 'Other',
];

export const BUDGET_OPTIONS = [
  '₹3,999', '₹4,000 – ₹7,999', '₹8,000 – ₹11,999', '₹12,000 – ₹14,999', '₹15,000+',
];

export const ANALYTICS = {
  kpis: [
    { label: 'Website visits', value: '12.8k', delta: '+18.4%' },
    { label: 'New enquiries', value: '184', delta: '+12.1%' },
    { label: 'Conversions', value: '3.9%', delta: '+0.6%' },
    { label: 'Revenue impact', value: '₹8.2L', delta: '+21%' },
  ],
  traffic: [
    { name: 'Organic search', value: 62 },
    { name: 'Direct', value: 24 },
    { name: 'Referral', value: 14 },
  ],
  trend: [
    { m: 'Apr', visits: 4200, leads: 62 },
    { m: 'May', visits: 5100, leads: 78 },
    { m: 'Jun', visits: 6400, leads: 96 },
    { m: 'Jul', visits: 7300, leads: 118 },
    { m: 'Aug', visits: 9100, leads: 142 },
    { m: 'Sep', visits: 12800, leads: 184 },
  ],
};
