import { UsersService } from './../../services/users.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit, OnDestroy {
  //public enableButton : boolean = true;
 products:any[]=[];
  public subscribe : Subscription;
  constructor(public pdtService : ProductsService, public userser : UsersService) { }
  addToCart(pdtId:number, pdtPrice:number){
    
    if(this.userser.isLoggedIn()){

      this.pdtService.addToMyCart(pdtId,pdtPrice).subscribe((data)=>{
        console.log(data);
        this.pdtService.updateCart.emit("added");//after received response from back end then emit the cart count
      }, (error)=>{
        console.log(error);
      })

      
      // this.enableButton = false;
    }
    else{
      alert("please login and then add");
    }
    
  }

  ngOnInit() {
  this.subscribe = this.pdtService.getListProducts().subscribe((data:any[])=>{
      console.log(data);
        this.products = data;
    }, (error:any)=>{
      console.log(error);
    },()=>{
      console.log("completed");
    });
    //console.log("test");
  }
ngOnDestroy(){
  this.subscribe.unsubscribe();
}
}
