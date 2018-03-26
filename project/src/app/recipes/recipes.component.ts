import { Component, OnInit } from '@angular/core';
import { Recipe } from './../shared/recipe.model';
import { RecipeService } from '../services/recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selected: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe((val:Recipe) => {
        this.selected = val; 
      })
  }

  recipeSelectHandler(r: Recipe) {
    this.selected = r;
  }

}
