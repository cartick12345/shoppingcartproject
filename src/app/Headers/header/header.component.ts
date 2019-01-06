import { ProductsService } from './../../services/products.service';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems : number = 0;
  constructor(public userser : UsersService, public router : Router, public pdtser : ProductsService) { }
getMyCartCount(){
  
    this.pdtser.getMyCartCount().subscribe((data:number)=>{
      this.cartItems = data;
    },(error)=>{
      console.log(error);
    });

}
  ngOnInit() {
    this.userser.isLoggedIn();
    this.getMyCartCount(); // header component loading iself update the cart count
    this.pdtser.updateCart.subscribe((data:any)=>{
      //console.log(data);
      this.getMyCartCount();
      /*this.pdtser.getMyCartCount().subscribe((data:number)=>{
        this.cartItems = data;
      },(error)=>{
        console.log(error);
      })*/
      
    })
  }
  doLogout(){
    localStorage.removeItem("token");
    this.cartItems = 0;
      this.router.navigateByUrl("/");
  }

}
