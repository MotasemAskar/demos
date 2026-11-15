/**
 * Product families and the sectors they serve — bilingual.
 * Product types come from Al Majeed's own product list (al-majeed.com) and their
 * EAIIA directory entry. No sizes, weights or capacities are claimed: those are
 * confirmed per order, so the spec rows describe material and process only.
 */

type L = { en: string; ar: string };

export interface Product {
  slug: string;
  icon: string;
  image: string;
  imageAlt: L;
  name: L;
  short: L;
  desc: L;
  items: L[];
  specs: { k: L; v: L }[];
  sectors: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: 'preforms',
    icon: 'droplet',
    image: '/images/products/preforms.webp',
    imageAlt: { en: 'Clear PET preforms in a crate', ar: 'بريفورمات PET شفافة' },
    name: { en: 'PET Preforms', ar: 'بريفورمات PET' },
    short: {
      en: 'Injection-moulded preforms for water, juice and beverage bottlers.',
      ar: 'بريفورمات بالحقن لمعبّئي المياه والعصائر والمشروبات.',
    },
    desc: {
      en: 'The starting point of every PET bottle. We injection-mould preforms for bottlers who blow their own bottles — consistent wall thickness and neck finish from one batch to the next, so your blow-moulder runs without surprises.',
      ar: 'نقطة البداية لكل عبوة PET. نصنّع البريفورم بالحقن للمعبّئين اللي بينفخوا عبواتهم بأنفسهم — سماكة جدار وعنق ثابتين من دفعة لدفعة، مشان ماكينة النفخ عندك تشتغل بدون مفاجآت.',
    },
    items: [
      { en: 'Water bottle preforms', ar: 'بريفورم قوارير المياه' },
      { en: 'Juice & beverage preforms', ar: 'بريفورم العصائر والمشروبات' },
    ],
    specs: [
      { k: { en: 'Material', ar: 'المادة' }, v: { en: 'PET', ar: 'PET' } },
      { k: { en: 'Process', ar: 'طريقة التصنيع' }, v: { en: 'Injection moulding', ar: 'الحقن' } },
      { k: { en: 'Neck & weight', ar: 'العنق والوزن' }, v: { en: 'Matched to your bottle and cap — confirmed per order', ar: 'حسب عبوتك والغطاء — يُحدَّد مع كل طلب' } },
    ],
    sectors: ['beverage', 'food'],
  },
  {
    slug: 'household',
    icon: 'sparkles',
    image: '/images/products/household.webp',
    imageAlt: { en: 'Plain detergent and cosmetic bottles', ar: 'عبوات منظفات ومستحضرات تجميل' },
    name: { en: 'Detergent & Cosmetic Bottles', ar: 'عبوات المنظفات ومستحضرات التجميل' },
    short: {
      en: 'HDPE and PET bottles for cleaning products, shampoos and personal care.',
      ar: 'عبوات HDPE و PET للمنظفات والشامبو ومنتجات العناية.',
    },
    desc: {
      en: 'Bottles that hold up on a supermarket shelf and in a customer’s hand — for liquid detergents, dishwashing liquid, bleach, shampoo and personal-care lines. Bring us your shape and we build the mould in-house.',
      ar: 'عبوات بتصمد على رف السوبرماركت وبإيد الزبون — للمنظفات السائلة وسائل الجلي والكلور والشامبو ومنتجات العناية. جيب شكلك ونصنعلك قالبه عنا بالمصنع.',
    },
    items: [
      { en: 'Liquid detergent bottles', ar: 'عبوات المنظفات السائلة' },
      { en: 'Shampoo & cosmetic bottles', ar: 'عبوات الشامبو ومستحضرات التجميل' },
    ],
    specs: [
      { k: { en: 'Material', ar: 'المادة' }, v: { en: 'HDPE · PET', ar: 'HDPE · PET' } },
      { k: { en: 'Process', ar: 'طريقة التصنيع' }, v: { en: 'Blow moulding', ar: 'النفخ' } },
      { k: { en: 'Shape', ar: 'الشكل' }, v: { en: 'Your own design — mould built in-house', ar: 'تصميمك الخاص — والقالب بنصنعه عنا' } },
    ],
    sectors: ['detergents', 'cosmetics'],
  },
  {
    slug: 'food',
    icon: 'package',
    image: '/images/products/food.webp',
    imageAlt: { en: 'Plain dairy and juice bottles', ar: 'عبوات ألبان وعصائر' },
    name: { en: 'Food, Dairy & Juice Containers', ar: 'عبوات الأغذية والألبان والعصائر' },
    short: {
      en: 'Food-contact bottles and PET buckets made under ISO 22000.',
      ar: 'عبوات ملامسة للغذاء وسطول PET ضمن نظام ISO 22000.',
    },
    desc: {
      en: 'Containers that touch what people eat and drink — dairy and juice bottles, food bottles and PET buckets — produced under our ISO 22000 and HACCP food-safety system and approved by the Jordan Food & Drug Administration.',
      ar: 'عبوات بتلامس اللي بياكله ويشربه الناس — قوارير الألبان والعصائر وعبوات الأغذية وسطول PET — تُصنع ضمن نظام سلامة الغذاء ISO 22000 و HACCP وبموافقة المؤسسة العامة للغذاء والدواء.',
    },
    items: [
      { en: 'Dairy & laban bottles', ar: 'قوارير الألبان واللبن' },
      { en: 'Juice bottles', ar: 'قوارير العصائر' },
      { en: 'PET buckets', ar: 'سطول PET' },
      { en: 'Food bottles', ar: 'عبوات الأغذية' },
    ],
    specs: [
      { k: { en: 'Material', ar: 'المادة' }, v: { en: 'PET · HDPE', ar: 'PET · HDPE' } },
      { k: { en: 'Food safety', ar: 'سلامة الغذاء' }, v: { en: 'ISO 22000 · HACCP · JFDA approved', ar: 'ISO 22000 · HACCP · موافقة الغذاء والدواء' } },
    ],
    sectors: ['dairy', 'beverage', 'food'],
  },
  {
    slug: 'gallons',
    icon: 'layers',
    image: '/images/products/gallons.webp',
    imageAlt: { en: 'Plain HDPE gallons stacked', ar: 'جالونات HDPE' },
    name: { en: 'Oil, Chemical & Fertilizer Gallons', ar: 'جالونات الزيوت والكيماويات والأسمدة' },
    short: {
      en: 'Rigid gallons for motor oil, chemicals and liquid fertilizers.',
      ar: 'جالونات متينة لزيوت المحركات والكيماويات والأسمدة السائلة.',
    },
    desc: {
      en: 'Heavy-duty containers for products that must not leak — motor oils, industrial chemicals and agricultural fertilizers, in PE and PET.',
      ar: 'عبوات متينة لمنتجات ما بتحتمل أي تسريب — زيوت المحركات والكيماويات الصناعية والأسمدة الزراعية، من PE و PET.',
    },
    items: [
      { en: 'Motor-oil gallons', ar: 'جالونات زيوت المحركات' },
      { en: 'Chemical gallons', ar: 'جالونات الكيماويات' },
      { en: 'Fertilizer containers (PE & PET)', ar: 'عبوات الأسمدة (PE و PET)' },
    ],
    specs: [
      { k: { en: 'Material', ar: 'المادة' }, v: { en: 'HDPE · PE · PET', ar: 'HDPE · PE · PET' } },
      { k: { en: 'Process', ar: 'طريقة التصنيع' }, v: { en: 'Blow moulding', ar: 'النفخ' } },
    ],
    sectors: ['oils', 'agri'],
  },
  {
    slug: 'jars',
    icon: 'blend',
    image: '/images/products/jars.webp',
    imageAlt: { en: 'Plain jars and tubs', ar: 'برطمانات وعلب' },
    name: { en: 'Jars, Tubs & Cans', ar: 'البرطمانات والعلب' },
    short: {
      en: 'For tahini, halva, oil, spices, vinegar, ketchup and thyme.',
      ar: 'للطحينة والحلاوة والزيت والبهارات والخل والكاتشب والزعتر.',
    },
    desc: {
      en: 'The containers behind the Jordanian pantry — tahini and halva tubs, oil cans, and jars for spices, vinegar, ketchup and zaatar.',
      ar: 'العبوات اللي ورا المونة الأردنية — علب الطحينة والحلاوة وعلب الزيت، وبرطمانات البهارات والخل والكاتشب والزعتر.',
    },
    items: [
      { en: 'Tahini & halva tubs', ar: 'علب الطحينة والحلاوة' },
      { en: 'Oil cans', ar: 'علب الزيت' },
      { en: 'Spice, vinegar, ketchup & thyme jars', ar: 'برطمانات البهارات والخل والكاتشب والزعتر' },
    ],
    specs: [
      { k: { en: 'Material', ar: 'المادة' }, v: { en: 'PET · PE', ar: 'PET · PE' } },
      { k: { en: 'Food safety', ar: 'سلامة الغذاء' }, v: { en: 'ISO 22000 · HACCP', ar: 'ISO 22000 · HACCP' } },
    ],
    sectors: ['food'],
  },
  {
    slug: 'medical',
    icon: 'shield-check',
    image: '/images/products/medical.webp',
    imageAlt: { en: 'Plain white sterilizer containers', ar: 'عبوات معقمات بيضاء' },
    name: { en: 'Medical & Sterilizer Containers', ar: 'عبوات طبية وعبوات المعقمات' },
    short: {
      en: 'Clean containers for sterilizers, disinfectants and medical liquids.',
      ar: 'عبوات نظيفة للمعقمات والمطهرات والسوائل الطبية.',
    },
    desc: {
      en: 'Containers for disinfectants, sterilizers and medical-grade liquids, produced in the same controlled environment as our food-contact range.',
      ar: 'عبوات للمطهرات والمعقمات والسوائل الطبية، تُصنع بنفس البيئة المضبوطة اللي بنصنع فيها عبوات الغذاء.',
    },
    items: [
      { en: 'Sterilizer & disinfectant bottles', ar: 'عبوات المعقمات والمطهرات' },
      { en: 'Medical containers', ar: 'عبوات طبية' },
    ],
    specs: [
      { k: { en: 'Material', ar: 'المادة' }, v: { en: 'HDPE · PET', ar: 'HDPE · PET' } },
    ],
    sectors: ['medical'],
  },
];

export interface Sector {
  slug: string;
  icon: string;
  name: L;
}

export const SECTORS: Sector[] = [
  { slug: 'beverage', icon: 'droplet', name: { en: 'Water & beverages', ar: 'المياه والمشروبات' } },
  { slug: 'dairy', icon: 'package', name: { en: 'Dairy & juice', ar: 'الألبان والعصائر' } },
  { slug: 'food', icon: 'blend', name: { en: 'Food & pantry', ar: 'الأغذية والمونة' } },
  { slug: 'detergents', icon: 'sparkles', name: { en: 'Detergents', ar: 'المنظفات' } },
  { slug: 'cosmetics', icon: 'sun', name: { en: 'Cosmetics & personal care', ar: 'التجميل والعناية' } },
  { slug: 'oils', icon: 'cog', name: { en: 'Oils & chemicals', ar: 'الزيوت والكيماويات' } },
  { slug: 'agri', icon: 'leaf', name: { en: 'Agriculture', ar: 'الزراعة والأسمدة' } },
  { slug: 'medical', icon: 'shield-check', name: { en: 'Medical & hygiene', ar: 'الطبي والتعقيم' } },
];

export const sectorName = (slug: string, lang: 'en' | 'ar') =>
  SECTORS.find((s) => s.slug === slug)?.name[lang] ?? slug;
