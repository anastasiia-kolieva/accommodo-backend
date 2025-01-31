import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApartmentController } from './apartment.controller';
import { ApartmentService } from './apartment.service';
import { Apartment, ApartmentSchema } from './schemas/apartment.schema';

// Модуль нужен для того чтобы "скреплять" Контроллер и Сервис(может быть много коннтроллеров и сервисов)
// Модуль это строительный блок проекта

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Apartment.name, schema: ApartmentSchema },
    ]),
  ],
  controllers: [ApartmentController],
  providers: [ApartmentService],
})
export class ApartmentModule {}
