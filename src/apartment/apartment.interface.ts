export enum TypeApart {
  SINGLE = 'single', // (Одноместный номер)
  DOUBLE = 'double', // (Двухместный номер)
  TWIN = 'twin', // (Номер с двумя кроватями)
  TRIPLE = 'triple', // (Трехместный номер)
  STUDIO = 'studio', // (Студия)
  DELUXE = 'deluxe', // (Делюкс номер)
}

export enum Status {
  AVAILABLE = 'available',
  OCCUPIED = 'occupied',
  RESERVED = 'reserved',
  CLEANING = 'cleaning',
  OUT_OF_SERVICE = 'outOfService',
  INSPECTION = 'inspection',
  BLOCKED = 'blocked',
}

export enum Currency {
  EUR = 'eur',
  USD = 'usd',
  UAH = 'uah',
}

export interface IApartment {
  id: string;
  apartmentNumber: string;
  type: TypeApart;
  status: Status;
  price: number;
  currency: Currency;
  createdAt: Date;
  updatedAt: Date;
}
