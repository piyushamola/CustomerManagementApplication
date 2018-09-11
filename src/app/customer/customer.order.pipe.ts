import { Pipe, PipeTransform } from '@angular/core';

import { Order } from '../model/order.model';

@Pipe({ name: 'myCustomerOrders' })
export class CustomerOrdersPipe implements PipeTransform {
  transform( value:number, orders: Order[]) {
    let k:Order[]=new Array();
     orders.filter(function(ord){
             if(ord.customerId==value)
             {
                    k.push(ord);
             }
    });
    return k;
  }
}