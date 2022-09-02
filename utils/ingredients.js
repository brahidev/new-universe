export const allIngredients = [
    { icon: "", label: "Profile" , id: 1},
    { icon: "", label: "Categories" , id: 2},
    { icon: "", label: "Games", id: 3}, 
    { icon: "", label: "News", id: 4}
];

const [profile, categories, games, news] = allIngredients;
export const initialTabs = [profile, categories, games, news];

export function getNextIngredient(ingredients) {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
}