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

@Controller('apartment')
export class ApartmentController {
  constructor(private apartmentService: ApartmentService) {}

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
