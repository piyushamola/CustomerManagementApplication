import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CustomerModule} from "./customer/customer.module";
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent} from './customer/order.component';
import { OrderModule} from './customer/order.module';
import {CustomerOrderComponent} from './customer/customer.order.component';
import { HeaderComponent } from './customer/header.component';

const appRoutes: Routes = [

  {
      path: 'customer',
      component: CustomerComponent
  },
  {
       path:'customerorders/:id',
       component: CustomerOrderComponent
  },
  {path:'order',component:OrderComponent},
  {path: '**',redirectTo:'', component:CustomerComponent}
  ];


@NgModule({

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CustomerModule,
    OrderModule            
],
  declarations: [
    AppComponent
  ],
 
 
  bootstrap: [AppComponent]
})
export class AppModule { }





