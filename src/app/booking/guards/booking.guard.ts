import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanDeactivateFn } from '@angular/router';


export class BookingGuard implements CanDeactivate<BookingComponent> {
  
  constructor(private _snackBar: MatSnackBar) {

  }

  canDeactivate(component: BookingComponent, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
  
      if(component.bookingForm.pristine){
        return component.bookingForm.pristine;
      } else {
        this._snackBar.open('You have unsaved changes!', 'DISCARD')
        return false;
      }


  }
}
