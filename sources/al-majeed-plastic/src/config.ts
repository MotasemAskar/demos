/**
 * Central site configuration — every piece of real-world data lives here.
 *
 * PROSPECT DEMO. Every value below is taken from public sources (2026-11-15):
 *  - EAIIA member directory: https://eaiia.org/en-al-majeed
 *  - al-majeed.com (/contact, homepage)
 *  - jordanyp.com/company/356356
 * Nothing is estimated. Anything we don't know (capacity, lines, client names)
 * is simply not on the site.
 */

export const SITE_URL = 'https://motasemaskar.github.io/demos/al-majeed-plastic';

export const COMPANY = {
  nameEn: 'Al Majeed Plastic Industries',
  nameAr: 'المجيد للصناعات البلاستيكية',
  legalEn: 'Al Majeed Plastic Industries Est.',
  legalAr: 'مؤسسة المجيد للصناعات البلاستيكية',
  founded: 1991,
} as const;

export const CONTACT = {
  phone: '+962 6 488 9011',
  phoneHref: '+96264889011',
  phone2: '+962 6 489 5533',
  phone2Href: '+96264895533',
  /** No WhatsApp number is published — leave blank and every WhatsApp button hides. */
  whatsappNumber: '',
  email: 'sales@al-majeed.com',
  emailHref: 'sales@al-majeed.com',
  emailInfo: 'info@al-majeed.com',
  addressEn: 'Complex No. 4, Mahmoud Abu Hafeethah St., North Marka, Amman, Jordan',
  addressAr: 'مجمّع رقم 4، شارع محمود أبو حفيظة، ماركا الشمالية، عمّان، الأردن',
  hoursEn: 'Saturday – Thursday, 8:00 – 16:30',
  hoursAr: 'السبت – الخميس، 8:00 – 4:30',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=North%20Marka%20Industrial%20Area%2C%20Amman%2C%20Jordan&z=14&output=embed',
} as const;

/** Verified public facts only. */
export const FACTS = {
  founded: '1991',
  mouldBaseM2: '2,000',
  certifications: ['ISO 22000', 'HACCP', 'JFDA'],
  markets: {
    en: ['Saudi Arabia', 'Iraq', 'Qatar', 'Palestine'],
    ar: ['السعودية', 'العراق', 'قطر', 'فلسطين'],
  },
} as const;
