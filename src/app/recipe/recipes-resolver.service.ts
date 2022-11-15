import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { map, Observable, of, switchMap, take } from "rxjs";
// import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
// import { RecipeService } from "./recipe.service";
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as RecipeActions from '../recipe/store/recipe.actions';
import { Actions, ofType } from "@ngrx/effects";

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(
    // private dStorage: DataStorageService,
    // private recipeService: RecipeService,
    private store: Store<fromApp.AppState>,
    private actions$: Actions
    ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    // const recipes = this.recipeService.getRecipes();
    return this.store.select('recipe').pipe(
      take(1),
      map(recipeState => {
        return recipeState.recipes;
      }),
      switchMap(recipes => {
        if(recipes.length === 0){
          // return this.dStorage.fetchRecipes();
          this.store.dispatch(new RecipeActions.FetchRecipes());
          return this.actions$.pipe(ofType(RecipeActions.SET_RECIPES), take(1));
        } else{
          return of(recipes);
        }
      })
    )

    // if(recipes.length === 0){
    //   // return this.dStorage.fetchRecipes();
    //   this.store.dispatch(new RecipeActions.FetchRecipes());
    //   return this.actions$.pipe(ofType(RecipeActions.SET_RECIPES), take(1));
    // } else{
    //   return recipes;
    // }
  }
}
