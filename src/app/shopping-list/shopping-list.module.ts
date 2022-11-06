// import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListEdit } from "./shopping-list-edit/shopping-list-edit.component";
import { ShoppingList } from "./shopping-list.component";

const routes: Routes = [
  {path: '', component: ShoppingList}
]

@NgModule({
  declarations: [
    ShoppingList,
    ShoppingListEdit,
  ],
  imports: [
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ShoppingListModule{}
