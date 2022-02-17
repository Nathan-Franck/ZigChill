type Key = string | number | symbol;
type Recipe<ParentRecipes extends { [key: Key]: any }> = {
  readonly other: string,
  readonly requiresRecipe?: { [key in keyof ParentRecipes]?: number },
}
type Recipes<ParentRecipes extends Recipes<any>> = { [key in keyof ParentRecipes ]: Recipe<ParentRecipes> };
function validateRecipes<T extends Recipes<T>>(recipes: T & Recipes<T>) { return recipes; }

const recipes = validateRecipes({
  "Shrimp": {
    other: "ho",
  },
  "Pasta with Shrimp": {
    other: "what's new",
    requiresRecipe: { "Shrimp": 1 },
  },
});

const recipeDerivative: { [key in keyof typeof recipes]: string } = {
  "Pasta with Shrimp": "hey",
  "Shrimp": "what",
};


export const test = <const>{
  hello: "world",
}

type Test = typeof test;
const test2: Test = { hello: "world" };
const world: Test["hello"] = "world";
