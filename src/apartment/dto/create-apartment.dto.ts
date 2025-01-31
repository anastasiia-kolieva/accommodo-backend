import { IsEnum, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { TypeApart, Status, Currency } from '../apartment.interface';

// DTO (Data Transfer Obgect) -это CreateApartmentDto
// С помощью него мы можем контролировать всё что "пролетает" (все данные

// затянула пакеты для валиданции npm i --save class-validator class-transformer
// чтобы навешивать необходимые для проверки декораторы (@Min,...) на DTO
export class CreateApartmentDto {
  @IsString({ message: 'Apartment number must be a string!' })
  @IsNotEmpty({ message: 'Apartment number can not be empty string!' })
  apartmentNumber: string;

  @IsEnum(TypeApart, { message: 'Incorrect type of apartment!' })
  type: TypeApart;

  @IsEnum(Status, { message: 'Incorrect type of status!' })
  status: Status;

  @IsInt({ message: 'Price must be a number!' })
  @Min(0, { message: 'Price must be more than 0!' })
  price: number;

  @IsEnum(Currency, { message: 'Incorrect type of currency!' })
  currency: Currency;
}
