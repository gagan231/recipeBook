// import { Injectable } from "@angular/core";
// import { Ingredient } from "../shared/ingredient.model";
// // import { ShoppingListService } from "../shopping-list/shopping-list.service";
// import { Recipe } from "./recipe.model";
// import { Subject } from 'rxjs';
// import { Store } from '@ngrx/store';
// import * as ShoppingListActions from '../shopping-list/shopping-list.actions';
// // import * as fromShoppingList from '../shopping-list/shopping-list.reducer';
// import * as fromApp from '../store/app.reducer';

// @Injectable({providedIn: 'root'})
// export class RecipeService{

//   recipeSelected = new Subject<Recipe[]>();

//   // private recipes: Recipe[] = [
//   //   new Recipe('A test',
//   //   'simple test desc',
//   //   'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/lentil_and_chickpea_31510_16x9.jpg',
//   //   [
//   //     new Ingredient('chickpea in gms', 500),
//   //     new Ingredient('onions', 2),
//   //     new Ingredient('pepper', 2)
//   //   ]),
//   //   new Recipe('Another test recipe',
//   //   'simple test desc',
//   //   'https://eduauraapublic.s3.ap-south-1.amazonaws.com/webassets/images/blogs/indian-food-nutrition.jpg',
//   //   [
//   //     new Ingredient('Rice flour in gms', 500),
//   //     new Ingredient('onion', 2),
//   //     new Ingredient('curd in gms', 100)
//   //   ])
//   // ];

//   private recipes: Recipe[] = [];

//   constructor(
//     // private shoppingService: ShoppingListService,
//     // private store: Store<fromShoppingList.AppState>
//     private store: Store<fromApp.AppState>) {}

//   getRecipes(){
//     return this.recipes.slice();
//   }

//   getRecipe(index: number){
//     return this.recipes.slice()[index];
//   }

//   setRecipes(recipes: Recipe[]){
//     this.recipes = recipes;
//     this.recipeSelected.next(this.recipes.slice());
//   }

//   addtoShoppingList(ingri: Ingredient[]){
//     // this.shoppingService.addIngridientsToShoppingList(ingri);
//     this.store.dispatch(new ShoppingListActions.AddIngredients(ingri));
//   }

//   addRecipe(recipe: Recipe){
//     this.recipes.push(recipe);
//     this.recipeSelected.next(this.recipes.slice());
//   }

//   updateRecipe(index: number, newRecipe: Recipe){
//     this.recipes[index] = newRecipe;
//     this.recipeSelected.next(this.recipes.slice());
//   }

//   deleteRecipe(index){
//     this.recipes.splice(index, 1);
//     this.recipeSelected.next(this.recipes.slice());
//   }
// }
