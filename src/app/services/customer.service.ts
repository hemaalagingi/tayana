import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getCustomers() {
    return this.httpClient.get<Customer[]>(this.apiUrl);
  }

  createCustomer(customer: Customer) {
    return this.httpClient.post<any>(this.apiUrl , customer);
  }


}
