import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription, Observable } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
// import { ShoppingListService } from "./shopping-list.service";
import { Store } from '@ngrx/store';
import * as fromShoppingList from './shopping-list.reducer';
import * as ShoppingListActions from './shopping-list.actions';


@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingList implements OnInit, OnDestroy{

  ingredients: Observable<{ingredients: Ingredient[] }>;
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 8)
  // ];

  // private changeSub: Subscription

  constructor(
    // private shoppingService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>) {
   }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingService.getShoppingList();
    // this.changeSub = this.shoppingService.ingridientAdded.subscribe(
    //   (ingris: Ingredient[]) => {
    //     this.ingredients = ingris;
    //   }
    // );
  }

  ngOnDestroy(): void {
      // this.changeSub.unsubscribe();
  }

  onEditItem(index: number){
    // this.shoppingService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  // onMoreIngridients(event: Ingredient){
  //   this.ingredients.push(event);
  // }
}
