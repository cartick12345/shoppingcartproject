import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  catArray:any[]=[];
  selectImg : any;
  constructor(public pdtser : ProductsService) { }

  selectedImage(event:any){
    //console.log(event);
    this.selectImg = event.target.files[0];
    //console.log(this.selectImg);
  }

  createProducts(form:NgForm){
      //console.log(form.value);
      var fd = new FormData();
      fd.append("pdtCatId",form.value.pdtCat);
      fd.append("pdtName",form.value.pdtName);
      fd.append("pdtPrice",form.value.pdtPrice);
      fd.append("pdtDesc",form.value.pdtDesc);
      fd.append("pdtImg",this.selectImg, "productImg");
      this.pdtser.addProducts(fd).subscribe((data:any)=>{
        console.log(data);
      },(error:any)=>{
        console.log(error);
      });
  }

  ngOnInit() 
  {
    this.pdtser.getListCategories().subscribe((data: any) => {
      this.catArray = data;
    }, (error) => {
      console.log(error);
    });

}
}
