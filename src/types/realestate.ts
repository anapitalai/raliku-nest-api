import { Document } from 'mongoose';
export interface RealEstate extends Document{
  name: string;
  proptype: string;
  price:number;
  images?:string;
  created: Date;
}

