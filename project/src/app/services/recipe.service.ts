import { EventEmitter } from '@angular/core';
import { Recipe } from './../shared/recipe.model';
export class RecipeService {
  
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Recipe', 'This is some absurdly long description for a recipe. Not really that long though.', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return [...this.recipes];
  }
}