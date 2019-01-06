import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-listproductsbycatwise',
  templateUrl: './listproductsbycatwise.component.html',
  styleUrls: ['./listproductsbycatwise.component.css']
})
export class ListproductsbycatwiseComponent implements OnInit {
  products:any[] = [];
  constructor(public acivateroute : ActivatedRoute, public pdtser : ProductsService) { }

  ngOnInit() {
    this.acivateroute.params.subscribe((params : Params)=>{
      console.log(params);

      this.pdtser.getListProductsByCat(params.catid).subscribe((data:any[])=>{
        console.log(data);
        this.products = data;

      },(error)=>{
        console.log(error);
      });

    })
  }

}
