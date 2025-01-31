import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { IApartment } from './apartment.interface';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Injectable()
//Injectable говорит что этот класс инжектируемый, тоесть его можно  добавлять в провайдер и можно в дальнейшем его использовать в проекте
//чтоб его можно было переиспользовать и добавлять в провайдеры в Модуле
export class ApartmentService {
  private apartments: IApartment[] = [];

  getApartmentsArray(): IApartment[] {
    return this.apartments;
  }

  getApartmentById(id: string): IApartment {
    return this.apartments.find((apart) => apart.id === id);
  }

  // DTO (Data Transfer Obgect) -это CreateApartmentDto
  // С помощью него мы можем контролировать всё что "пролетает" (все данные)
  creatApartment(apartment: CreateApartmentDto): IApartment {
    const newApartment: IApartment = {
      id: uuidv4(),
      ...apartment,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.apartments.push(newApartment);
    return newApartment;
  }

  deleteApartmentById(id: string): IApartment {
    const deletedApartment = this.apartments.find((apart) => apart.id === id);
    this.apartments.filter((apart) => apart.id !== deletedApartment.id);
    return deletedApartment;
  }
}
