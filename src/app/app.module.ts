import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { RecipeComponent } from './recipe/recipe.component';
// import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
// import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
// import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { HeaderComponent } from './header/header.component';
// import { ShoppingList } from './shopping-list/shopping-list.component';
// import { ShoppingListEdit } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DropdownDriective } from './shared/dropdown.directive';
// import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRouting } from './app-routing.module';
// import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
// import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
// import { RecipeService } from './recipe/recipe.service';
// import { AuthComponent } from './auth/auth.component';
// import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
// import { AuthInterceptorService } from './auth/auth-interceptor.service';
// import { AlertComponent } from './shared/alert/alert.component';
// import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
// import { RecipeModule } from './recipe/recipe.module';
// import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModules } from './core.module';
// import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { shoppingListReducer } from './shopping-list/shopping-list.reducer';
// import { authReducer } from './auth/store/auth.reducer';
import * as fromAppReducer from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RecipeEffects } from './recipe/store/recipe.effects';

@NgModule({
  declarations: [
    AppComponent,
    // RecipeComponent,
    // RecipeDetailsComponent,
    // RecipeListComponent,
    // RecipeItemComponent,
    HeaderComponent,
    // ShoppingList,
    // ShoppingListEdit,
    // DropdownDriective,
    // RecipeStartComponent,
    // RecipeEditComponent,
    // AuthComponent,
    // LoadingSpinnerComponent,
    // AlertComponent,
    // PlaceholderDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    // FormsModule,
    AppRouting,
    HttpClientModule,
    // RecipeModule,
    // ShoppingListModule,
    SharedModule,
    CoreModules,
    // AuthModule
    // StoreModule.forRoot({shoppingList: shoppingListReducer, auth: authReducer}),
    StoreModule.forRoot(fromAppReducer.appReducer),
    EffectsModule.forRoot([AuthEffects, RecipeEffects]),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    // ShoppingListService, RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
