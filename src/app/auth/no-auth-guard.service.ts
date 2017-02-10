import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UserService } from '../shared'; 

@Injectable()
export class NoAuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private userService: UserService
		) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
		): Observable<boolean> {
			console.log("can activate!"); 
		// i.e. if isAuthenticated is false, then set canActivate to true
		// We only want non-auth users to be able to access certain pages
		return this.userService.isAuthenticated.take(1).map(bool => !bool); 
	}
}