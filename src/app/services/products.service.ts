import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  updateCart = new EventEmitter();
  constructor(public http : HttpClient) { }

  getListProducts(){
     return this.http.get("http://localhost:3000/listproducts");
  }

  getListCategories(){
   return this.http.get("http://localhost:3000/categories");
  }

  getCartItems(){
    return this.http.get("http://localhost:3000/mycart");
  }

  addProducts(data : any){
    return this.http.post("http://localhost:3000/addproducts",data);
  }

  getListProductsByCat(catid : any){
    return this.http.get("http://localhost:3000/listproductsbycat/"+catid);
  }

  addToMyCart(pdtId:number, pdtPrice:number){
    return this.http.post("http://localhost:3000/addtocart",{cartPdtId:pdtId, cartPdtPrice:pdtPrice});
  }

  getMyCartCount(){
    return this.http.get("http://localhost:3000/getmycartcount");
  }

  updateMyCartItems(myCartId : number, myCartQty : number, myCartPdtPrice:number){
    return this.http.post("http://localhost:3000/updatecart",{cartId :myCartId, cartQty :myCartQty, cartPrice:myCartPdtPrice});
  }

    deleteMyCartItems(cartId : number){
      return this.http.get("http://localhost:3000/deletecart/"+cartId)
    }

    getProductDesc(pdtid:number){
      return this.http.get("http://localhost:3000/getproddesc/"+pdtid);
    }
}
