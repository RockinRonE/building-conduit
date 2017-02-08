import { Injectable } from '@angular/core';

@Injectable() 
export class JwtService {

	getToken(): String {
		return window.localStorage['jwtToken'];
	}

	saveToken(token: String) {
		window.localStorage['jwtToken'] = token; 
	}

	destoryToken() {
		window.localStorage.removeItem('jwtToken'); 
	}
}