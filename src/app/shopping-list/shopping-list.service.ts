// import { EventEmitter } from "@angular/core";
// import { Subject } from 'rxjs';
// import { Ingredient } from "../shared/ingredient.model";

// export class ShoppingListService{

//   ingridientAdded = new Subject<Ingredient[]>();

//   startedEditing = new Subject<number>();

//   private ingredients: Ingredient[] = [
//     new Ingredient('Apples', 5),
//     new Ingredient('Tomatoes', 8)
//   ];

//   getShoppingList(){
//     return this.ingredients.slice();
//   }

//   getIngridients(){
//     return this.ingredients.slice();
//   }

//   getIngridient(index: number){
//     return this.ingredients[index];
//   }

//   addIngridient(ingri: Ingredient){
//     this.ingredients.push(ingri);
//     this.ingridientAdded.next(this.ingredients.slice());
//   }

//   addIngridientsToShoppingList(ingridients: Ingredient[]) {
//     // for(let ingredient of ingridients){
//     //   this.addIngridient(ingredient);
//     // }

//     this.ingredients.push(...ingridients);
//     this.ingridientAdded.next(this.ingredients.slice());
//   }

//   updatedIngridient(index: number, newIngri: Ingredient){
//     this.ingredients[index] = newIngri;
//     this.ingridientAdded.next(this.ingredients.slice());
//   }

//   deleteIngridient(index: number){
//     this.ingredients.splice(index,1);
//     this.ingridientAdded.next(this.ingredients.slice());
//   }

// }
