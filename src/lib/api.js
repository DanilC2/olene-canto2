export const CATEGORIES_DATA = [
  {
    id: "all",
    name: "All Atelier Creations",
    description: "Explore our complete repertoire of slow-fermented breads, viennoiserie, and haute desserts",
    badge: "Full Collection",
    count: "18 Items"
  },
  {
    id: "viennoiserie",
    name: "Viennoiserie & Laminated Pastries",
    description: "27-layer cultured French butter croissants, pain au chocolat, and caramelized kouign-amann",
    badge: "Baked Fresh at 6 AM",
    count: "6 Items"
  },
  {
    id: "artisanal-breads",
    name: "Wild Ferment Sourdough",
    description: "48-hour cold-fermented rustic batards, seeded sourdoughs, and rosemary focaccia",
    badge: "Heritage Grains",
    count: "4 Items"
  },
  {
    id: "haute-patisserie",
    name: "Haute Pâtisserie & Entremets",
    description: "Delicate mille-feuille, Tahitian vanilla tartlets, choux au craquelin, and Opera slices",
    badge: "Chef Signature",
    count: "5 Items"
  },
  {
    id: "bespoke-cakes",
    name: "Artisan Cakes & Gateaux",
    description: "Basque burnt cheesecake, dark chocolate gianduja tart, and pistachio celebration gateaux",
    badge: "Special Occasions",
    count: "3 Items"
  }
];

export const MENU_DATA = [
  {
    id: "item-1",
    name: "Signature Feuilletée Golden Croissant",
    category: "viennoiserie",
    price: "$5.75",
    description: "Hand-rolled with Normandy AOP cultured butter, featuring 27 micro-layers of paper-thin honeycomb crumb and an audible shatter crust.",
    badge: "Atelier Signature",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop",
    video: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-freshly-baked-croissants-41441-large.mp4",
    ingredients: ["AOP Charentes-Poitou Butter", "Normandy T55 Flour", "Sea Salt from Guérande", "Wild Yeast Poolish"],
    calories: "290 kcal"
  },
  {
    id: "item-2",
    name: "Valrhona Noir Pain au Chocolat",
    category: "viennoiserie",
    price: "$6.50",
    description: "Double batons of 70% dark Guanaja Valrhona chocolate enveloped in buttery laminated brioche dough, dusted with bittersweet Dutch cacao.",
    badge: "Best Seller",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?q=80&w=900&auto=format&fit=crop",
    video: "https://assets.mixkit.co/videos/preview/mixkit-putting-a-tray-with-croissants-into-an-oven-41442-large.mp4",
    ingredients: ["70% Valrhona Guanaja", "Laminated Brioche Dough", "Madagascar Bourbon Vanilla"],
    calories: "340 kcal"
  },
  {
    id: "item-3",
    name: "48-Hour Wild Rye & Charcoal Sourdough",
    category: "artisanal-breads",
    price: "$9.50",
    description: "Naturally leavened with our 12-year-old mother sourdough starter. Deep caramelized blistered crust with a custardy, open honeycomb crumb.",
    badge: "Wild Ferment",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=900&auto=format&fit=crop",
    video: "https://assets.mixkit.co/videos/preview/mixkit-baker-sprinkling-flour-on-a-bread-dough-41444-large.mp4",
    ingredients: ["Organic Stoneground Rye", "Unbleached Wheat Flour", "Fleur de Sel", "Living Wild Levain"],
    calories: "180 kcal / 100g"
  },
  {
    id: "item-4",
    name: "San Sebastián Basque Burnt Cheesecake",
    category: "bespoke-cakes",
    price: "$8.50",
    description: "Caramelized exterior baked at scorching heat, yielding an ultra-creamy, molten center infused with vanilla bean and fresh organic double cream.",
    badge: "Must Try",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Basque Farmhouse Cream Cheese", "Tahitian Vanilla", "Organic Heavy Cream", "Pasture Eggs"],
    calories: "380 kcal"
  },
  {
    id: "item-5",
    name: "Caramelized Vanilla Mille-Feuille",
    category: "haute-patisserie",
    price: "$9.00",
    description: "Three crisp layers of caramelized inverse puff pastry layered with silky Tahitian vanilla bean diplomate cream and salted amber caramel.",
    badge: "Chef Choice",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Inverse Puff Pastry", "Tahitian Vanilla diplomate", "House Salted Amber Caramel"],
    calories: "320 kcal"
  },
  {
    id: "item-6",
    name: "Bronte Pistachio Paris-Brest",
    category: "haute-patisserie",
    price: "$10.00",
    description: "Crispy choux ring crowned with toasted Sicilian pistachio flakes, piped generously with 100% pure Bronte pistachio mousseline and praline core.",
    badge: "Limited Edition",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sicilian Bronte Pistachio Paste", "Crispy Choux Shell", "Pistachio Praliné Core"],
    calories: "360 kcal"
  },
  {
    id: "item-7",
    name: "Rosemary & Smoked Sea Salt Focaccia",
    category: "artisanal-breads",
    price: "$7.50",
    description: "High-hydration Sicilian olive oil focaccia, studded with confit garlic, fresh garden rosemary, and crunchy Maldon smoked crystal salts.",
    badge: "House Favorite",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Extra Virgin Sicilian Olive Oil", "Fresh Rosemary", "Confit Garlic", "Maldon Sea Salt"],
    calories: "220 kcal"
  },
  {
    id: "item-8",
    name: "Grand Cru Opera Gateau",
    category: "bespoke-cakes",
    price: "$9.50",
    description: "Seven precise geometric layers of almond Joconde sponge steeped in espresso, bittersweet dark chocolate ganache, and French coffee buttercream.",
    badge: "Classic Elegance",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Almond Joconde Sponge", "Espresso Infusion", "Grand Cru Dark Ganache", "Gold Leaf"],
    calories: "310 kcal"
  }
];

export const BRAND_STORY_DATA = {
  brand: "Olene Canto",
  tagline: "The Art of Modern Baking",
  founded: "2024",
  mission: "From slow natural ferments and cultured Normandy butter to avant-garde pastry engineering, every Olene Canto bake is a celebration of purity, heat, and time.",
  stats: [
    { value: "48h", label: "Slow Wild Ferment Time" },
    { value: "27", label: "Micro-Layers of Hand Lamination" },
    { value: "100%", label: "AOP French Cultured Butter" },
    { value: "0%", label: "Artificial Additives or Preservatives" }
  ],
  values: [
    {
      title: "The Living Ferment",
      description: "We cultivate our wild sourdough levain daily, relying solely on natural airborne yeasts, stoneground flours, and time to unlock complex aroma profiles."
    },
    {
      title: "Lamination Precision",
      description: "Temperature-controlled marble ateliers allow us to laminate dough with micro-millimeter precision, achieving the coveted honeycomb pastry structure."
    },
    {
      title: "Single-Estate Ingredients",
      description: "From Bronte pistachios to Valrhona Grand Cru cacao and raw alpine honey, we source directly from historic agricultural estates."
    }
  ],
  timeline: [
    {
      year: "04:00 AM",
      title: "Dawn Fire & Hearth Baking",
      description: "Stone ovens reach peak temperature as wild sourdough loaves receive their signature blistered crusts."
    },
    {
      year: "06:00 AM",
      title: "First Viennoiserie Batch",
      description: "Freshly golden croissants and pain au chocolat emerge crisp and fragrant from the atelier."
    },
    {
      year: "08:00 AM",
      title: "Atelier Doors Open",
      description: "Serving fresh bakes, warm espresso, and afternoon tea reservations to our connoisseurs."
    }
  ]
};

export async function fetchCategories() {
  return CATEGORIES_DATA;
}

export async function fetchMenu(category, search) {
  let items = [...MENU_DATA];
  if (category && category !== "all") {
    items = items.filter((item) => item.category.toLowerCase() === category.toLowerCase());
  }
  if (search) {
    const q = search.toLowerCase();
    items = items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(q))
    );
  }
  return items;
}

export async function fetchStory() {
  return BRAND_STORY_DATA;
}

export async function submitInquiry(payload) {
  return {
    success: true,
    message: "Thank you. Your bakery order & reservation inquiry has been received.",
    data: {
      id: `bake-inq-${Date.now()}`,
      ...payload,
      createdAt: new Date().toISOString()
    }
  };
}

export async function submitNewsletter(email) {
  return {
    success: true,
    message: "Welcome to the Olene Canto Morning Gazette & Fresh Bakes Bulletin.",
    data: { email, subscribedAt: new Date().toISOString() }
  };
}
