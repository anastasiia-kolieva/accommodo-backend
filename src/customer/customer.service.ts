import { Injectable } from '@nestjs/common';
import { ICustomer } from './customer.interface';

@Injectable()
export class CustomerService {
  private customers: ICustomer[] = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Smith',
      telephone: '012345678',
      address: 'New-York',
      passport: 'KM1234',
    },
    {
      id: '2',
      firstName: 'Tom',
      lastName: 'Red',
      telephone: '98765432',
      address: 'London',
      passport: 'OT4567',
    },
  ];

  getCustomersArray(): ICustomer[] {
    return this.customers;
  }

  getCustomerById(id: string): ICustomer {
    return this.customers.find((custom) => custom.id === id);
  }

  creatCustomer(customer: ICustomer): ICustomer {
    this.customers.push(customer);
    return customer;
  }

  deleteCustomerById(id: string): ICustomer {
    const deletedCustomer = this.customers.find((custom) => custom.id === id);
    this.customers.filter((custom) => custom.id !== deletedCustomer.id);
    return deletedCustomer;
  }
}
