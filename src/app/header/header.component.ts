import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { Subscription, map } from "rxjs";
// import { AuthService } from "../auth/auth.service";
// import { DataStorageService } from "../shared/data-storage.service";
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipeActions from '../recipe/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy{
  collapsed = false;

  // @Output() selectedMenu = new EventEmitter<string>();

  // onSelectedMenu(type: string){
  //   this.selectedMenu.emit(type);
  // }

  isAuthenticated = false;
  private userSubs: Subscription

  constructor(
    // private dStorage: DataStorageService,
    // private authService: AuthService,
    private store: Store<fromApp.AppState>) {}

  onSaveData(){
    // this.dStorage.storeRecipes();
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData(){
    // this.dStorage.fetchRecipes().subscribe();
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout(){
    // this.authService.logout();
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnInit(): void {
      this.userSubs = this.store.select('auth').pipe(map(authState => authState.user)).subscribe(user => {
        // this.userSubs = this.authService.user.subscribe(user => {
        this.isAuthenticated = !!user;
      });
  }

  ngOnDestroy(): void {
      this.userSubs.unsubscribe();
  }

}
