import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './../../shared/recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  thisRecipe: Recipe

  constructor(
    private slService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.thisRecipe = this.recipeService.getRecipe(this.route.snapshot.params['id'])
    this.route.params.subscribe(
      (params) => {
        this.thisRecipe = this.recipeService.getRecipe(params['id'])
      }
    )
  }

  addToShoppingList() {
    this.slService.addIngredientArr(this.thisRecipe.ingredients);
  }
}
