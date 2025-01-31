import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ApartmentDocument = HydratedDocument<Apartment>;

@Schema()
export class Apartment {
  @Prop()
  apartmentNumber: string;

  @Prop()
  type: string;

  @Prop()
  status: string;

  @Prop()
  price: number;

  @Prop()
  currency: string;
}

export const ApartmentSchema = SchemaFactory.createForClass(Apartment);
