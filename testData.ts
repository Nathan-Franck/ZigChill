type Recipe<Names extends string> = {
  readonly other: string,
  readonly dependencies?: { [key in Names]?: number },
}
function validateRecipes<Names extends string>(recipes: Record<Names, Recipe<Names>>) { return recipes; }

const recipes = validateRecipes({
  What: {
    other: "ho",
  },
  Hey: {
    other: "Hi",
    dependencies: { What: 1 },
  }
});


export const test = <const>{
  hello: "world",
}

type Test = typeof test;
const test2: Test = { hello: "world" };
const world: Test["hello"] = "world";
