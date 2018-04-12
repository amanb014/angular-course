import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ErrorComponent } from './error.component';

const routes: Routes = [
	{ path: '', 							redirectTo: 'recipes', pathMatch: 'full'},
	{ path: 'recipes', 				component: RecipesComponent,
		children: [
			{ path: '', component: RecipeStartComponent },
			{ path: ':id', component: RecipeDetailComponent }
		]},
	{ path: 'shopping-list', 	component: ShoppingListComponent },
	{ path: 'not-found', component: ErrorComponent, data: {message: 'Sorry! This page was not found.'}},
	{ path: '**', redirectTo: 'not-found'}
]

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})
export class AppRoutingModule { }
