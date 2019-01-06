import { ProductsService } from './../services/products.service';
import { UsersService } from './../services/users.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
declare var $ : any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public msg : string;
  //public users:any[]=[];
  constructor(public router : Router, public userser : UsersService, public pdtser : ProductsService) { 
    
  }

  doLogin(form:NgForm){
    //console.log(form);
    this.userser.doUserLogin(form.value).subscribe((data:any)=>{  //(data:any)(server side verification JWT DATA)
                                                                          //(data:any[])(client side verification)returned data in array format from server
      console.log(data);
      if(data.length>0){
        localStorage.setItem("token",data);
        this.pdtser.updateCart.emit();
        this.router.navigateByUrl("/");
      }
      else{
        this.msg="Invalid Login";
      }
    },(error)=>{
      console.log(error);
    });
    form.reset();
  }


  doRegister(form:NgForm){
    //console.log(form.value);
    this.userser.doUserRegistration(form.value).subscribe((data:any)=>{
      console.log(data);
      this.msg = data;
    },(error)=>{
      console.log(error);
    });
    form.reset();
  }

  ngOnInit() {
   
    $('.toggle').click(function(){
      // Switches the Icon
      $(this).children('i').toggleClass('fa-pencil');
      // Switches the forms  
      $('.form').animate({
      height: "toggle",
      'padding-top': 'toggle',
      'padding-bottom': 'toggle',
      opacity: "toggle"
      }, "slow");
    });
  }

}
