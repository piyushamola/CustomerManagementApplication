import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import {Observable, from } from 'rxjs';



@Injectable()
export class StaticDataSourceOrder {
    private order: Order[] = [
        new Order("Bat",500,2,1000,1),
        new Order("Bat",500,2,1000,1),
        new Order("Bat",500,2,1000,2),
        new Order("Bat",500,2,1000,2),
        new Order("Bat",500,2,1000,3),
        new Order("Bat",500,2,1000,3),
        new Order("Bat",500,2,1000,3),
        new Order("Bat",500,2,1000,4),
        new Order("Bat",500,2,1000,5),
        new Order("Bat",500,2,1000,6)


   
      
        
     
    ];
    
    getOrders(): Observable<Order[]> {
        return from([this.order]);
    }

  
  
}
