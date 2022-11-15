import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
// import { BehaviorSubject, catchError, Subject, tap, throwError } from "rxjs";
// import { environment } from "src/environments/environment";
// import { User } from "./user.model";
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as fromAuthActions from '../auth/store/auth.actions';


export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {

  // user = new BehaviorSubject<User>(null);

  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router, private store: Store<fromApp.AppState>) {}

  // signUp(email: string, password: string){
  //   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ environment.firebaseApiKey,
  //   {
  //     email: email,
  //     password: password,
  //     returnSecureToken: true
  //   }).pipe(catchError(this.handleError), tap(resData => {
  //     this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
  //   }));
  // }

  // logIn(email: string, password: string){
  //   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ environment.firebaseApiKey,
  //   {
  //     email: email,
  //     password: password,
  //     returnSecureToken: true
  //   }).pipe(catchError(this.handleError), tap(resData => {
  //     this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
  //   }));
  // }

  // autoLogin(){
  //   const userData: {
  //     email: string,
  //     id: string,
  //     _token: string,
  //     _tokenExpirationDate: string
  //   } = JSON.parse(localStorage.getItem('userData'));
  //   if(!userData){
  //     return;
  //   }

  //   const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

  //   if(loadedUser.token){
  //     // this.user.next(loadedUser);
  //     this.store.dispatch(
  //       new fromAuthActions.AuthenticateSuccess(
  //         {email: loadedUser.email,
  //           userId: loadedUser.id,
  //           token: loadedUser.token,
  //           expirationDate: new Date(userData._tokenExpirationDate)
  //         }
  //         )
  //       )
  //     const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
  //     this.autoLogout(expirationDuration);
  //   }

  // }

  // private handleAuthentication(email: string, userId: string, token: string, expiresIn: number){
  //   const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
  //     const user = new User(email, userId, token, expirationDate);
  //     // this.user.next(user);
  //     this.store.dispatch(new fromAuthActions.AuthenticateSuccess({email: email, userId: userId, token: token, expirationDate: expirationDate}))
  //     this.autoLogout(expiresIn * 1000);
  //     localStorage.setItem('userData', JSON.stringify(user));
  // }

  // logout(){
  //   // this.user.next(null);
  //   this.store.dispatch(new fromAuthActions.Logout());
  //   this.router.navigate(['/auth']);
  //   localStorage.removeItem('userData');
  //   if(this.tokenExpirationTimer){
  //     clearTimeout(this.tokenExpirationTimer);
  //   }
  //   this.tokenExpirationTimer = null;
  // }

  setLogoutTimer(expirationDuration: number){
    this.tokenExpirationTimer =  setTimeout(() => {
      this.store.dispatch(new fromAuthActions.Logout());
    }, expirationDuration);
  }

  clearLogoutTimer(){
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }

  // private handleError(errorResp: HttpErrorResponse){
  //   let errorMessage = 'An Unknown Error Occurred!';
  //     if(!errorResp.error || !errorResp.error.error){
  //       return throwError(() => errorMessage);
  //     }
  //     switch(errorResp.error.error.message){
  //       case 'EMAIL_EXISTS': errorMessage = "The email already exist in the system.";
  //       break;
  //       case 'EMAIL_NOT_FOUND': errorMessage = "Email is not yet registered in the system, Try sign up.";
  //       break;
  //       case 'INVALID_PASSWORD': errorMessage = "Entered password is not valid. Kindly check it again!";
  //       break;
  //     }

  //     return throwError(() => errorMessage);
  // }
}
