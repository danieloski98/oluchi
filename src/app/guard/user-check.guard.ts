import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCheckGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

      const user = localStorage.getItem('user');
      console.log(user);
      if (user === null) {
        this.router.navigate(['/login']);
        alert("You have to login");
        return false;
      } else {
        return true;
      }

  }
}
