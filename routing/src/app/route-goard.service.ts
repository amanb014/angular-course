import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AppRouteGuard implements CanActivate, CanActivateChild {

	constructor(private auth: AuthService,
						private router: Router ) { }
	canActivate(route: ActivatedRouteSnapshot, 
		routerState: RouterStateSnapshot,
		) : Observable<boolean> | Promise<boolean> | boolean {

			return this.auth.isAuthorized()
				.then((status) => {
					if(status) { return true; }
					else {
						this.router.navigate(['/'])
					}
				})
		}

	canActivateChild(route: ActivatedRouteSnapshot, 
		routerState: RouterStateSnapshot,
		) : Observable<boolean> | Promise<boolean> | boolean {
			
			return this.canActivate(route, routerState);
	}

}