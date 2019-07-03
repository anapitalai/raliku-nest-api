import * as mongoose from 'mongoose';
import {Geooschema} from '../schema/geoo.schema';

//geolocation schema
export const Geoschema = new mongoose.Schema({
    name:String,

    location:{type:Geooschema}
    
    });


    