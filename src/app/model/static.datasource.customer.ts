import { Injectable } from "@angular/core";
import { Customer } from "./customer.model";
import {Observable, from } from 'rxjs';



@Injectable()
export class StaticDataSource {
    private customer: Customer[] = [
        new Customer(1,"Piyush","Amola","Kormangala","Bangalore"),
        new Customer(2,"Piyush","Amola","Kormangala","Bangalore"),
        new Customer(3,"Piyush","Amola","Kormangala","Bangalore"),
        new Customer(4,"Piyush","Amola","Kormangala","Bangalore"),
        new Customer(5,"Piyush","Amola","Kormangala","Bangalore"),
        new Customer(6,"Piyush","Amola","Kormangala","Bangalore")
      
        
     
    ];

    getCustomers(): Observable<Customer[]> {
        return from([this.customer]);
    }
   
    addCustomers(firstName:string,lastName:string,city:string):Observable<Customer[]> {
        var k=this.customer.length+1;
       this.customer.push({
           id:k,
           firstName:firstName,
           lastName:lastName,
           city:city,
        
           

       });
       return from([this.customer]);
        
    
    }
}
