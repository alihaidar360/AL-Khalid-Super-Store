export const categories = [
  { id: 'all', name: 'All Items', emoji: '🛒', color: '#16a34a' },
  { id: 'ice-cream', name: 'Ice Cream', emoji: '🍦', color: '#60a5fa' },
  { id: 'shampoo', name: 'Shampoo', emoji: '🧴', color: '#a78bfa' },
  { id: 'soap', name: 'Soap', emoji: '🧼', color: '#34d399' },
  { id: 'snacks', name: 'Snacks', emoji: '🍿', color: '#f97316' },
  { id: 'beverages', name: 'Beverages', emoji: '🥤', color: '#38bdf8' },
  { id: 'household', name: 'Household', emoji: '🏠', color: '#f59e0b' },
];

export const products = [
  // Ice Cream
  {
    id: 1, category: 'ice-cream', name: 'Walls Cornetto Classic Vanilla',
    price: 120, originalPrice: 150, discount: 20, rating: 4.5, reviews: 234,
    image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=400&q=80',
    badge: 'Best Seller', description: 'Creamy vanilla ice cream in a crispy cone with rich chocolate at the bottom.',
    inStock: true
  },
  {
    id: 2, category: 'ice-cream', name: 'Paddle Pop Chocolate Bar',
    price: 80, originalPrice: null, discount: 0, rating: 4.2, reviews: 156,
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80',
    badge: null, description: 'Classic chocolate ice cream bar loved by kids and adults alike.',
    inStock: true
  },
  {
    id: 3, category: 'ice-cream', name: 'Movenpick Swiss Chocolate Tub',
    price: 850, originalPrice: 1000, discount: 15, rating: 4.8, reviews: 89,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80',
    badge: 'Premium', description: 'Swiss-quality chocolate ice cream made with the finest cocoa beans.',
    inStock: true
  },
  {
    id: 4, category: 'ice-cream', name: 'Igloo Mango Cream',
    price: 95, originalPrice: 120, discount: 21, rating: 4.3, reviews: 312,
    image: 'https://images.unsplash.com/photo-1514897575457-c4db467cf78e?w=400&q=80',
    badge: 'Sale', description: 'Refreshing mango flavored ice cream, perfect for summer days.',
    inStock: true
  },
  {
    id: 5, category: 'ice-cream', name: 'Ben & Jerrys Chunky Monkey',
    price: 1200, originalPrice: 1400, discount: 14, rating: 4.9, reviews: 445,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80',
    badge: 'Fan Fav', description: 'Banana ice cream with fudge chunks and walnuts — an absolute legend.',
    inStock: true
  },
  {
    id: 6, category: 'ice-cream', name: 'Kulfi Rose Petal',
    price: 65, originalPrice: null, discount: 0, rating: 4.6, reviews: 198,
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&q=80',
    badge: 'Local Pick', description: 'Traditional Pakistani kulfi with rose water and pistachios.',
    inStock: true
  },
  {
    id: 7, category: 'ice-cream', name: 'Haagen-Dazs Strawberry',
    price: 1100, originalPrice: 1250, discount: 12, rating: 4.7, reviews: 267,
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80',
    badge: 'Premium', description: 'Pure strawberry ice cream made with real fruit pieces.',
    inStock: false
  },
  {
    id: 8, category: 'ice-cream', name: 'Dairy Queen Blizzard Mix',
    price: 350, originalPrice: 420, discount: 17, rating: 4.4, reviews: 134,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80',
    badge: null, description: 'Thick blizzard style ice cream with Oreo cookie crumbles.',
    inStock: true
  },

  // Shampoo
  {
    id: 9, category: 'shampoo', name: 'Head & Shoulders Anti-Dandruff',
    price: 450, originalPrice: 550, discount: 18, rating: 4.6, reviews: 892,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80',
    badge: 'Top Rated', description: 'Clinically proven anti-dandruff formula for clean, flake-free hair.',
    inStock: true
  },
  {
    id: 10, category: 'shampoo', name: 'Pantene Pro-V Silky Smooth',
    price: 380, originalPrice: null, discount: 0, rating: 4.4, reviews: 634,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80',
    badge: null, description: 'Keratin infused formula for silky smooth, frizz-free hair.',
    inStock: true
  },
  {
    id: 11, category: 'shampoo', name: 'Dove Intense Repair',
    price: 320, originalPrice: 400, discount: 20, rating: 4.5, reviews: 521,
    image: 'https://images.unsplash.com/photo-1585232350557-4c8e5c0c6578?w=400&q=80',
    badge: 'Sale', description: 'Deeply repairs damaged hair with Dove\'s exclusive Fiber-Active formula.',
    inStock: true
  },
  {
    id: 12, category: 'shampoo', name: 'TRESemmé Keratin Smooth',
    price: 650, originalPrice: 780, discount: 17, rating: 4.3, reviews: 289,
    image: 'https://images.unsplash.com/photo-1631390049978-433d87e96c04?w=400&q=80',
    badge: null, description: 'Salon-quality keratin smoothing shampoo for sleek hair.',
    inStock: true
  },
  {
    id: 13, category: 'shampoo', name: 'L\'Oreal Elvive Extraordinary Oil',
    price: 890, originalPrice: 1000, discount: 11, rating: 4.7, reviews: 412,
    image: 'https://images.unsplash.com/photo-1638459517938-d8975765148a?w=400&q=80',
    badge: 'Premium', description: 'Infused with 6 precious flower oils for lustrous, radiant hair.',
    inStock: true
  },
  {
    id: 14, category: 'shampoo', name: 'Sunsilk Black Shine',
    price: 220, originalPrice: 270, discount: 19, rating: 4.2, reviews: 756,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80',
    badge: 'Value', description: 'Amla and vitamin complex for naturally dark, shining hair.',
    inStock: true
  },
  {
    id: 15, category: 'shampoo', name: 'Garnier Fructis Strengthening',
    price: 420, originalPrice: null, discount: 0, rating: 4.4, reviews: 334,
    image: 'https://images.unsplash.com/photo-1629196913688-cb49e8000d7a?w=400&q=80',
    badge: null, description: 'Citrus extract formula that strengthens hair from root to tip.',
    inStock: false
  },

  // Soap
  {
    id: 16, category: 'soap', name: 'Lifebuoy Total 10 Germ Protection',
    price: 85, originalPrice: 100, discount: 15, rating: 4.5, reviews: 1245,
    image: 'https://images.unsplash.com/photo-1528426736-8e44b6a0f2e1?w=400&q=80',
    badge: 'Best Seller', description: '10-hour germ protection formula for the whole family.',
    inStock: true
  },
  {
    id: 17, category: 'soap', name: 'Dove Moisturizing Beauty Bar',
    price: 120, originalPrice: 140, discount: 14, rating: 4.7, reviews: 892,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&q=80',
    badge: 'Top Rated', description: '¼ moisturizing cream leaves skin soft, smooth, and nourished.',
    inStock: true
  },
  {
    id: 18, category: 'soap', name: 'Lux Soft Touch Rose',
    price: 95, originalPrice: null, discount: 0, rating: 4.3, reviews: 678,
    image: 'https://images.unsplash.com/photo-1591189863430-ab87e120f312?w=400&q=80',
    badge: null, description: 'Rose extracts and silk proteins for luxuriously soft skin.',
    inStock: true
  },
  {
    id: 19, category: 'soap', name: 'Dettol Antibacterial Original',
    price: 110, originalPrice: 130, discount: 15, rating: 4.6, reviews: 1567,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80',
    badge: 'Sale', description: 'Kills 99.9% of bacteria and viruses for complete protection.',
    inStock: true
  },
  {
    id: 20, category: 'soap', name: 'Palmolive Naturals Coconut',
    price: 90, originalPrice: 105, discount: 14, rating: 4.4, reviews: 445,
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&q=80',
    badge: null, description: 'Pure coconut milk and aloe vera for deeply moisturized skin.',
    inStock: true
  },
  {
    id: 21, category: 'soap', name: 'Safeguard Charcoal Deep Clean',
    price: 135, originalPrice: 160, discount: 16, rating: 4.2, reviews: 234,
    image: 'https://images.unsplash.com/photo-1585232352395-9e080b5f24e0?w=400&q=80',
    badge: 'New', description: 'Activated charcoal draws out impurities for a deep, thorough clean.',
    inStock: true
  },
  {
    id: 22, category: 'soap', name: 'Himalaya Neem & Turmeric',
    price: 75, originalPrice: null, discount: 0, rating: 4.5, reviews: 892,
    image: 'https://images.unsplash.com/photo-1562016600-ece13e8ba570?w=400&q=80',
    badge: 'Herbal', description: 'Natural neem and turmeric formula for clear, healthy skin.',
    inStock: true
  },

  // Snacks
  {
    id: 23, category: 'snacks', name: 'Lay\'s Classic Salted Chips',
    price: 60, originalPrice: 75, discount: 20, rating: 4.4, reviews: 2341,
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&q=80',
    badge: 'Top Pick', description: 'America\'s favorite chips with the perfect amount of salt.',
    inStock: true
  },
  {
    id: 24, category: 'snacks', name: 'Pringles Original Can',
    price: 280, originalPrice: 340, discount: 18, rating: 4.6, reviews: 1567,
    image: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400&q=80',
    badge: 'Sale', description: 'Stackable, flavorful, and impossibly addictive. Once you pop...',
    inStock: true
  },
  {
    id: 25, category: 'snacks', name: 'Oreo Double Stuf Cookies',
    price: 195, originalPrice: null, discount: 0, rating: 4.8, reviews: 3456,
    image: 'https://images.unsplash.com/photo-1609572707816-8f94ea4e64f9?w=400&q=80',
    badge: 'Fan Fav', description: 'Twice the cream filling in every classic chocolate cookie.',
    inStock: true
  },
  {
    id: 26, category: 'snacks', name: 'Cheetos Crunchy Cheese',
    price: 80, originalPrice: 95, discount: 16, rating: 4.5, reviews: 1234,
    image: 'https://images.unsplash.com/photo-1600626335541-71c0f21b6546?w=400&q=80',
    badge: null, description: 'Dangerously cheesy crunch that keeps you coming back.',
    inStock: true
  },
  {
    id: 27, category: 'snacks', name: 'Ritz Crackers Original',
    price: 145, originalPrice: 180, discount: 19, rating: 4.3, reviews: 789,
    image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&q=80',
    badge: 'Sale', description: 'Buttery, flaky crackers perfect for cheese and dips.',
    inStock: true
  },
  {
    id: 28, category: 'snacks', name: 'Doritos Nacho Cheese',
    price: 90, originalPrice: null, discount: 0, rating: 4.5, reviews: 2108,
    image: 'https://images.unsplash.com/photo-1582169505937-b9992bd01ed8?w=400&q=80',
    badge: null, description: 'Boldly seasoned triangular tortilla chips with nacho cheese dust.',
    inStock: true
  },
  {
    id: 29, category: 'snacks', name: 'Kit Kat Chunky Chocolate',
    price: 85, originalPrice: 100, discount: 15, rating: 4.7, reviews: 1876,
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&q=80',
    badge: 'Choco', description: 'Have a break with a thick wafer chocolate bar.',
    inStock: true
  },
  {
    id: 30, category: 'snacks', name: 'Twinkies Golden Sponge Cake',
    price: 320, originalPrice: 380, discount: 16, rating: 4.1, reviews: 456,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80',
    badge: null, description: 'The iconic golden sponge cake with creamy filling.',
    inStock: true
  },

  // Beverages
  {
    id: 31, category: 'beverages', name: 'Coca-Cola Original 1.5L',
    price: 130, originalPrice: 155, discount: 16, rating: 4.7, reviews: 5678,
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80',
    badge: 'Classic', description: 'The world\'s most iconic soft drink. Ice cold and refreshing.',
    inStock: true
  },
  {
    id: 32, category: 'beverages', name: 'Tropicana Orange Juice 1L',
    price: 280, originalPrice: 340, discount: 18, rating: 4.5, reviews: 1234,
    image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400&q=80',
    badge: 'Healthy', description: '100% pure squeezed orange juice with no added sugar.',
    inStock: true
  },
  {
    id: 33, category: 'beverages', name: 'Red Bull Energy Drink',
    price: 250, originalPrice: null, discount: 0, rating: 4.4, reviews: 3456,
    image: 'https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=400&q=80',
    badge: 'Energy', description: 'Wings when you need them most. Caffeine, taurine, B-vitamins.',
    inStock: true
  },
  {
    id: 34, category: 'beverages', name: 'Nestle Pure Life Water 1.5L',
    price: 55, originalPrice: 65, discount: 15, rating: 4.3, reviews: 2109,
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80',
    badge: 'Value', description: 'Pure, refreshing water purified through a 12-step process.',
    inStock: true
  },
  {
    id: 35, category: 'beverages', name: 'Pepsi Max Zero Sugar 1L',
    price: 120, originalPrice: 145, discount: 17, rating: 4.5, reviews: 1876,
    image: 'https://images.unsplash.com/photo-1629203432180-71e9b18d855a?w=400&q=80',
    badge: null, description: 'Maximum Pepsi taste with zero calories and zero sugar.',
    inStock: true
  },
  {
    id: 36, category: 'beverages', name: 'Lipton Green Tea Ice 500ml',
    price: 95, originalPrice: 115, discount: 17, rating: 4.2, reviews: 678,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
    badge: null, description: 'Refreshing bottled green tea with a hint of lemon.',
    inStock: true
  },
  {
    id: 37, category: 'beverages', name: 'Milo Chocolate Malt Drink',
    price: 560, originalPrice: 680, discount: 18, rating: 4.6, reviews: 2345,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80',
    badge: 'Bestseller', description: 'Nutritious chocolate malt drink for energy and vitality.',
    inStock: true
  },
  {
    id: 38, category: 'beverages', name: 'Sprite Lemon-Lime 1L',
    price: 110, originalPrice: null, discount: 0, rating: 4.4, reviews: 1456,
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&q=80',
    badge: null, description: 'Crisp, clean lemon-lime taste with a refreshing fizz.',
    inStock: true
  },

  // Household
  {
    id: 39, category: 'household', name: 'Ariel Automatic Detergent 3kg',
    price: 890, originalPrice: 1050, discount: 15, rating: 4.7, reviews: 2341,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    badge: 'Top Rated', description: 'Superior cleaning power that removes 100+ stains in cold water.',
    inStock: true
  },
  {
    id: 40, category: 'household', name: 'Surf Excel Quick Wash 2kg',
    price: 650, originalPrice: 780, discount: 17, rating: 4.5, reviews: 1567,
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&q=80',
    badge: 'Sale', description: 'Fast-acting formula that fights tough stains with less water.',
    inStock: true
  },
  {
    id: 41, category: 'household', name: 'Harpic Power Plus Cleaner',
    price: 185, originalPrice: 220, discount: 16, rating: 4.4, reviews: 892,
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80',
    badge: null, description: 'Maximum power toilet bowl cleaner with 10x cleaning.',
    inStock: true
  },
  {
    id: 42, category: 'household', name: 'Scotch-Brite Scrub Pad Pack',
    price: 145, originalPrice: null, discount: 0, rating: 4.3, reviews: 1234,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80',
    badge: null, description: 'Heavy duty scrubbing pads that clean without scratching.',
    inStock: true
  },
  {
    id: 43, category: 'household', name: 'Mortein Roach Spray 400ml',
    price: 320, originalPrice: 380, discount: 16, rating: 4.6, reviews: 678,
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80',
    badge: 'Effective', description: 'Kills cockroaches and prevents re-infestation for weeks.',
    inStock: true
  },
  {
    id: 44, category: 'household', name: 'Fairy Platinum Dishwash Liquid',
    price: 245, originalPrice: 295, discount: 17, rating: 4.5, reviews: 1023,
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&q=80',
    badge: 'Sale', description: 'Cuts through grease and leaves dishes sparkling clean.',
    inStock: true
  },
  {
    id: 45, category: 'household', name: 'Flash All-Purpose Spray',
    price: 280, originalPrice: null, discount: 0, rating: 4.4, reviews: 567,
    image: 'https://images.unsplash.com/photo-1590005354167-6da97870c757?w=400&q=80',
    badge: null, description: 'Multi-surface spray cleaner that shines and protects.',
    inStock: true
  },
  {
    id: 46, category: 'household', name: 'Comfort Fabric Softener 1.5L',
    price: 340, originalPrice: 400, discount: 15, rating: 4.5, reviews: 789,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80',
    badge: null, description: 'Long-lasting freshness and softness after every wash.',
    inStock: true
  },
  {
    id: 47, category: 'household', name: 'Glad Garbage Bags 50 Pack',
    price: 195, originalPrice: 235, discount: 17, rating: 4.2, reviews: 456,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80',
    badge: 'Value', description: 'Strong, leak-proof garbage bags with odor shield technology.',
    inStock: true
  },
  {
    id: 48, category: 'household', name: 'Mr. Muscle Kitchen Cleaner',
    price: 220, originalPrice: 265, discount: 17, rating: 4.4, reviews: 634,
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80',
    badge: null, description: 'Powerful kitchen degreaser for stovetops and surfaces.',
    inStock: true
  },
  {
    id: 49, category: 'household', name: 'Vape Mosquito Liquid Refill',
    price: 165, originalPrice: null, discount: 0, rating: 4.5, reviews: 1234,
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80',
    badge: null, description: 'All-night protection from mosquitoes for peaceful sleep.',
    inStock: true
  },
  {
    id: 50, category: 'household', name: 'Dettol Multi-Surface Cleaner',
    price: 260, originalPrice: 310, discount: 16, rating: 4.6, reviews: 892,
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5f452d1f2?w=400&q=80',
    badge: 'Disinfectant', description: 'Kills 99.9% of bacteria on all surfaces around the home.',
    inStock: true
  },
  {
    id: 51, category: 'snacks', name: 'Nutella Hazelnut Spread 400g',
    price: 850, originalPrice: 980, discount: 13, rating: 4.9, reviews: 5678,
    image: 'https://images.unsplash.com/photo-1600263944510-6e18e9985e02?w=400&q=80',
    badge: 'Loved', description: 'Creamy hazelnut and cocoa spread for breakfast or anytime.',
    inStock: true
  },
  {
    id: 52, category: 'beverages', name: 'Nescafe Gold Blend 100g',
    price: 980, originalPrice: 1150, discount: 15, rating: 4.7, reviews: 2345,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
    badge: 'Premium', description: 'Rich, smooth premium instant coffee for the perfect cup.',
    inStock: true
  },
];

export const deals = [
  { id: 1, title: 'Summer Sale', discount: '30% OFF', desc: 'On all Ice Creams', category: 'ice-cream', color: 'from-blue-400 to-blue-600', emoji: '🍦' },
  { id: 2, title: 'Bundle Deal', discount: 'Buy 2 Get 1', desc: 'On all Shampoos', category: 'shampoo', color: 'from-purple-400 to-purple-600', emoji: '🧴' },
  { id: 3, title: 'Flash Deal', discount: '25% OFF', desc: 'On Beverages Today', category: 'beverages', color: 'from-sky-400 to-sky-600', emoji: '🥤' },
];
