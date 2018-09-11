import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { StaticDataSourceOrder } from "./static.datasource.order";

@Injectable()
export class OrderRepository {
    private orders:Order[] = [];
  

    constructor(private dataSource: StaticDataSourceOrder) {
        dataSource.getOrders().subscribe(data => {
            this.orders = data;
       
        });
    }
    getOrders(): Order[] {
        return this.orders;
            
    }
    getOrder(id:number):Order[]{
        let k:Order[]=new Array();
    this.orders.filter(function(ord){
             if(ord.customerId==id)
             {
                k.push(ord);
             }
    });
    return k;
    }
    getTotal(id:number):number{
        let k:number=0;
        this.orders.filter(function(ord){
            if(ord.customerId==id){
                k=k+ord.orderTotal;
            }
        })
        return k;
    }
  
}
