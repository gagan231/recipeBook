import { Ingredient } from "../shared/ingredient.model";
import * as ShoppingListActions from '../shopping-list/shopping-list.actions';


export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}


const initialState: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 8)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(state: State = initialState, action: ShoppingListActions.MultipleActions) {
  switch(action.type){
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return{
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENTS:
      // const ingredient = state.ingredients[action.payload.index];
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngridient = {
        ...ingredient,
        // ...action.payload.ingredient
        ...action.payload
      };

      const updatedIngridients = [...state.ingredients];
      // updatedIngridients[action.payload.index] = updatedIngridient;
      updatedIngridients[state.editedIngredientIndex] = updatedIngridient;

      return {
        ...state,
        ingredients: updatedIngridients,
        editedIngredientIndex: -1,
        editedIngredient: null
      };
    case ShoppingListActions.DELETE_INGREDIENTS:
      return {
        ...state,
        ingredients: state.ingredients.filter((ingre, index) => {
          // return index !== action.payload;
          return index !== state.editedIngredientIndex;
        }),
        editedIngredientIndex: -1,
        editedIngredient: null
      };
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: {...state.ingredients[action.payload]}
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredientIndex: -1,
        editedIngredient: null
      };
    default:
      return state;
  }
}
