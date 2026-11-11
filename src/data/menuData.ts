export interface PriceVariant {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  subtitle?: string;
  description?: string;
  price?: number;
  variants?: PriceVariant[];
  featured?: boolean;
}

export interface MenuAddon {
  id: string;
  name: string;
  price: number;
}

export interface MenuSectionData {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  bannerImage?: string;
  bannerAlt?: string;
  layoutType: 'featured-cards' | 'single-price' | 'dual-size' | 'multi-weight' | 'bread-type' | 'smash-type';
  variantHeaders?: string[];
  items: MenuItem[];
  addonsTitle?: string;
  addons?: MenuAddon[];
}

export const HERO_IMAGE = '/src/assets/images/hero_basha_grill_feast_1794392785041.jpg';
export const LOGO_IMAGE = '/assets/aistudio/icon_512_5bb4c36f.png';

export const MENU_SECTIONS: MenuSectionData[] = [
  {
    id: 'trays',
    title: 'الصواني',
    subtitle: 'ولائم الباشا الملكية للعائلات والصحاب',
    note: 'جميع الصواني مضاف إليها أرز + سلطات',
    bannerImage: '/src/assets/images/tray_mixed_grill_platter_1794392786130.jpg',
    bannerAlt: 'صواني مشويات الباشا الفاخرة',
    layoutType: 'featured-cards',
    items: [
      {
        id: 'tray-triple',
        name: 'صينية التريبل',
        subtitle: 'من 3 إلى 4 أفراد',
        description: '3 ربع فراخ مشوي + 3 أصابع كفتة + ورقة سجق',
        price: 650,
        featured: true,
      },
      {
        id: 'tray-sohab',
        name: 'صينية الصحاب',
        subtitle: 'من 5 إلى 6 أفراد',
        description: '5 ربع فراخ مشوي + ثلث طرب + ثلث كفتة + ثلث ستيك',
        price: 1500,
        featured: true,
      },
      {
        id: 'tray-lamma',
        name: 'صينية اللمة',
        subtitle: 'من 7 إلى 9 أفراد',
        description: 'ثلث كباب + ثلث كفتة + ثلث طرب + نصف ستيك + نصف تندوري + ورقة كبدة + ورقة سجق',
        price: 2500,
        featured: true,
      },
    ],
  },
  {
    id: 'single-meals',
    title: 'وجبات فرد',
    subtitle: 'وجبات مشوية متكاملة على الفحم',
    layoutType: 'single-price',
    items: [
      { id: 'meal-quarter-chicken', name: 'ربع فرخة', price: 120 },
      { id: 'meal-kofta', name: 'وجبة كفتة', price: 150 },
      { id: 'meal-steak', name: 'وجبة ستيك', price: 190 },
      { id: 'meal-mix', name: 'وجبة ميكس', price: 230, featured: true },
      { id: 'meal-kebda', name: 'ورقة كبدة', price: 200 },
      { id: 'meal-sujuk', name: 'ورقة سجق', price: 220 },
    ],
  },
  {
    id: 'addons',
    title: 'الإضافات',
    subtitle: 'مقبلات، بطاطس، وصوصات الباشا المميزة',
    layoutType: 'single-price',
    items: [
      { id: 'addon-fries-packet', name: 'باكيت بطاطس', price: 35 },
      { id: 'addon-fries-cheddar', name: 'بطاطس شيدر', price: 50 },
      { id: 'addon-fries-jalapeno', name: 'بطاطس هالوبينو', price: 50 },
      { id: 'addon-fries-smash', name: 'بطاطس سماش', price: 90, featured: true },
      { id: 'addon-chicken-fries', name: 'تشيكن فرايز', price: 90, featured: true },
      { id: 'addon-sauce-cheddar', name: 'صوص شيدر', price: 25 },
      { id: 'addon-sauce-ranch', name: 'صوص رانش', price: 25 },
      { id: 'addon-sauce-bbq', name: 'صوص باربيكيو', price: 25 },
      { id: 'addon-tahini', name: 'طحينة', price: 15 },
      { id: 'addon-green-salad', name: 'سلطة خضراء', price: 15 },
      { id: 'addon-halal-whiskey', name: 'ويسكي حلال', price: 10 },
    ],
  },
  {
    id: 'pizza',
    title: 'البيتزا',
    subtitle: 'عجينة إيطالية هشة مخبوزة بعناية بحجمين وسط وكبير',
    bannerImage: '/src/assets/images/pizza_crepe_feast_1794392788502.jpg',
    bannerAlt: 'بيتزا وكريب مشويات الباشا',
    layoutType: 'dual-size',
    variantHeaders: ['وسط', 'كبير'],
    items: [
      {
        id: 'pizza-margherita',
        name: 'بيتزا مارجريتا',
        variants: [
          { label: 'وسط', price: 80 },
          { label: 'كبير', price: 120 },
        ],
      },
      {
        id: 'pizza-veggie',
        name: 'بيتزا خضروات',
        variants: [
          { label: 'وسط', price: 85 },
          { label: 'كبير', price: 125 },
        ],
      },
      {
        id: 'pizza-minced-meat',
        name: 'بيتزا لحمة مفروم',
        variants: [
          { label: 'وسط', price: 110 },
          { label: 'كبير', price: 150 },
        ],
      },
      {
        id: 'pizza-sujuk',
        name: 'بيتزا سجق',
        variants: [
          { label: 'وسط', price: 110 },
          { label: 'كبير', price: 150 },
        ],
      },
      {
        id: 'pizza-pastrami',
        name: 'بيتزا بسطرمة',
        variants: [
          { label: 'وسط', price: 120 },
          { label: 'كبير', price: 160 },
        ],
      },
      {
        id: 'pizza-hotdog',
        name: 'بيتزا هوت دوج',
        variants: [
          { label: 'وسط', price: 110 },
          { label: 'كبير', price: 150 },
        ],
      },
      {
        id: 'pizza-mix-meat',
        name: 'بيتزا مشكل لحوم',
        featured: true,
        variants: [
          { label: 'وسط', price: 130 },
          { label: 'كبير', price: 170 },
        ],
      },
      {
        id: 'pizza-mix-cheese',
        name: 'بيتزا مشكل جبن',
        variants: [
          { label: 'وسط', price: 110 },
          { label: 'كبير', price: 150 },
        ],
      },
      {
        id: 'pizza-chicken',
        name: 'بيتزا فراخ',
        variants: [
          { label: 'وسط', price: 110 },
          { label: 'كبير', price: 150 },
        ],
      },
      {
        id: 'pizza-shish',
        name: 'بيتزا شيش طاووق',
        variants: [
          { label: 'وسط', price: 130 },
          { label: 'كبير', price: 170 },
        ],
      },
      {
        id: 'pizza-strips',
        name: 'بيتزا استربس',
        variants: [
          { label: 'وسط', price: 120 },
          { label: 'كبير', price: 160 },
        ],
      },
      {
        id: 'pizza-panne',
        name: 'بيتزا بانيه',
        variants: [
          { label: 'وسط', price: 110 },
          { label: 'كبير', price: 150 },
        ],
      },
      {
        id: 'pizza-mix-chicken',
        name: 'بيتزا مشكل فراخ',
        featured: true,
        variants: [
          { label: 'وسط', price: 130 },
          { label: 'كبير', price: 170 },
        ],
      },
      {
        id: 'pizza-shrimp',
        name: 'بيتزا جمبري',
        variants: [
          { label: 'وسط', price: 210 },
          { label: 'كبير', price: 270 },
        ],
      },
      {
        id: 'pizza-calamari',
        name: 'بيتزا سبيط',
        variants: [
          { label: 'وسط', price: 190 },
          { label: 'كبير', price: 250 },
        ],
      },
      {
        id: 'pizza-seafood',
        name: 'بيتزا سي فود',
        featured: true,
        variants: [
          { label: 'وسط', price: 210 },
          { label: 'كبير', price: 270 },
        ],
      },
      {
        id: 'pizza-tuna',
        name: 'بيتزا تونة',
        variants: [
          { label: 'وسط', price: 130 },
          { label: 'كبير', price: 170 },
        ],
      },
    ],
  },
  {
    id: 'pizza-mixes',
    title: 'ميكسات البيتزا',
    subtitle: 'ابتكارات خاصة تجمع أقوى النكهات والصوصات',
    layoutType: 'featured-cards',
    items: [
      {
        id: 'pizza-mix-metdalaa',
        name: 'المتدلعة',
        description: 'نصف مشكل فراخ بصوص الرانش + نصف مشكل لحوم بصوص الباربيكيو',
        price: 220,
        featured: true,
      },
      {
        id: 'pizza-mix-boom-meat',
        name: 'بوم مييت',
        description: 'سجق + بسطرمة + مشكل جبن + صوص تكساس',
        price: 240,
        featured: true,
      },
    ],
    addonsTitle: 'إضافات البيتزا',
    addons: [
      { id: 'pizza-addon-ranch', name: 'صوص رانش', price: 25 },
      { id: 'pizza-addon-bbq', name: 'صوص باربيكيو', price: 25 },
      { id: 'pizza-addon-cheddar', name: 'صوص شيدر', price: 25 },
      { id: 'pizza-addon-mozzarella', name: 'موزاريلا', price: 30 },
      { id: 'pizza-addon-meats', name: 'لحوم', price: 40 },
    ],
  },
  {
    id: 'grills',
    title: 'المشاوي',
    subtitle: 'مشويات بلدي طازجة على الفحم بالأوزان: ربع · ثلث · نصف · كيلو',
    layoutType: 'multi-weight',
    variantHeaders: ['ربع', 'ثلث', 'نصف', 'كيلو'],
    items: [
      {
        id: 'grill-kofta',
        name: 'كفتة',
        featured: true,
        variants: [
          { label: 'ربع', price: 215 },
          { label: 'ثلث', price: 280 },
          { label: 'نصف', price: 400 },
          { label: 'كيلو', price: 800 },
        ],
      },
      {
        id: 'grill-kebda',
        name: 'كبدة',
        variants: [
          { label: 'ربع', price: 170 },
          { label: 'ثلث', price: 220 },
          { label: 'نصف', price: 300 },
          { label: 'كيلو', price: 600 },
        ],
      },
      {
        id: 'grill-kebab',
        name: 'كباب',
        featured: true,
        variants: [
          { label: 'ربع', price: 240 },
          { label: 'ثلث', price: 320 },
          { label: 'نصف', price: 450 },
          { label: 'كيلو', price: 900 },
        ],
      },
      {
        id: 'grill-tarb',
        name: 'طرب',
        variants: [
          { label: 'ربع', price: 240 },
          { label: 'ثلث', price: 320 },
          { label: 'نصف', price: 450 },
          { label: 'كيلو', price: 900 },
        ],
      },
      {
        id: 'grill-steak',
        name: 'ستيك',
        variants: [
          { label: 'ربع', price: 240 },
          { label: 'ثلث', price: 320 },
          { label: 'نصف', price: 450 },
          { label: 'كيلو', price: 900 },
        ],
      },
      {
        id: 'grill-reyash',
        name: 'ريش',
        featured: true,
        variants: [
          { label: 'ثلث', price: 400 },
          { label: 'نصف', price: 550 },
          { label: 'كيلو', price: 1100 },
        ],
      },
      {
        id: 'grill-moshakkel',
        name: 'مشكل',
        featured: true,
        variants: [
          { label: 'ثلث', price: 300 },
          { label: 'نصف', price: 425 },
          { label: 'كيلو', price: 850 },
        ],
      },
      {
        id: 'grill-shish',
        name: 'شيش طاووق',
        variants: [
          { label: 'نصف', price: 300 },
          { label: 'كيلو', price: 600 },
        ],
      },
      {
        id: 'grill-tandoori',
        name: 'فرخة تندوري',
        variants: [
          { label: 'نصف', price: 300 },
          { label: 'كيلو', price: 600 },
        ],
      },
    ],
  },
  {
    id: 'grilled-chicken',
    title: 'الفراخ المشوية',
    subtitle: 'تتبيلة الباشا السرية على الفحم',
    layoutType: 'featured-cards',
    items: [
      {
        id: 'chicken-bone',
        name: 'فرخة مشوية بالعظم',
        price: 360,
        featured: true,
      },
      {
        id: 'chicken-boneless',
        name: 'فرخة مشوية مخلية',
        price: 300,
        featured: true,
      },
    ],
  },
  {
    id: 'crepe',
    title: 'الكريب',
    subtitle: 'كريب ذهبي مقرمش بحشوات غنية',
    layoutType: 'single-price',
    items: [
      { id: 'crepe-fries', name: 'كريب بطاطس', price: 60 },
      { id: 'crepe-panne', name: 'كريب بانيه', price: 90 },
      { id: 'crepe-strips-mild', name: 'كريب استربس بارد (كريسبي)', price: 90 },
      { id: 'crepe-strips-hot', name: 'كريب استربس حار (زينجر)', price: 90 },
      { id: 'crepe-super-crunchy', name: 'كريب سوبر كرانشي', price: 100, featured: true },
      { id: 'crepe-super-supreme-zinger', name: 'كريب سوبر سوبريم زنجر', price: 110, featured: true },
      { id: 'crepe-fajita', name: 'كريب فاهيتا', price: 100 },
      { id: 'crepe-shish', name: 'كريب شيش', price: 110 },
      { id: 'crepe-mix-chicken', name: 'كريب مشكل فراخ', price: 120, featured: true },
      { id: 'crepe-pastrami', name: 'كريب بسطرمة', price: 90 },
      { id: 'crepe-mix-meat', name: 'كريب مشكل لحوم', price: 120, featured: true },
      { id: 'crepe-hotdog', name: 'كريب هوت دوج', price: 75 },
      { id: 'crepe-mix-cheese', name: 'كريب مشكل جبن', price: 80 },
      { id: 'crepe-roumi', name: 'كريب رومي', price: 70 },
    ],
  },
  {
    id: 'crepe-mixes',
    title: 'ميكسات الكريب',
    subtitle: 'أقوى ميكسات الكريب المبتكرة من مشويات الباشا',
    layoutType: 'featured-cards',
    items: [
      {
        id: 'crepe-mix-chicken-turbo',
        name: 'كريب تشيكن تربو',
        description: 'استربس + مشوي صدور + شيدر',
        price: 130,
        featured: true,
      },
      {
        id: 'crepe-mix-meat-fire',
        name: 'كريب ميت فاير',
        description: 'هوت دوج + سجق + بسطرمة + تكساس',
        price: 140,
        featured: true,
      },
      {
        id: 'crepe-mix-chicken-boom',
        name: 'كريب تشيكن بوم',
        description: 'كوردن بلو + فاهيتا صدور فراخ + رومي مدخن + شيدر',
        price: 160,
        featured: true,
      },
      {
        id: 'crepe-mix-hot',
        name: 'كريب ميكس هوت',
        description: 'ميكس فراخ حار + قطعة سماش + هالوبينو + باربيكيو',
        price: 180,
        featured: true,
      },
    ],
  },
  {
    id: 'savory-feteer',
    title: 'الفطير المالح',
    subtitle: 'فطير شرقي مورق بالسمن البلدي وأجود الحشوات',
    bannerImage: '/src/assets/images/feteer_hawawshi_smash_1794392787848.jpg',
    bannerAlt: 'الفطير المالح والحواوشي وسماش ساندوتش',
    layoutType: 'single-price',
    items: [
      { id: 'feteer-shrimp', name: 'فطيرة جمبري', price: 270, featured: true },
      { id: 'feteer-veggie', name: 'فطيرة خضروات', price: 130 },
      { id: 'feteer-seafood', name: 'فطيرة سي فود', price: 270, featured: true },
      { id: 'feteer-mix-cheese', name: 'فطيرة ميكس جبن', price: 160 },
      { id: 'feteer-calamari', name: 'فطيرة سبيط', price: 250 },
      { id: 'feteer-minced', name: 'فطيرة مفروم', price: 170 },
      { id: 'feteer-sujuk', name: 'فطيرة سجق', price: 180 },
      { id: 'feteer-chicken-ranch', name: 'فطيرة تشيكن رانش', price: 180, featured: true },
      { id: 'feteer-chicken-bbq', name: 'فطيرة تشيكن باربيكيو', price: 180 },
      { id: 'feteer-pastrami', name: 'فطيرة بسطرمة', price: 180 },
      { id: 'feteer-shish', name: 'فطيرة شيش طاووق', price: 190 },
      { id: 'feteer-mix-meat', name: 'فطيرة ميكس لحوم', price: 200, featured: true },
    ],
    addonsTitle: 'إضافات الفطير',
    addons: [
      { id: 'feteer-addon-cheese', name: 'إضافة جبنة', price: 50 },
      { id: 'feteer-addon-oriental', name: 'إضافة شرقي', price: 60 },
    ],
  },
  {
    id: 'sweet-feteer',
    title: 'الفطير الحلو',
    subtitle: 'فطير شرقي محلى بالقشطة والشيكولاتة والمكسرات',
    layoutType: 'single-price',
    items: [
      { id: 'sweet-feteer-sugar', name: 'فطيرة سكر', price: 60 },
      { id: 'sweet-feteer-baghasha', name: 'فطيرة بغاشة', price: 70 },
      { id: 'sweet-feteer-custard', name: 'فطيرة كاسترد', price: 70 },
      { id: 'sweet-feteer-cream-honey', name: 'فطيرة قشطة وعسل', price: 110, featured: true },
      { id: 'sweet-feteer-chocolate', name: 'فطيرة شيكولاتة', price: 100 },
      { id: 'sweet-feteer-lotus', name: 'فطيرة لوتس', price: 100 },
      { id: 'sweet-feteer-pistachio', name: 'فطيرة بيستاشيو', price: 170, featured: true },
      { id: 'sweet-feteer-basha', name: 'فطيرة الباشا', price: 200, featured: true },
    ],
    addonsTitle: 'إضافات الفطير الحلو',
    addons: [
      { id: 'sweet-feteer-addon-nuts', name: 'إضافة مكسرات', price: 50 },
    ],
  },
  {
    id: 'sandwiches',
    title: 'السندوتشات',
    subtitle: 'اختر نوع الخبز المفضل لديك: بلدي · الباشا · فرنساوي',
    layoutType: 'bread-type',
    variantHeaders: ['بلدي', 'الباشا', 'فرنساوي'],
    items: [
      {
        id: 'sand-kebda',
        name: 'ساندوتش كبدة',
        variants: [
          { label: 'بلدي', price: 30 },
          { label: 'الباشا', price: 30 },
          { label: 'فرنساوي', price: 40 },
        ],
      },
      {
        id: 'sand-kofta',
        name: 'ساندوتش كفتة',
        featured: true,
        variants: [
          { label: 'بلدي', price: 50 },
          { label: 'الباشا', price: 50 },
          { label: 'فرنساوي', price: 70 },
        ],
      },
      {
        id: 'sand-sujuk',
        name: 'ساندوتش سجق',
        variants: [
          { label: 'بلدي', price: 40 },
          { label: 'الباشا', price: 40 },
          { label: 'فرنساوي', price: 50 },
        ],
      },
      {
        id: 'sand-tarb',
        name: 'ساندوتش طرب',
        variants: [
          { label: 'بلدي', price: 60 },
          { label: 'الباشا', price: 60 },
          { label: 'فرنساوي', price: 80 },
        ],
      },
      {
        id: 'sand-steak',
        name: 'ساندوتش ستيك',
        featured: true,
        variants: [
          { label: 'بلدي', price: 85 },
          { label: 'الباشا', price: 85 },
          { label: 'فرنساوي', price: 100 },
        ],
      },
      {
        id: 'sand-shish',
        name: 'ساندوتش شيش طاووق',
        variants: [
          { label: 'بلدي', price: 75 },
          { label: 'الباشا', price: 75 },
          { label: 'فرنساوي', price: 90 },
        ],
      },
      {
        id: 'sand-tandoori',
        name: 'ساندوتش شيش تندوري',
        variants: [
          { label: 'بلدي', price: 75 },
          { label: 'الباشا', price: 75 },
          { label: 'فرنساوي', price: 90 },
        ],
      },
    ],
  },
  {
    id: 'hawawshi',
    title: 'الحواوشي',
    subtitle: 'حواوشي بلدي متبل ومشوي على الفحم بقرمشة لا تقاوم',
    layoutType: 'featured-cards',
    items: [
      { id: 'hawawshi-regular', name: 'حواوشي', price: 50, featured: true },
      { id: 'hawawshi-cheese', name: 'حواوشي جبنة', price: 65, featured: true },
    ],
  },
  {
    id: 'smash-sandwich',
    title: 'سماش ساندوتش',
    subtitle: 'متوفر بحجمين: عادي · سبيشيال — بالإضافة إلى سماش الباشا الملكي',
    layoutType: 'smash-type',
    variantHeaders: ['عادي', 'سبيشيال'],
    items: [
      {
        id: 'smash-classic',
        name: 'سماش كلاسيك',
        variants: [
          { label: 'عادي', price: 100 },
          { label: 'سبيشيال', price: 150 },
        ],
      },
      {
        id: 'smash-jalapeno',
        name: 'سماش هالوبينو',
        variants: [
          { label: 'عادي', price: 110 },
          { label: 'سبيشيال', price: 160 },
        ],
      },
      {
        id: 'smash-backfire',
        name: 'سماش باك فاير',
        featured: true,
        variants: [
          { label: 'عادي', price: 120 },
          { label: 'سبيشيال', price: 170 },
        ],
      },
      {
        id: 'smash-shawarma',
        name: 'سماش شاورمه',
        variants: [
          { label: 'عادي', price: 110 },
          { label: 'سبيشيال', price: 160 },
        ],
      },
      {
        id: 'smash-elbasha',
        name: 'سماش الباشا',
        description: '2 قطعة + قطعة شيدر + قطعة بيكون + بصل مكرمل',
        price: 190,
        featured: true,
      },
    ],
  },
];

export const CONTACT_INFO = {
  whatsappNumber: '01007475474',
  whatsappIntl: '201007475474',
  facebookUrl: 'https://www.facebook.com/share/1QFfQHdXKm/',
  instagramUrl: 'https://www.instagram.com/elbasha_grill?psln=amR6Zm90Z3o0cGFy',
  slogan: 'مشويات الباشا... أنت الباشا',
};
