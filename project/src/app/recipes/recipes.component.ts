import { Component, OnInit } from '@angular/core';
import { Recipe } from './../shared/recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selected: Recipe;
  constructor() { }

  ngOnInit() {
  }

  recipeSelectHandler(r: Recipe) {
    this.selected = r;
  }

}
