import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Module({
  controllers: [],
  providers: [CustomerService],
})
export class CustomerModule {}
