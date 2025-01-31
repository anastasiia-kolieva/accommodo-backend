import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ICustomer } from './customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private readonly customers: ICustomer[] = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Smith',
      telephone: '012345678',
      address: 'New-York',
      passport: 'KM1234',
      createdAt: new Date('2025-01-10T10:30:00Z'),
      updatedAt: new Date('2025-01-10T10:30:00Z'),
    },
    {
      id: '2',
      firstName: 'Tom',
      lastName: 'Red',
      telephone: '98765432',
      address: 'London',
      passport: 'OT4567',
      createdAt: new Date('2025-01-10T10:30:00Z'),
      updatedAt: new Date('2025-01-10T10:30:00Z'),
    },
  ];

  getCustomersArray(): ICustomer[] {
    return this.customers;
  }

  getCustomerById(id: string): ICustomer {
    return this.customers.find((custom) => custom.id === id);
  }

  creatCustomer(customer: CreateCustomerDto): ICustomer {
    const newCustomer: ICustomer = {
      id: uuidv4(),
      ...customer,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  deleteCustomerById(id: string): ICustomer {
    const deletedCustomer = this.customers.find((custom) => custom.id === id);
    this.customers.filter((custom) => custom.id !== deletedCustomer.id);
    return deletedCustomer;
  }
}
