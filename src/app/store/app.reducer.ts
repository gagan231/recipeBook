import * as fromShoppingList from '../shopping-list/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromRecipe from '../recipe/store/recipe.reducer';

export interface AppState{
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State,
  recipe: fromRecipe.State
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer,
  recipe: fromRecipe.recipeReducer
}
