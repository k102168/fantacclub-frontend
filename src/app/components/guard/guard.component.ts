import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class GuardComponent implements CanActivate {

  constructor(private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    //his.bus.subscribe(this.events.received.data.isUserExpired.success, this.setIsUserExpired, this);
    if (localStorage.getItem('currentUser')) {
   
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['compadmin'], {queryParams: {next: route.url.join('/')}});
    return false;
  }

}
