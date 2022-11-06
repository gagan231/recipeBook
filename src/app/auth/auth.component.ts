import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

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

  constructor(private authService: AuthService, private router: Router, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
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

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if(this.isLoginMode){
      authObs = this.authService.logIn(email, password);
    }
    else{
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe({
      next: (respData) => {
        console.log(respData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error: errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }})

    form.reset();
  }

  onHandleError(){
    this.error = null;
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
  }
}
