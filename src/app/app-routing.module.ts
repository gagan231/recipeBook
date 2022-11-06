import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
// import { AuthComponent } from "./auth/auth.component";
// import { AuthGuard } from "./auth/auth.guard";
// import { RecipeDetailsComponent } from "./recipe/recipe-details/recipe-details.component";
// import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
// import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component";
// import { RecipeComponent } from "./recipe/recipe.component";
// import { RecipeResolverService } from "./recipe/recipes-resolver.service";
// import { ShoppingList } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: "full"},
  // {path: 'recipes', component: RecipeComponent, canActivate: [AuthGuard] ,children: [
  //   { path: '', component: RecipeStartComponent },
  //   { path: 'new', component: RecipeEditComponent},
  //   { path: ':id', component: RecipeDetailsComponent, resolve: [RecipeResolverService] },
  //   { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
  // ]},
  // {path: 'shopping-list', component: ShoppingList},
  // {path: 'auth', component: AuthComponent}
  {path: 'recipes', loadChildren: () => import('./recipe/recipe.module').then(mod => mod.RecipeModule)},
  {path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(mod => mod.ShoppingListModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)}
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}) ],
  exports: [ RouterModule ]
})
export class AppRouting{

}
