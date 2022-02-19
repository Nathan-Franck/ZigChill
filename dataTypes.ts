export type Key = string | number | symbol;
export type Tools = "Pot" | "Pan" | "Baking Sheet" | "Grater" | "Cutting Board";
export type VolumeUnit = "packet" | "cup" | "oz" | "ml" | "tbsp" | "tsp";
export type WeightUnit = "gram" | "kg" | "oz" | "lbs";
export type TimeUnit = "hr" | "min" | "sec";
export type SubjectiveAmount = "pinch" | "to-taste";
export type Meal = "supper" | "lunch" | "breakfast" | "dessert";
export type Quantity = number | SubjectiveAmount | { [key in VolumeUnit | WeightUnit]?: number };
export type Time = { [key in TimeUnit]?: number | [number, number] };
export type Recipe<ParentRecipes extends { [key: Key]: any }, ParentIngredients extends Ingredients> = {
  readonly ovenTemperature?: number,
  readonly directions?: string,
} & ({
  readonly tools: Tools[],
} | {
  readonly meal: Meal,
} | {
  readonly tools: Tools[],
  readonly meal: Meal,
}) & ({
  readonly requiresRecipe: { [key in keyof ParentRecipes]?: number },
  readonly ingredients: { [key in keyof ParentIngredients]?: Quantity },
} | {
  readonly requiresRecipe: { [key in keyof ParentRecipes]?: number },
} | {
  readonly ingredients: { [key in keyof ParentIngredients]?: Quantity },
}) & ({
  readonly cookTime: Time,
} | {
  readonly prepTime: Time,
} | {
  readonly cookTime: Time,
  readonly prepTime: Time,
})

export type Recipes<ParentRecipes extends Record<any, any>, ParentIngredients extends Ingredients> = { [key in keyof ParentRecipes ]: Recipe<ParentRecipes, ParentIngredients & Ingredients> };
export type Ingredients = {
  [key: string]: { store: "room-temperature" | "refrigerated" | "frozen", prepare?: "thaw" | "wash" }
};
export function validateIngredients<T extends Ingredients>(ingredients: T) { return ingredients; }
export function validateRecipes<ParentRecipes extends Recipes<any, any>, ParentIngredients extends Ingredients>(ingredients: ParentIngredients & Ingredients, recipes: ParentRecipes & Recipes<ParentRecipes, ParentIngredients>) { return recipes; };

