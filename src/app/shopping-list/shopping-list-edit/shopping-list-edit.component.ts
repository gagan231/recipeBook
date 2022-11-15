import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Ingredient } from "src/app/shared/ingredient.model";
// import { ShoppingListService } from "../shopping-list.service";
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list.actions';
// import * as fromShoppingList from '../shopping-list.reducer';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEdit implements OnInit, OnDestroy{

  @ViewChild('f', {static: false}) shoppingListForm: NgForm;

  // @ViewChild('nameInput', {static: false}) nameField: ElementRef;
  // @ViewChild('amountInput', {static: false}) amountField: ElementRef;

  // @Output() ingri = new EventEmitter<Ingredient>();

  shoppingSubs: Subscription;
  editMode = false;
  // editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    // private shoppingService: ShoppingListService,
    // private store: Store<fromShoppingList.AppState>
    private store: Store<fromApp.AppState>){}

  ngOnInit(): void {
    this.shoppingSubs = this.store.select('shoppingList').subscribe(stateData => {
      if(stateData.editedIngredientIndex > -1){
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }else {
        this.editMode = false;
      }
    })
      // this.shoppingSubs = this.shoppingService.startedEditing.subscribe(
      //   (index: number) => {
      //     this.editedItemIndex = index;
      //     this.editMode = true;
      //     this.editedItem = this.shoppingService.getIngridient(index);
      //     this.shoppingListForm.setValue({
      //       name: this.editedItem.name,
      //       amount: this.editedItem.amount
      //     })
      //   }
      // );
  }

  ingridientAdd(f: NgForm){
    // this.ingri.emit({name: this.nameField.nativeElement.value, amount: this.amountField.nativeElement.value});
    const value = f.value;
    // const newIngridient = new Ingredient(this.nameField.nativeElement.value, this.amountField.nativeElement.value);
    const newIngridient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      // this.shoppingService.updatedIngridient(this.editedItemIndex, newIngridient);
      // this.store.dispatch(new ShoppingListActions.UpdateIngredient({index: this.editedItemIndex, ingredient: newIngridient}));
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(newIngridient));
    }else{
      // this.shoppingService.addIngridient(newIngridient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngridient));
    }
    this.editMode = false;
    f.reset();
  }

  ngOnDestroy(): void {
    this.shoppingSubs.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onResetForm(){
    this.shoppingListForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onDeleteIngridient(){
    // this.shoppingService.deleteIngridient(this.editedItemIndex);
    // this.store.dispatch(new ShoppingListActions.DeleteIngredient(this.editedItemIndex));
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onResetForm();
  }
}
