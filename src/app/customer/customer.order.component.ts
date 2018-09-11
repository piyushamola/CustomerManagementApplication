import { Component } from '@angular/core';

import {ActivatedRoute } from '@angular/router';
import {CustomerRepository} from '../model/customer.repository'
import {Customer} from '../model/customer.model'
import { OrderRepository } from '../model/order.repository';
import {Order} from '../model/order.model';

@Component({
  selector: 'customerorder',
  templateUrl: 'customer.order.component.html'
 
  
})
export class CustomerOrderComponent {

 private id:number;
 private sub:any;

  constructor(private _Activatedroute:ActivatedRoute, private repository: CustomerRepository, private orderRepository:OrderRepository )
 {
    
 }
 ngOnInit() {
 
    this.sub=this._Activatedroute.params.subscribe(params => { 
    this.id = params['id']; 
     
     
    });
}
 
ngOnDestroy() {
    this.sub.unsubscribe();
}
 
get Customer():Customer{
return this.repository.getCustomer(this.id);
}

get Orders():Order[]{
    return this.orderRepository.getOrder(this.id);
}
get Total():number{
    return this.orderRepository.getTotal(this.id);
}

}
