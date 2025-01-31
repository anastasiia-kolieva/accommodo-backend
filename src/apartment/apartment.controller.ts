import {
  Controller,
  Res,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
  HttpStatus,
} from '@nestjs/common';
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
  async getApartmentsArray(@Res() response) {
    try {
      const apartmentsArray = await this.apartmentService.getApartmentsArray();
      return response.status(HttpStatus.OK).json({
        message: 'Apartments array found successfully',
        apartmentsArray,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get(':id')
  async getApartmentById(@Res() response, @Param('id') id: string) {
    try {
      const existingApartment =
        await this.apartmentService.getApartmentById(id);
      return response.status(HttpStatus.OK).json({
        message: 'Apartment found successfully',
        existingApartment,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @UsePipes(new ValidationPipe())
  @Post()
  // @Body('apartment') — декоратор, который извлекает данные из тела запроса.
  // В данном случае из тела запроса извлекается объект под ключом 'apartment'.
  async creatApartment(
    @Res() response,
    @Body('apartment') createApartmentDto: CreateApartmentDto,
  ) {
    try {
      const newApartment =
        await this.apartmentService.creatApartment(createApartmentDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Apartment has been created successfully',
        newApartment,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete(':id')
  async deleteApartmentById(@Res() response, @Param('id') id: string) {
    try {
      const deletedApartment =
        await this.apartmentService.deleteApartmentById(id);
      return response.status(HttpStatus.OK).json({
        message: 'Apartment deleted successfully',
        deletedApartment,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
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
