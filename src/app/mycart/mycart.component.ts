import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  cartItems : any[] = [];
  myCartItemsTotalPrice : number;
  constructor(public pdtser : ProductsService, public router : Router) { }

  ngOnInit() {
    this.pdtser.getCartItems().subscribe((data:any[])=>{
      console.log(data);
      this.cartItems = data;
      this.myCartItemsTotalPrice = 0;
      for (var x in data){
        this.myCartItemsTotalPrice += data[x].cartPdtPrice;
      }
    },(error:any)=>{
      console.log(error);
      localStorage.removeItem("token");
      this.router.navigateByUrl('/login');

    });

  }
  updateCartItems(myCartId:number, myCartQty : number, myCartPdtPrice : number){
    this.pdtser.updateMyCartItems(myCartId, myCartQty, myCartPdtPrice).subscribe((data:any[])=>{
      console.log(data);
      this.cartItems = data;
      this.myCartItemsTotalPrice = 0;
      for (var x in data){
        this.myCartItemsTotalPrice += data[x].cartPdtPrice;
      }
    },(error)=>{
      console.log(error);
    });
  }
  deleteCartItems(myCartId : number){
    this.pdtser.deleteMyCartItems(myCartId).subscribe((data:any[])=>{
      console.log(data);
      this.cartItems = data;
      this.pdtser.updateCart.emit();
      this.myCartItemsTotalPrice = 0;
      for (var x in data){
        this.myCartItemsTotalPrice += data[x].cartPdtPrice;
      }

    },(error)=>{
      console.log(error);
    });
  }

}
