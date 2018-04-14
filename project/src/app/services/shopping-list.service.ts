import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]

  ingChanged = new Subject<Ingredient[]>()

  constructor() { }

  getIngredients() {
    return [...this.ingredients]
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingChanged.next([...this.ingredients])
  }

  addIngredientArr(ing: Ingredient[]) {
    this.ingredients.push(...ing)
    this.ingChanged.next([...this.ingredients])
  }
  
}