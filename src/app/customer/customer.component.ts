import { Component } from '@angular/core';
import { CustomerRepository } from "../model/customer.repository";
import { Customer } from "../model/customer.model";
import { OrderRepository } from '../model/order.repository';
import {Order} from "../model/order.model";


@Component({
  selector: 'customer',
  templateUrl: 'customer.component.html',
  styleUrls: ['./customer.component.css']
  
})
export class CustomerComponent {

  constructor(private repository: CustomerRepository, private orderRepository:OrderRepository)
 {

 }
 get customers(): Customer[] {
  return this.repository.getCustomers();

}
get orders():Order[]{
  return this.orderRepository.getOrders();
}

insertCustomer(firstName:string,lastName:string,city:string){
  this.repository.addCustomer(firstName,lastName,city);
}


}
