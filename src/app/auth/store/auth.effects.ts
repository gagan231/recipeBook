import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as AuthActions from '../store/auth.actions';
import { switchMap, catchError, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { AuthService } from '../auth.service';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

const handleAuthentication = (expiresIn: number, email: string, localId: string, token: string) => {
  const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
  const user = new User(email, localId, token, expirationDate);
  localStorage.setItem('userData', JSON.stringify(user));
  return new AuthActions.AuthenticateSuccess(
    {
      email: email,
      userId: localId,
      token: token,
      expirationDate: expirationDate,
      redirect: true
    });
};

const handleError = (errorResp: any) => {
  let errorMessage = 'An Unknown Error Occurred!';
        if(!errorResp.error || !errorResp.error.error){
          return of(new AuthActions.AuthenticateFail(errorMessage));
        }
        switch(errorResp.error.error.message){
          case 'EMAIL_EXISTS': errorMessage = "The email already exist in the system.";
          break;
          case 'EMAIL_NOT_FOUND': errorMessage = "Email is not yet registered in the system, Try sign up.";
          break;
          case 'INVALID_PASSWORD': errorMessage = "Entered password is not valid. Kindly check it again!";
          break;
        }
        return of(new AuthActions.AuthenticateFail(errorMessage));
}

@Injectable()
export class AuthEffects {

  authSignUp = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.SIGNUP_START),
    switchMap((signupAction: AuthActions.SignupStart) => {
      return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ environment.firebaseApiKey,
    {
      email: signupAction.payload.email,
      password: signupAction.payload.password,
      returnSecureToken: true
    }).pipe(
      tap(resData => {
        this.authService.setLogoutTimer(+resData.expiresIn * 1000);
      }),
      map(resData => {
        return handleAuthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken)
      }),
      catchError(errorResp => {
        return handleError(errorResp)
      })
    )
    })
  ))

  authLogin = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ environment.firebaseApiKey,
    {
      email: authData.payload.email,
      password: authData.payload.password,
      returnSecureToken: true
    }).pipe(
      tap(resData => {
        this.authService.setLogoutTimer(+resData.expiresIn * 1000);
      }),
      map(resData => {
        // const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        // return new AuthActions.AuthenticateSuccess({email: resData.email, userId: resData.localId, token: resData.idToken, expirationDate: expirationDate});
        return handleAuthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken)
      }),
      catchError(errorResp => {
        // let errorMessage = 'An Unknown Error Occurred!';
        // if(!errorResp.error || !errorResp.error.error){
        //   return of(new AuthActions.AuthenticateFail(errorMessage));
        // }
        // switch(errorResp.error.error.message){
        //   case 'EMAIL_EXISTS': errorMessage = "The email already exist in the system.";
        //   break;
        //   case 'EMAIL_NOT_FOUND': errorMessage = "Email is not yet registered in the system, Try sign up.";
        //   break;
        //   case 'INVALID_PASSWORD': errorMessage = "Entered password is not valid. Kindly check it again!";
        //   break;
        // }
        // return of(new AuthActions.AuthenticateFail(errorMessage));
        return handleError(errorResp)

      })
    )
    })
  )
  );

  authRedirect = createEffect(() => this.actions$.pipe(ofType(AuthActions.AUTHENTICATE_SUCCESS),
  tap((authSuccessAction: AuthActions.AuthenticateSuccess) => {
    if(authSuccessAction.payload.redirect){
      this.router.navigate(['/']);
    }
  })), {dispatch: false});

  authLogout = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => {
      this.authService.clearLogoutTimer();
      localStorage.removeItem('userData');
      this.router.navigate(['/auth']);
    })
    ), {dispatch: false}
  );


  autoLogin = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.AUTO_LOGIN),
    map(() => {
      const userData: {
        email: string,
        id: string,
        _token: string,
        _tokenExpirationDate: string
      } = JSON.parse(localStorage.getItem('userData'));
      if(!userData){
        return;
      }

      const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

      if(loadedUser.token){
        // this.user.next(loadedUser);
        const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        this.authService.setLogoutTimer(+expirationDuration);
          return new AuthActions.AuthenticateSuccess(
            {email: loadedUser.email,
              userId: loadedUser.id,
              token: loadedUser.token,
              expirationDate: new Date(userData._tokenExpirationDate),
              redirect: false
            }
            )
        // const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        // this.autoLogout(expirationDuration);
      }
      return { type: 'DUMMY'};
    })
  ), {dispatch: true});

  constructor(private actions$: Actions, private http: HttpClient, private router: Router, private authService: AuthService) {}
}
