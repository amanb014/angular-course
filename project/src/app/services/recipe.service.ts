import { EventEmitter } from '@angular/core';
import { Recipe } from './../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService {
  
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Pizza',
      'This is simply the best way to make pizza here.',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Cheese', 4), new Ingredient('Bread', 1), new Ingredient('Vegetables', 5)]),

      new Recipe(
        2,
        'Salad',
        'This is simply the best way to make salad here.',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient('Spinach', 4), new Ingredient('Tomatoes', 5), new Ingredient('Green Peppers', 5)]),
  ]

  recipeSelected = new EventEmitter<Recipe>()

  getRecipes() {
    return [...this.recipes]
  }

  getRecipe(id: number) {
    for(let el of this.recipes) {
      if(el.id == id) return el;
    }
  }
}