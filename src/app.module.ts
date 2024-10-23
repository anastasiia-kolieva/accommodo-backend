import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApartmentModule } from './apartment/apartment.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [ApartmentModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
