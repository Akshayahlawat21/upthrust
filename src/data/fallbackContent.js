/**
 * Structured Content Schema & Repository
 * Serves as the single source of truth for all editable website copy,
 * headlines, images, repeaters, and metadata. Compatible with Headless CMS
 * (Sanity / Strapi / Contentful / Supabase).
 */

export const heroContent = {
  headlineTop: "BOLD DESIGN",
  headlineBottom: "PERFORMS",
  badgeThat: "THAT",
  badgeStrategy: "STRATEGY IS",
  badgeCheaper: "CHEAPER",
  badgeIdentity: "IDENTITY ·",
  badgeExperience: "EXPERIENCE ·",
  badgeMotion: "MOTION ·",
  badgeComfortable: "COMFORTABLE",
  badgeExpensive: "IS EXPENSIVE",
  trustCount: "100+",
  trustText: "Brands trusted us to define how they're seen.",
  statueImage: "/assets/herostatue.png"
};

export const fallbackServices = [
  {
    id: 1,
    title: "Strategy and Insight",
    tag: "WHAT CAN WE DO FOR YOU",
    subtitle: "We interrogate what others assume. Then we build the brief behind the brief.",
    bullets: [
      "Brand strategy & positioning",
      "Messaging & tone of voice",
      "Audience & competitor research",
      "Workshops & creative sprints"
    ],
    footnote: null,
    display_order: 1,
    image_url: "/assets/services/strategy.png",
    card_theme: "strategy",
    accent: "#FF4600"
  },
  {
    id: 2,
    title: "Brand & visual identity",
    tag: "WHAT CAN WE DO FOR YOU",
    subtitle: "We build systems, not just logos. So you own the category, not just the conversation.",
    bullets: [
      "Brand identity & visual language",
      "Guidelines & naming",
      "Illustration & iconography",
      "Brand architecture & systems"
    ],
    footnote: null,
    display_order: 2,
    image_url: "/assets/services/brand.png",
    card_theme: "brand",
    accent: "#FF4600"
  },
  {
    id: 3,
    title: "Product & digital experience",
    tag: "WHAT CAN WE DO FOR YOU",
    subtitle: "We design for humans and metrics. So users stay, engage, and come back.",
    bullets: [
      "UI/UX & website design",
      "Design systems & prototyping",
      "User research & testing",
      "Motion graphics & micro-interactions"
    ],
    footnote: null,
    display_order: 3,
    image_url: "/assets/services/product.png",
    card_theme: "product",
    accent: "#FF4600"
  },
  {
    id: 4,
    title: "Creative & campaign production",
    tag: "WHAT CAN WE DO FOR YOU",
    subtitle: "We turn attention into action. Then we prove it worked.",
    bullets: [
      "Campaign creative & social content",
      "Presentations & pitch decks",
      "Marketing collateral & ad creative"
    ],
    footnote: "psst.. Also, physical spaces. Because not everything happens on a screen: experiential and spatial design for exhibitions, placemaking and branded environments. Just ask.",
    display_order: 4,
    image_url: "/assets/services/creative.png",
    card_theme: "creative",
    accent: "#FF4600"
  }
];

export const clientLogos = [
  { name: "zomato", label: "zomato" },
  { name: "BOSCH", label: "BOSCH" },
  { name: "L'ORÉAL", label: "L'ORÉAL" },
  { name: "VEGA", label: "VEGA" },
  { name: "DELL", label: "DELL" },
  { name: "L'ORÉAL", label: "L'ORÉAL" }
];

export const testimonialsContent = [
  {
    id: 1,
    quote: "Upthrust redesigned our entire product ecosystem, leading to a 42% increase in user retention.",
    author: "Elena Rostova",
    role: "VP of Product, Cyble"
  },
  {
    id: 2,
    quote: "The bold brand positioning gave us immediate authority in a crowded enterprise market.",
    author: "Marcus Vance",
    role: "Chief Strategy Officer, Neatlogs"
  }
];

export const faqContent = [
  {
    id: 1,
    question: "How long does a typical brand sprint take?",
    answer: "Our core strategy and visual identity sprints typically run 4 to 8 weeks depending on scope."
  },
  {
    id: 2,
    question: "Do you offer post-launch design and engineering support?",
    answer: "Yes, we partner on ongoing retainer models for high-growth teams needing continuous design iterations."
  }
];

