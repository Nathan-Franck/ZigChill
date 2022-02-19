import { validateIngredients } from "./dataTypes";

const roomTempuratureIngredients = ['Oil', 'Sugar', 'Salt', 'Broth Concentrate'];

export const ingredients = validateIngredients({
  'Oil': { store: 'room-temperature' },
  'Butter': { store: 'refrigerated' },
  'Cheese': { store: 'refrigerated' },
  'Mustard': { store: 'room-temperature' },
  'Mayonayse': { store: 'room-temperature' },
  'Vinegar': { store: 'room-temperature' },
  'Beef': { store: 'frozen', prepare: 'thaw' },
  'Panko Breadcrumbs': { store: 'room-temperature' },
  'Water': { store: 'room-temperature' },
  'Sugar': { store: 'room-temperature' },
  'Salt': { store: 'room-temperature' },
  'Pepper': { store: 'room-temperature' },
  'Broth Concentrate': { store: 'room-temperature' },
  'Raw Shrimp': { store: 'frozen' },
  'Hamberger Buns': { store: 'room-temperature' },
  'Baby Spinach': { store: 'refrigerated' },
  'Tomatos': { store: 'refrigerated' },
  'Garlic Cloves': { store: 'refrigerated' },
});

