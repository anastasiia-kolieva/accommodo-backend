import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString({ message: 'Customer firstName must be a string!' })
  @IsNotEmpty({ message: 'Customer firstName can not be empty string!' })
  firstName: string;

  lastName: string;

  email: string;

  telephone: string;

  address: string;

  passport: string;
}
