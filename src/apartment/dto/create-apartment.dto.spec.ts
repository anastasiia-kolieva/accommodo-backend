import { plainToInstance } from 'class-transformer';
import { CreateApartmentDto } from './create-apartment.dto';
import { validate } from 'class-validator';
import { TypeApart } from '../apartment.interface';

// Тесты на DTO чтоб проверять самого себя
describe('create-apartment.dto', () => {
  let dto;
  beforeAll(() => {
    dto = {
      apartmentNumber: '',
      type: '',
      status: '',
      price: 0,
      currency: '',
    };
  });

  it('apartmentNumber empty', async () => {
    const ofImportDto = plainToInstance(CreateApartmentDto, dto);
    const errors = await validate(ofImportDto);
    expect(
      errors.map((err) => err.property).includes('apartmentNumber'),
    ).toBeTruthy();
  });
  it('apartmentNumber not empty', async () => {
    dto.apartmentNumber = '111';
    const ofImportDto = plainToInstance(CreateApartmentDto, dto);
    const errors = await validate(ofImportDto);
    expect(
      errors.map((err) => err.property).includes('apartmentNumber'),
    ).toBeFalsy();
  });

  it('type empty', async () => {
    const ofImportDto = plainToInstance(CreateApartmentDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('type')).toBeTruthy();
  });
  it('type is not enum TypeApart', async () => {
    dto.type = 'test';
    const ofImportDto = plainToInstance(CreateApartmentDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('type')).toBeTruthy();
  });
  it('type is enum TypeApart', async () => {
    dto.type = TypeApart.SINGLE;
    const ofImportDto = plainToInstance(CreateApartmentDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('type')).toBeFalsy();
    expect(dto.type).toBe('single');
  });

  it('status empty', async () => {
    const ofImportDto = plainToInstance(CreateApartmentDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('status')).toBeTruthy();
  });

  it('price is a number', async () => {
    dto.price = 100;
    const ofImportDto = plainToInstance(CreateApartmentDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('price')).toBeFalsy();
    expect(typeof dto.price === 'number').toBeTruthy();
  });
  it('price is not a number', async () => {
    dto.price = 'test';
    const ofImportDto = plainToInstance(CreateApartmentDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('price')).toBeTruthy();
    expect(typeof dto.price === 'number').toBeFalsy();
  });

  it('currency empty', async () => {
    const ofImportDto = plainToInstance(CreateApartmentDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map((err) => err.property).includes('currency')).toBeTruthy();
  });
});
