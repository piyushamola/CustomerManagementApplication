import { Component } from '@angular/core';
import {Order} from '../model/order.model';
import {OrderRepository} from '../model/order.repository'
import {CustomerRepository} from '../model/customer.repository'
import {Customer} from '../model/customer.model';


@Component({
  selector: 'order',
  templateUrl: 'order.component.html',
  
})
export class OrderComponent {

  constructor(private repository: OrderRepository, private customerRepository:CustomerRepository)
 {

 }
 get orders(): Order[] {
  return this.repository.getOrders();

}
get customers():Customer[]{
  return this.customerRepository.getCustomers();
}



}