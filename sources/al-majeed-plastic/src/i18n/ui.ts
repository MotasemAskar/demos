/**
 * Bilingual routing + shared UI strings.
 * English is the default locale at `/`; Arabic mirrors every page under `/ar/`.
 * Page-specific copy lives next to each view in src/views/ as `{ en, ar }`.
 */

export type Lang = 'en' | 'ar';
export const LANGS: Lang[] = ['en', 'ar'];

export const dirOf = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

/** Prefix an internal path for the given language: ('ar', '/products') → '/ar/products'. */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return clean;
  return clean === '/' ? '/ar/' : `/ar${clean}`;
}

/** Strip the locale prefix: '/ar/products' → '/products'. */
export function basePath(pathname: string): string {
  const p = pathname.replace(/\/+$/, '') || '/';
  if (p === '/ar') return '/';
  return p.startsWith('/ar/') ? p.slice(3) : p;
}

export const UI = {
  en: {
    nav: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/products', label: 'Products' },
      { href: '/moulds', label: 'Mould Making' },
      { href: '/quality', label: 'Food Safety' },
      { href: '/contact', label: 'Contact' },
    ],
    cta: 'Request a Quote',
    sample: 'Request Samples',
    switchLabel: 'العربية',
    switchAria: 'اقرأ الموقع بالعربية',
    skip: 'Skip to main content',
    menu: 'Toggle menu',
    tagline: 'From mould to bottle, under one roof',
    activity: 'PET & HDPE Packaging Manufacturer',
    madeIn: 'Made in Jordan since 1991',
    footer: {
      quick: 'Quick Links',
      products: 'Products',
      contact: 'Contact',
      rights: 'All rights reserved.',
      motto: 'Packaging your product can stand on.',
      mottos: ['ISO 22000 · HACCP', 'In-house mould making', 'Exporting across the region'],
    },
    ctaBand: {
      title: 'Launching a product or changing your bottle?',
      text: 'Send us the volume, the shape you have in mind and your monthly quantity — we will come back with the right container, a sample and a price.',
    },
    demo: 'Proposed demo — designed by',
  },
  ar: {
    nav: [
      { href: '/', label: 'الرئيسية' },
      { href: '/about', label: 'من نحن' },
      { href: '/products', label: 'المنتجات' },
      { href: '/moulds', label: 'تصنيع القوالب' },
      { href: '/quality', label: 'سلامة الغذاء' },
      { href: '/contact', label: 'تواصل معنا' },
    ],
    cta: 'اطلب عرض سعر',
    sample: 'اطلب عيّنات',
    switchLabel: 'English',
    switchAria: 'Read the site in English',
    skip: 'تخطَّ إلى المحتوى',
    menu: 'فتح القائمة',
    tagline: 'من القالب إلى العبوة، تحت سقف واحد',
    activity: 'مصنع عبوات PET و HDPE',
    madeIn: 'صناعة أردنية منذ 1991',
    footer: {
      quick: 'روابط سريعة',
      products: 'المنتجات',
      contact: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
      motto: 'عبوة يقف عليها منتجك.',
      mottos: ['ISO 22000 · HACCP', 'تصنيع قوالب داخلي', 'تصدير لدول المنطقة'],
    },
    ctaBand: {
      title: 'عندك منتج جديد أو بدك تغيّر عبوتك؟',
      text: 'أرسل لنا الحجم والشكل اللي ببالك والكمية الشهرية — ونرجعلك بالعبوة المناسبة وعيّنة وسعر.',
    },
    demo: 'نسخة تجريبية مقترحة — صُممت بواسطة',
  },
} as const;
