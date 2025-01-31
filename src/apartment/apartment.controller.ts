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
import { IApartment } from './apartment.interface';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';

// Контроллер нужен лиш для того чтоб он обрабатывал входящие/исходящие запросы
// Может принять данные, body и тд./ может отдать данные, ошибку и т.д.
// здесь нельзя делать бизнес логику (запросы к базе данных, получать данные с других мест).
// После Контроллера "идём" в Сервис

@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  // @Get это пример декоратора
  // декораторы-это спец.функции, которые добавляют метаданные классам и методам
  // (тоесть декоратор можно добавить либо к классу либо к функции, к методу и тем самым
  // на неё навесить доп.функционал)

  @Get()
  @HttpCode(200)
  getApartmentsArray(): IApartment[] {
    return this.apartmentService.getApartmentsArray();
  }

  @Get(':id')
  @HttpCode(200)
  getApartmentById(@Param('id') id: string): IApartment {
    return this.apartmentService.getApartmentById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(200)
  // @Body('apartment') — декоратор, который извлекает данные из тела запроса.
  // В данном случае из тела запроса извлекается объект под ключом 'apartment'.
  creatApartment(@Body('apartment') apartment: CreateApartmentDto): IApartment {
    return this.apartmentService.creatApartment(apartment);
  }

  @Delete(':id')
  @HttpCode(200)
  deleteApartmentById(@Param('id') id: string): IApartment {
    return this.apartmentService.deleteApartmentById(id);
  }
}

// Миддлвейр Middleware - функции которые выполняются перед тем как запрос достигнет контроллера
// Придумать где можно применить/поюзать мидлвар!!!!!!

//Пайпы Pipes - преобразуют входные данные перед их обработкой в контроллере
// Поидеи Пайп нужно поставить на проверку входящих данных id (проверять число или строка приходит)
// нужно подумать о применении Пайп!!!!

// Горды Guards - так же используется для защиты методов/ендпоинтов
// используются с помощью декоратора @UseGuards()
// часто используется при авторизации (админ и т.д.)

// Интерсептеры  Interceptors позволяют изменять ответы до их отправки пользователю
//@UseInterceptors()
//

// Посмотреть документацию Request lifecycle
