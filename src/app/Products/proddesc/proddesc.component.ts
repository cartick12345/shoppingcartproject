import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proddesc',
  templateUrl: './proddesc.component.html',
  styleUrls: ['./proddesc.component.css']
})
export class ProddescComponent implements OnInit {
  productDescriptionArray : any[]=[];
  constructor(public pdtser : ProductsService, public activateroute : ActivatedRoute) { }

  ngOnInit() {
    this.activateroute.params.subscribe((params:Params)=>{
      console.log(params);
      this.pdtser.getProductDesc(params.pdtid).subscribe((data:any[])=>{
        console.log(data);
        this.productDescriptionArray = data;
      }, (error)=>{
        console.log(error);
      })
    })

  }

}
