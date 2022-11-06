import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

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

  constructor(private dStorage: DataStorageService, private authService: AuthService) {}

  onSaveData(){
    this.dStorage.storeRecipes();
  }

  onFetchData(){
    this.dStorage.fetchRecipes().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnInit(): void {
      this.userSubs = this.authService.user.subscribe(user => {
        this.isAuthenticated = !!user;
      });
  }

  ngOnDestroy(): void {
      this.userSubs.unsubscribe();
  }

}
