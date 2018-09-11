import { NgModule } from "@angular/core";
import { CustomerRepository } from "./customer.repository";
import { StaticDataSource } from "./static.datasource.customer";
// import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
// import { RestDataSource } from "./rest.datasource";
import {StaticDataSourceOrder} from "./static.datasource.order";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [HttpModule],
    providers: [CustomerRepository,OrderRepository,
       StaticDataSource, Order, StaticDataSourceOrder ]

})
export class ModelModule { }
