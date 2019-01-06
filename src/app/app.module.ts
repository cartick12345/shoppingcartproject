import { TokeninterceptorService } from './tokeninterceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Headers/header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ListproductsComponent } from './Products/listproducts/listproducts.component';
import { FooterComponent } from './Footers/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ObserverComponent } from './examples/observer/observer.component';
import { MycartComponent } from './mycart/mycart.component';
import { AuthGuard } from './auth.guard';
import { AddproductsComponent } from './Products/addproducts/addproducts.component';
import { ListproductsbycatwiseComponent } from './Products/listproductsbycatwise/listproductsbycatwise.component';
import { ProddescComponent } from './Products/proddesc/proddesc.component';
import { PaymentComponent } from './payment/payment.component';

const myRoutes :  Routes = [
  {path:'',component:ListproductsComponent},
  {path:'login', component:LoginComponent},
  {path:'addproducts', component:AddproductsComponent},
  {path:'mycart', component:MycartComponent, canActivate:[AuthGuard]},
  {path:'categories', redirectTo:'/', pathMatch:'full'},
  {path:'categories/:catid', component:ListproductsbycatwiseComponent},
  {path:'productdesc/:pdtid', component:ProddescComponent},
  {path:'payment', component : PaymentComponent },
  {path:'**', component:NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    ListproductsComponent,
    FooterComponent,
    LoginComponent,
    NotfoundComponent,
    ObserverComponent,
    MycartComponent,
    AddproductsComponent,
    ListproductsbycatwiseComponent,
    ProddescComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [{ provide : HTTP_INTERCEPTORS, useClass : TokeninterceptorService, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
