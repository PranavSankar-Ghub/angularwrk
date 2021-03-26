import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardnewService implements CanActivate {
  

  constructor( private router:Router) { }
  canActivate(snapshot:ActivatedRouteSnapshot,route:RouterStateSnapshot):boolean{
    if(this.LoggedIn()){
      return true

    }
    this.router.navigate(["userwrk/loginwrk"])
    return false
    
  }
  LoggedIn(){
    let status=false
    if(localStorage.getItem("isLoggedIn")=="true"){
      status=true
    }
    else{
      status=false
    }
    return status
  }

}
