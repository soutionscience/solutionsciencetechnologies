import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
   storageKey: string = 'solution-science-jwt';
  constructor(private router: Router) { }


setToken(token: string) {
  localStorage.setItem(this.storageKey, token);

}
getToken(){
  return localStorage.getItem(this.storageKey)

}
logOut(){
  localStorage.removeItem(this.storageKey)
  this.router.navigate(['/login'])


}
isLoggedIn(){
  return this.storageKey !== null;

}
}