import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, {static: true}) alertBox: PlaceholderDirective;

  private closeSubs: Subscription;
  private storeSubs: Subscription;

  constructor(private authService: AuthService, private router: Router, private viewContainerRef: ViewContainerRef, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.storeSubs = this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
      if(this.error){
        this.showErrorAlert(this.error);
      }
    });
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    // console.log(form.value);
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    // let authObs: Observable<AuthResponseData>;

    // this.isLoading = true;

    if(this.isLoginMode){
      // authObs = this.authService.logIn(email, password);
      this.store.dispatch(new AuthActions.LoginStart({email: email, password: password}));
    }
    else{
      // authObs = this.authService.signUp(email, password);
      this.store.dispatch(new AuthActions.SignupStart({email: email, password: password}));
    }



    // authObs.subscribe({
    //   next: (respData) => {
    //     console.log(respData);
    //     this.isLoading = false;
    //     this.router.navigate(['/recipes']);
    //   },
    //   error: errorMessage => {
    //     console.log(errorMessage);
    //     this.error = errorMessage;
    //     this.showErrorAlert(errorMessage);
    //     this.isLoading = false;
    //   }})

    form.reset();
  }

  onHandleError(){
    // this.error = null;
    this.store.dispatch(new AuthActions.ClearError());
  }

  private showErrorAlert(message: string){
    const hostViewRef = this.alertBox.viewContainerRef;
    hostViewRef.clear();

    const compRef = hostViewRef.createComponent(AlertComponent);

    compRef.instance.message = message;
    this.closeSubs = compRef.instance.close.subscribe(() => {
      this.closeSubs.unsubscribe();
      hostViewRef.clear();
    });
  }

  ngOnDestroy(): void {
      if(this.closeSubs){
        this.closeSubs.unsubscribe();
      }
      if(this.storeSubs){
        this.storeSubs.unsubscribe();
      }
  }
}
