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
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if (localStorage.getItem('userToken') != null) {
        return true;
      } else {
        this.toasterService.Error('Please login first!!!');
        localStorage.removeItem('userToken');
        this.router.navigate(['/']);
        return false;
      }
  }
}
