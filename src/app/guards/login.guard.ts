// import { CanActivateFn } from '@angular/router';
// import { LoginService } from '../login/login.service';

// export const loginGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { LoginService } from "../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class loginGuard implements CanActivate, CanLoad {
  constructor(private loginService: LoginService, private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
    if(!this.loginService.isLoggedIn){
      this.route.navigate(['/login']);
    }
    return this.loginService.isLoggedIn;
  }

  canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    return this.loginService.isLoggedIn;
  }
}