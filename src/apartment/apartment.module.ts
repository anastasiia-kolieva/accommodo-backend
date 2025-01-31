import { Module } from '@nestjs/common';
import { ApartmentController } from './apartment.controller';
import { ApartmentService } from './apartment.service';

// Модуль нужен для того чтобы "скреплять" Контроллер и Сервис(может быть много коннтроллеров и сервисов)
// Модуль это строительный блок проекта

@Module({
  controllers: [ApartmentController],
  providers: [ApartmentService],
})
export class ApartmentModule {}
