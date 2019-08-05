import { Document } from 'mongoose';
export interface Stationery extends Document {
    property_name: string;
    property_type: string;
    price: number;
    images?: string;
    created: Date;
}
