import { EventEmitter } from '@angular/core';
import { Recipe } from './../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService {
  
  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'This is simply the best way to make pizza here.',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Cheese', 4), new Ingredient('Bread', 1), new Ingredient('Vegetables', 5)]),

      new Recipe(
        'Salad',
        'This is simply the best way to make salad here.',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient('Spinach', 4), new Ingredient('Tomatoes', 5), new Ingredient('Green Peppers', 5)]),
  ]

  recipeSelected = new EventEmitter<Recipe>()

  getRecipes() {
    return [...this.recipes]
  }
}