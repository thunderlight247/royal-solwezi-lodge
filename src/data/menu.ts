import { media } from "./media";
export type MenuCategory = "Local Ghanaian Specialties" | "Grill & BBQ" | "Pavilion Bar Cocktails" | "Breakfast";
export interface Dish { id: string; name: string; description: string; price: number; category: MenuCategory; image: string; chips: ("Chef's Special" | "Local")[] }
export const categories: MenuCategory[] = ["Local Ghanaian Specialties", "Grill & BBQ", "Pavilion Bar Cocktails", "Breakfast"];
// SAMPLE DATA: dishes and prices are placeholders. Replace with the lodge's real menu.
const d = (id: string, name: string, description: string, price: number, category: MenuCategory, image: string, chips: Dish["chips"] = []): Dish => ({ id, name, description, price, category, image, chips });
const L = media.food.local, G = media.food.grill, B = media.food.bar, K = media.food.breakfast;
export const dishes: Dish[] = [
  d("l1", "Jollof Rice & Chicken", "Smoky party-style jollof with grilled chicken and salad.", 60, categories[0], L[0], ["Chef's Special", "Local"]),
  d("l2", "Banku & Tilapia", "Fresh banku with grilled tilapia, pepper sauce and onions.", 85, categories[0], L[1], ["Local"]),
  d("l3", "Fufu & Light Soup", "Pounded fufu in a rich, spiced light soup.", 70, categories[0], L[2], ["Local"]),
  d("l4", "Waakye Special", "Waakye with egg, gari, spaghetti, plantain and stew.", 50, categories[0], L[3], ["Local"]),
  d("g1", "Grilled Tilapia", "Whole tilapia seasoned and grilled over charcoal.", 90, categories[1], G[0], ["Chef's Special"]),
  d("g2", "Goat Suya Skewers", "Spiced skewers with sliced onions and pepper.", 55, categories[1], G[1], ["Local"]),
  d("g3", "BBQ Chicken Quarter", "Marinated chicken quarter with chips or kenkey.", 65, categories[1], G[2]),
  d("g4", "Pork Chops", "Grilled pork chops with sautéed vegetables.", 75, categories[1], G[3]),
  d("b1", "Pavilion Sunset", "House cocktail with tropical fruit and a citrus finish.", 45, categories[2], B[0], ["Chef's Special"]),
  d("b2", "Sobolo Fizz", "Chilled hibiscus sobolo with ginger and lime.", 30, categories[2], B[1], ["Local"]),
  d("b3", "Ginger Mojito", "Fresh mint, lime and ginger over crushed ice.", 40, categories[2], B[2]),
  d("b4", "Palm Wine Spritz", "Light and fruity spritz with a local twist.", 40, categories[2], B[3], ["Local"]),
  d("k1", "Egg Sandwich & Tea", "Fried egg sandwich with a hot cup of tea.", 35, categories[3], K[0]),
  d("k2", "Pancake Stack", "Fluffy pancakes with honey and fruit.", 40, categories[3], K[1]),
  d("k3", "Tom Brown & Bread", "Roasted-grain porridge with buttered bread.", 25, categories[3], K[2], ["Local"]),
  d("k4", "Koose & Pap", "Crispy bean fritters with smooth maize pap.", 25, categories[3], K[3], ["Local", "Chef's Special"]),
];
