import { IApartment } from './apartment.interface';
import { TypeApart, Status, Currency } from './apartment.interface';

export class Apartment implements IApartment {
  id: string;
  apartmentNumber: string;
  type: TypeApart = TypeApart.SINGLE; // По умолчанию SINGLE
  status: Status = Status.AVAILABLE;
  price: number = 0;
  currency: Currency = Currency.EUR;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
