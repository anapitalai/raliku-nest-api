import { Document } from 'mongoose';
export interface RealEstate extends Document{
  name: string;
  type: string;
  price:number;
  images?:string;
  created: Date;
}

