import { UsersService } from './services/users.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public userser : UsersService, public router : Router){}
  canActivate():boolean {
    if(this.userser.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigateByUrl("/login");
      return false;
    }
    
  }
}
