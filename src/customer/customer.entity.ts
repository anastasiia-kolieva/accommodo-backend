import { ICustomer } from './customer.interface';

export class Customer implements ICustomer {
  id: string;
  firstName: string;
  lastName: string;
  telephone: string;
  address: string;
  passport: string;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
