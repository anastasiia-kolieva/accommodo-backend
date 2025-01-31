import {
  Controller,
  Get,
  Post,
  Delete,
  HttpCode,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ICustomer } from './customer.interface';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('apartment')
export class ApartmentController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  @HttpCode(200)
  getCustomersArray(): ICustomer[] {
    return this.customerService.getCustomersArray();
  }

  @Get(':id')
  @HttpCode(200)
  getCustomerById(@Param('id') id: string): ICustomer {
    return this.customerService.getCustomerById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(200)
  creatCustomer(@Body('customer') customer: CreateCustomerDto): ICustomer {
    return this.customerService.creatCustomer(customer);
  }

  @Delete(':id')
  @HttpCode(200)
  deleteCustomerById(@Param('id') id: string): ICustomer {
    return this.customerService.deleteCustomerById(id);
  }
}
