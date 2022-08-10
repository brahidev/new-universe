export const allIngredients = [
    { icon: "🤖👽👿💀", label: "Categorias" },
    { icon: "🎯🎳🎮🕹️", label: "Juegos" },
    { icon: "📰🗞️📻🎙️", label: "Noticias" },
];

const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];

export function getNextIngredient(ingredients) {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
}