import { media } from "./media";

export type MenuCategory =
  | "Authentic Ghanaian Dishes"
  | "Charcoal Grills & Chichinga"
  | "Pavilion Bar & Drinks"
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
  "Pavilion Bar & Drinks",
  "Lodge Breakfast",
];

const d = (
  id: string,
  name: string,
  description: string,
  category: MenuCategory,
  image: string,
  chips: Dish["chips"] = []
): Dish => ({ id, name, description, category, image, chips });

const L = media.food.local;
const G = media.food.grill;
const B = media.food.bar;
const K = media.food.breakfast;

export const dishes: Dish[] = [
  // Authentic Ghanaian Dishes
  d(
    "l1",
    "Ghana Jollof Rice & Chicken",
    "Smoky Ghanaian party jollof cooked in seasoned tomato broth, served with spiced grilled chicken, green salad, and authentic shito.",
    categories[0],
    L[0],
    ["Chef's Special", "Local"]
  ),
  d(
    "l2",
    "Banku & Charcoal Grilled Tilapia",
    "Freshly prepared corn and cassava banku served with a whole seasoned grilled tilapia, freshly ground raw hot pepper, and sliced onions.",
    categories[0],
    L[1],
    ["Chef's Special", "Local"]
  ),
  d(
    "l3",
    "Fufu & Aromatic Light Soup",
    "Soft pounded fufu steeped in a rich, spiced Ghanaian light soup with tender goat meat, fish, and authentic herbs.",
    categories[0],
    L[2],
    ["Local"]
  ),
  d(
    "l4",
    "Waakye Special Plate",
    "Authentic rice and beans cooked with sorghum leaves, served with fried plantain, boiled egg, spaghetti, gari, wele, and dark shito.",
    categories[0],
    L[3],
    ["Local"]
  ),

  // Charcoal Grills & Chichinga
  d(
    "g1",
    "Charcoal Grilled Whole Tilapia",
    "Locally sourced whole tilapia seasoned with ginger, garlic, and local herbs, grilled over open coals and served with spicy pepper sauce.",
    categories[1],
    G[0],
    ["Chef's Special"]
  ),
  d(
    "g2",
    "Beef & Goat Chichinga (Suya Skewers)",
    "Tender spiced beef and goat skewers dusted with authentic peanut kuli-kuli suya seasoning, sliced onions, and fresh peppers.",
    categories[1],
    G[1],
    ["Local"]
  ),
  d(
    "g3",
    "Spicy Grilled Chicken Quarter",
    "Flame-grilled chicken quarter marinated in Ghanaian spices, served with fresh pepper sauce or fried yam chips.",
    categories[1],
    G[2]
  ),
  d(
    "g4",
    "Grilled Pork Chofi Cuts",
    "Crisp and juicy seasoned fried/grilled pork cuts served with sliced red onions and hot ground pepper sauce.",
    categories[1],
    G[3]
  ),

  // Pavilion Bar & Drinks
  d(
    "b1",
    "Chilled Hibiscus Sobolo",
    "Homemade Ghanaian spiced hibiscus drink infused with fresh ginger, cloves, and natural pineapple sweetness.",
    categories[2],
    B[0],
    ["Chef's Special", "Local"]
  ),
  d(
    "b2",
    "Fresh Palm Wine Cooler",
    "Authentic, naturally sweet Ghanaian palm wine served chilled in a calabash or glass straight from the tap.",
    categories[2],
    B[1],
    ["Local"]
  ),
  d(
    "b3",
    "Chilled Local & International Beers",
    "Ice-cold Club Beer, Star Lager, Guinness Foreign Extra, and premium lagers served at the pavilion bar.",
    categories[2],
    B[2]
  ),
  d(
    "b4",
    "Pavilion Tropical Citrus Punch",
    "Refreshing fruit blend of pineapple, lime, and crushed mint over ice — perfect for relaxing in the open air.",
    categories[2],
    B[3]
  ),

  // Lodge Breakfast
  d(
    "k1",
    "Fried Egg & Warm Bread with Hot Tea/Milo",
    "Fresh Ghanaian-style fried egg omelette with warm bread, served with a steaming mug of Milo, tea, or rich coffee.",
    categories[3],
    K[0],
    ["Local"]
  ),
  d(
    "k2",
    "Warm Tom Brown Porridge",
    "Nutritious roasted maize and soy porridge served hot with milk, sugar, and toasted buttered bread.",
    categories[3],
    K[1],
    ["Local"]
  ),
  d(
    "k3",
    "Hausa Koko & Koose",
    "Spiced millet porridge seasoned with ginger and black pepper, served hot with golden fried bean fritters (koose).",
    categories[3],
    K[2],
    ["Chef's Special", "Local"]
  ),
  d(
    "k4",
    "Oat Porridge & Toast",
    "Creamy rolled oats cooked with milk and honey, served alongside toasted golden bread and butter.",
    categories[3],
    K[3]
  ),
];
