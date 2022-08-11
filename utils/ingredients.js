export const allIngredients = [
    { icon: "🤖👽👿💀", label: "Categories" , id: 1},
    { icon: "🎯🎳🎮🕹️", label: "Games", id: 2}, 
    { icon: "📰🗞️📻🎙️", label: "News", id: 3},
];

const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];

export function getNextIngredient(ingredients) {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
}