import { UsersService } from './services/users.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class TokeninterceptorService implements HttpInterceptor {

  constructor(public userser : UsersService) { }
  intercept (req, next){
      var tokenizedreq = req.clone({
        setHeaders : {
          Authorization :(this.userser.getMyKey())? this.userser.getMyKey(): ""
        }
      });
      //console.log(tokenizedreq);
      return next.handle(tokenizedreq);
  }
}
