import { Injectable } from "@angular/core";
import { Customer } from "./customer.model";
import { StaticDataSource } from "./static.datasource.customer";
import { StaticDataSourceOrder} from "./static.datasource.order";
import {Order} from "./order.model";
import { Observable } from "../../../node_modules/rxjs";

@Injectable()
export class CustomerRepository {
    private customers: Customer[] = [];
    private orders:Order[]=[];
  

    constructor(private dataSource: StaticDataSource, private dataSourceOrder: StaticDataSourceOrder) {
        dataSource.getCustomers().subscribe(data => {
            this.customers = data;
            
        });

        dataSourceOrder.getOrders().subscribe(dataOrder=>{
              this.orders=dataOrder;
        });
    }
    getCustomers(): Customer[] {
        return this.customers;
            
    }
    getOrders():Order[]{
       return  this.orders;
    }
    addCustomer(firstName:string,lastName:string, city:string):Observable<Customer[]>{
       return  this.dataSource.addCustomers(firstName,lastName,city);

}
getCustomer(id: number): Customer {
    return this.customers.find(p => p.id == id);
}
}