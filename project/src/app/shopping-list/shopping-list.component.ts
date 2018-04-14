import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[]
  constructor(private slService: ShoppingListService) {}
  ingChanged:Subscription = null;

  ngOnInit() {
    this.ingredients = this.slService.getIngredients()

    this.ingChanged = this.slService.ingChanged
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      })
  }

  ingredientAddedHandler(el: Ingredient) {
    this.slService.addIngredient(el)
  }

  ngOnDestroy() {
    this.ingChanged.unsubscribe()
  }
}
