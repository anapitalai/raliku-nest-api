import { Document } from 'mongoose';
export interface Geo extends Document{
  name: string;

  location:string;

}
