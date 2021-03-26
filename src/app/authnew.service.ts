import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthnewService {

  constructor() { }
  logout(){
    localStorage.setItem("isLoggedIn","false")
    localStorage.removeItem("username")

  }
}
