import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take, tap } from "rxjs";
import { AuthService } from "./auth.service";
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router, private store: Store<fromApp.AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.store.select('auth').pipe(
        // return this.authService.user.pipe(
        take(1),
        //use for ngRx
        map(authState => {
          return authState.user;
        }),
        //use for ngRx
        map(user => {
          const isAuth = !!user
          if(isAuth){
            return true;
          }

          return this.router.createUrlTree(['/auth']);
        })
        //, tap(isAuth => {
        //   if(!isAuth){
        //     this.router.navigate(['/auth']);
        //   }
        // })
      );
  }
}
