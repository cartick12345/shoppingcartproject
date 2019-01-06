import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const simpleObservable = new Observable((observar)=>{
      var i:number=1;
      setInterval(()=>{
        observar.next("data"+i);
        i++;
        if(i==10){
          observar.complete();//observer.error("error"); to show the error
        }
      },1000);
      
    });

    simpleObservable.subscribe((data:any)=>{
      console.log(data);
    }, (error:any)=>{
      console.log(error);
    }, ()=>{
      console.log("completed");
    });
  }

  

}
