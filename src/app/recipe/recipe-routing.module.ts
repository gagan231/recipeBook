import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeComponent } from "./recipe.component";
import { RecipeResolverService } from "./recipes-resolver.service";

const routes: Routes = [
  {path: '', component: RecipeComponent, canActivate: [AuthGuard] ,children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipeDetailsComponent, resolve: [RecipeResolverService] },
    { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule{}
