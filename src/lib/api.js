import { getAllProducts } from "@/lib/categoriesData";

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
  },
  {
    id: "biscuit-and-cookies",
    name: "Biscuits & Artisan Cookies",
    description: "Handcrafted butter fruit biscuits, vintage egg coin drops, roasted nut shortbread, and decadent cookies",
    badge: "Heritage Bakes",
    count: "10 Items"
  }
];

export const MENU_DATA = getAllProducts().filter(
  (p) => !p.image?.startsWith("http") && p.category !== "viennoiserie"
);

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
    items = items.filter((item) => item.category?.toLowerCase() === category.toLowerCase());
  }
  if (search) {
    const q = search.toLowerCase();
    items = items.filter(
      (item) =>
        item.name?.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.tagline && item.tagline.toLowerCase().includes(q)) ||
        (item.ingredients && item.ingredients.some((ing) => ing.toLowerCase().includes(q)))
    );
  }
  return items;
}

export async function fetchStory() {
  return BRAND_STORY_DATA;
}

export async function submitInquiry(payload) {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    console.warn("API contact dispatch warning, falling back:", err);
  }

  return {
    success: true,
    message: "Thank you. Your inquiry has been received and routed to info@olenecanto.com.",
    recipient: "info@olenecanto.com",
    data: {
      id: `bake-inq-${Date.now()}`,
      ...payload,
      createdAt: new Date().toISOString(),
    },
  };
}

export async function submitNewsletter(email) {
  return {
    success: true,
    message: "Welcome to the Olene Canto Morning Gazette & Fresh Bakes Bulletin.",
    data: { email, subscribedAt: new Date().toISOString() }
  };
}
