import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../../login/login.service';


@Injectable({
  providedIn: 'root'
})
export class roomGuard {
   constructor(private loginService: LoginService, private route: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
    // if(!this.loginService.isLoggedIn){
    //   this.route.navigate(['/login']);
    // }
    return this.loginService.isAdmin;
  }
}