import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]

  ingChanged = new EventEmitter<Ingredient[]>()

  constructor() { }

  getIngredients() {
    return [...this.ingredients]
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingChanged.emit([...this.ingredients])
  }

  addIngredientArr(ing: Ingredient[]) {
    this.ingredients.push(...ing)
    this.ingChanged.emit([...this.ingredients])
  }
  
}