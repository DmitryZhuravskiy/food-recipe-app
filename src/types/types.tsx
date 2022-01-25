export interface RecipesType {
  recipe: OneRecipe;
}

export interface OneRecipe {
  label: string;
  image: string;
  url: string;
  ingredients: Array<ingredientType>;
}

export interface ingredientType {
  text: string;
  weight: number;
}
