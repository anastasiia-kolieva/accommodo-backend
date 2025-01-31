import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Apartment } from './schemas/apartment.schema';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Injectable()
//Injectable говорит что этот класс инжектируемый, тоесть его можно  добавлять в провайдер и можно в дальнейшем его использовать в проекте
//чтоб его можно было переиспользовать и добавлять в провайдеры в Модуле
export class ApartmentService {
  constructor(
    @InjectModel(Apartment.name) private apartmentModel: Model<Apartment>,
  ) {}

  async getApartmentsArray(): Promise<Apartment[]> {
    const apartmentsArray = await this.apartmentModel.find();
    if (!apartmentsArray || apartmentsArray.length == 0) {
      throw new NotFoundException('Apartments array not found!');
    }
    return apartmentsArray;
  }

  async getApartmentById(id: string): Promise<Apartment> {
    const existingApartment = await this.apartmentModel.findById(id).exec();
    if (!existingApartment) {
      throw new NotFoundException(`Apartment #${id} not found`);
    }
    return existingApartment;
  }

  // DTO (Data Transfer Obgect) -это CreateApartmentDto
  // С помощью него мы можем контролировать всё что "пролетает" (все данные)
  async creatApartment(
    createApartmentDto: CreateApartmentDto,
  ): Promise<Apartment> {
    const newApartment = {
      id: uuidv4(),
      ...createApartmentDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const createdApartment = new this.apartmentModel(newApartment);
    return createdApartment.save();
  }

  // Сделать позже!!!
  //   async updateStudent(studentId: string, updateStudentDto: UpdateStudentDto): Promise<IStudent> {
  //     const existingStudent = await        this.studentModel.findByIdAndUpdate(studentId, updateStudentDto, { new: true });
  //    if (!existingStudent) {
  //      throw new NotFoundException(`Student #${studentId} not found`);
  //    }
  //    return existingStudent;
  // }

  async deleteApartmentById(id: string): Promise<Apartment> {
    const deletedApartment = await this.apartmentModel.findByIdAndDelete(id);
    return deletedApartment;
  }
}
