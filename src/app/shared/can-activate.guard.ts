import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn) return true;

    this.authService.redirectUrl = state.url;

    this.router.navigate([('login')]).then()

    return false;
  }

}
