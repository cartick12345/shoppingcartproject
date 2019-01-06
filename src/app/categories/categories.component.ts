import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryArray:any[]=[];
  constructor(public pdtser : ProductsService) { }

  ngOnInit() {
    this.pdtser.getListCategories().subscribe((data:any[])=>{
      console.log(data);
      this.categoryArray = data;

    },(error:any)=>{
      console.log(error);
    });
  }

}
