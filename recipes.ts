import { validateRecipes } from './dataTypes';
import { ingredients } from './ingredients'

const recipes = validateRecipes(ingredients, {
  'Salty Shrimp': {
    tools: ['Pan'],
    directions: 'Fry in medium until pink',
    cookTime: { min: 1 },
    ingredients: { 'Raw Shrimp': { cup: 1 }},
  },
  'Pasta with Shrimp': {
    requiresRecipe: { 'Salty Shrimp': 1 },
    tools: ["Pot"],
    prepTime: { min: 10 },
  },
  'Caramelized Onions': {
    ingredients: {
      'Oil': { tsp: 1 },
      'Sugar': { tsp: 1 },
      'Salt': 'to-taste',
    },
    tools: ['Pot'],
    directions: "Cook over medium heat, stirring occasionally",
    cookTime: { min: [3, 4] },
  },
  'Au Jus': {
    requiresRecipe: {
      'Caramelized Onions': 1/4,
    },
    ingredients: {
      'Butter': { tbsp: 1 },
      'Water': { cup: 1/2 },
      'Broth Concentrate': { packet: 1 }
    },
    tools: ['Pot'],
    directions: "Cook on medium heat, stirring often",
    cookTime: { min: 3 },
  },
  'Grated Cheese': {
    ingredients: { cup: 1/4 },
    tools: ["Grater"],
    prepTime: { min: 1 },
  },
  'Toasted Buns': {
    tools: ["Baking Sheet"],
    requiresRecipe: { "Grated Cheese": 1 },
    ingredients: {
      'Oil': { tbsp: 1 },
      'Garlic Cloves': 1,
      'Hamberger Buns': 2,
    },
    ovenTemperature: 450,
    directions: "Mix Garlic and Oil, spread on buns, sprinkle on Cheese, bake in middle rack",
    cookTime: { min: [2, 3] },
  },
  'Hamburgers': {
    ingredients: {
      'Beef': { gram: 250 },
      'Panko Breadcrumbs': { cup: 1/4 },
      'Salt': { tsp: 1/2 },
      'Pepper': { tsp: 1/4 },
    },
    tools: ["Pan"],
    directions: "Mix ingredients in bowl, form 4 inch patties, cook on medium heat, flip halfway through",
    cookTime: { min: [8, 10] },
  },
  "Spinach Salad": {
    ingredients: {
      'Vinegar': { tbsp: 1 },
      'Oil': { tbsp: 2 },
      'Sugar': { tsp: 1/4 },
      'Baby Spinach': { gram: 113 },
      'Tomatoes': { gram: 160 },
    },
    tools: ["Cutting Board"],
    prepTime: { min: [2, 4] },
    directions: "Cut tomatoes into cubes, Combine in bowl",
  },
  'French Dip Burgers': {
    ingredients: {
      Mustard: { tbsp: 1 },
      Mayonayse: { tbsp: 2 },
    },
    requiresRecipe: {
      "Spinach Salad": 1,
      "Au Jus": 1,
      "Caramelized Onions": 3/4,
      "Hamburgers": 1,
      "Toasted Buns": 1
    },
    directions: "Mix Mustard and Mayonayse together, spread on Buns, Plate Buns with Burgers, top with Onions, with Jus as dip, Salad as side",
    prepTime: { min: 2 },
    meal: "supper",
  },
});
