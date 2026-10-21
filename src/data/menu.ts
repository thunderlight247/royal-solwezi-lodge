// Kitchen & Bar Menu configuration
// Temporarily commented out until client provides real food photos and finalized menu items.

export type MenuCategory =
  | "Authentic Ghanaian Dishes"
  | "Charcoal Grills & Chichinga"
  | "Kitchen & Bar Drinks"
  | "Lodge Breakfast";

export interface Dish {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  image: string;
  chips: ("Chef's Special" | "Local")[];
}

export const categories: MenuCategory[] = [
  "Authentic Ghanaian Dishes",
  "Charcoal Grills & Chichinga",
  "Kitchen & Bar Drinks",
  "Lodge Breakfast",
];

// Dishes commented out until food photography and items are finalized
export const dishes: Dish[] = [
  /*
  {
    id: "l1",
    name: "Ghana Jollof Rice & Chicken",
    description: "Smoky Ghanaian party jollof cooked in seasoned tomato broth, served with spiced grilled chicken, green salad, and authentic shito.",
    category: "Authentic Ghanaian Dishes",
    image: "/images/food/jollof.jpeg",
    chips: ["Chef's Special", "Local"]
  },
  {
    id: "l2",
    name: "Banku with Grilled Tilapia",
    description: "Freshly prepared corn and cassava dough dumplings served with seasoned whole grilled tilapia, freshly crushed hot pepper, and sliced onions.",
    category: "Authentic Ghanaian Dishes",
    image: "/images/food/banku.jpeg",
    chips: ["Chef's Special", "Local"]
  },
  {
    id: "l3",
    name: "Fufu with Goat Light Soup",
    description: "Pounded cassava and plantain fufu immersed in rich, slow-simmered Ghanaian aromatic light soup with tender cuts of goat meat.",
    category: "Authentic Ghanaian Dishes",
    image: "/images/food/fufu.jpeg",
    chips: ["Local"]
  },
  {
    id: "l4",
    name: "Waakye Special Platter",
    description: "Rice and beans cooked with red sorghum leaf sheaths, served with spaghetti, boiled egg, fried plantain (kelewele), gari foto, and dark shito.",
    category: "Authentic Ghanaian Dishes",
    image: "/images/food/waakye.jpeg",
    chips: ["Local"]
  },
  {
    id: "g1",
    name: "Charcoal Grilled Whole Tilapia",
    description: "Locally sourced freshwater tilapia marinated in ginger, garlic, and scotch bonnet peppers, flame-grilled over open charcoal.",
    category: "Charcoal Grills & Chichinga",
    image: "/images/food/tilapia.jpeg",
    chips: ["Chef's Special"]
  },
  {
    id: "g2",
    name: "Beef & Goat Chichinga (Suya Skewers)",
    description: "Tender skewered cuts of spiced beef and goat coated in traditional kuli-kuli peanut spice blend, fire-roasted over coals.",
    category: "Charcoal Grills & Chichinga",
    image: "/images/food/chichinga.jpeg",
    chips: ["Chef's Special", "Local"]
  },
  {
    id: "g3",
    name: "Spiced Charcoal Grilled Chicken",
    description: "Half or quarter chicken rubbed with Ghanaian green seasoning herbs and roasted over charcoal until smoky and crisp.",
    category: "Charcoal Grills & Chichinga",
    image: "/images/food/chicken.jpeg",
    chips: []
  },
  {
    id: "g4",
    name: "Spicy Grilled Pork Chofi",
    description: "Crispy grilled seasoned pork chunks tossed in spicy crushed pepper, onions, and fresh lime.",
    category: "Charcoal Grills & Chichinga",
    image: "/images/food/chofi.jpeg",
    chips: ["Local"]
  },
  {
    id: "b1",
    name: "Chilled Hibiscus Sobolo",
    description: "Traditional brewed roselle leaf drink infused with fresh ginger, cloves, pineapple essence, and mint. Served ice-cold.",
    category: "Kitchen & Bar Drinks",
    image: "/images/food/sobolo.jpeg",
    chips: ["Chef's Special", "Local"]
  },
  {
    id: "b2",
    name: "Fresh Palm Wine Cooler",
    description: "Naturally sweet, fresh local palm wine tapped from surrounding groves, chilled and served in traditional calabash style.",
    category: "Kitchen & Bar Drinks",
    image: "/images/food/palmwine.jpeg",
    chips: ["Local"]
  },
  {
    id: "b3",
    name: "Cold Local & International Beers",
    description: "Ice-cold Club Beer, Star Lager, Guinness Foreign Extra, and premium lagers served at the bar.",
    category: "Kitchen & Bar Drinks",
    image: "/images/food/beers.jpeg",
    chips: []
  },
  {
    id: "b4",
    name: "Tropical Citrus Punch",
    description: "Freshly squeezed Ghanaian orange, pineapple, and lime juice blended over crushed ice.",
    category: "Kitchen & Bar Drinks",
    image: "/images/food/punch.jpeg",
    chips: []
  },
  {
    id: "k1",
    name: "Classic Ghanaian Breakfast",
    description: "Two farm-fresh fried or scrambled eggs with toasted bread, butter, baked beans, and hot tea, coffee, or Milo.",
    category: "Lodge Breakfast",
    image: "/images/food/breakfast.jpeg",
    chips: ["Chef's Special"]
  },
  {
    id: "k2",
    name: "Warm Tom Brown Porridge",
    description: "Hearty roasted corn and legume meal porridge served steaming hot with evaporated milk and sugar or honey.",
    category: "Lodge Breakfast",
    image: "/images/food/tombrown.jpeg",
    chips: ["Local"]
  },
  {
    id: "k3",
    name: "Hausa Koko & Koose",
    description: "Spiced millet porridge seasoned with ginger and cloves, served alongside golden, crispy black-eyed bean fritters (koose).",
    category: "Lodge Breakfast",
    image: "/images/food/koko.jpeg",
    chips: ["Local"]
  },
  {
    id: "k4",
    name: "Oatmeal Porridge & Butter Toast",
    description: "Creamy warm whole oats served with rich milk, honey, and fresh toasted bakery bread.",
    category: "Lodge Breakfast",
    image: "/images/food/oats.jpeg",
    chips: []
  }
  */
];
