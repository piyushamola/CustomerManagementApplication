import { Pipe, PipeTransform } from '@angular/core';

import { Order } from '../model/order.model';

@Pipe({ name: 'myOrders' })
export class OrdersPipe implements PipeTransform {
  transform( value:number, orders: Order[]) {
      let k=0;
     orders.filter(function(ord){
             if(ord.customerId==value)
             {
                    k++;
             }
    });
    return k;
  }
}