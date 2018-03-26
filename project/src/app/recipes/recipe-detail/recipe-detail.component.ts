import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './../../shared/recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('selected') thisRecipe: Recipe

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addToShoppingList() {
    this.slService.addIngredientArr(this.thisRecipe.ingredients);
  }
}
