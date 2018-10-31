import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ToasterService } from './toaster.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private toasterService:ToasterService, public router:Router){}
  private login_token = 'userToken';
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      
      if(state.url == '/vender-dashboard'){
          this.login_token = 'vendorToken';
      }

      
      if (localStorage.getItem(this.login_token) != null) {
        return true;
      } else {
        this.toasterService.Error('Please login first !!');
        localStorage.removeItem(this.login_token);
        this.router.navigate(['/']);
        return false;
      }
  }
}
