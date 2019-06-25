import * as mongoose from 'mongoose';
import {Geoschema} from './geolocation.schema';

export const RealEstateSchema = new mongoose.Schema({
  name: String,

  proptype: String,
  price:Number,

  images:{
    type:Array,
    default:false,
  },
  geometry:{
    type:Array,
    default:Geoschema
  },

  created: { type: Date, default: Date.now },
});
