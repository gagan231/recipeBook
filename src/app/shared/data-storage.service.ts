// import { HttpClient, HttpParams } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Recipe } from "../recipe/recipe.model";
// import { RecipeService } from "../recipe/recipe.service";
// import { exhaustMap, map, take, tap } from 'rxjs/operators';
// // import { AuthService } from "../auth/auth.service";
// import { Store } from '@ngrx/store';
// import * as fromApp from '../store/app.reducer';
// import * as RecipeActions from '../recipe/store/recipe.actions';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataStorageService {
//   constructor(
//     private http: HttpClient,
//     private recipeService: RecipeService,
//     // private authService: AuthService
//     private store: Store<fromApp.AppState>
//     ) {}

//   storeRecipes(){
//     const recipes = this.recipeService.getRecipes();
//     this.http.put('https://recipe-book-8ba5f-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {
//       console.log(response);
//     });
//   }


//   fetchRecipes(){
//       return this.http.get<Recipe[]>('https://recipe-book-8ba5f-default-rtdb.firebaseio.com/recipes.json',).pipe(
//         map(recipes => {
//           return recipes.map(recipe => {
//             return {...recipe, ingridients: recipe.ingridients ? recipe.ingridients: []};
//           });
//         }),
//         tap(recipes => {
//           // this.recipeService.setRecipes(recipes);
//           this.store.dispatch(new RecipeActions.SetRecipes(recipes));
//         })
//         );
//   }

// }
