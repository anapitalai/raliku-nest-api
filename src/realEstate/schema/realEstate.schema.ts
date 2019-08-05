import * as mongoose from 'mongoose';
import { Geoschema } from './geolocation.schema';


export const RealEstateSchema = new mongoose.Schema({
  name: String,
  type: String,
  price:Number,

  images:{
    type:Array,
    default:false,
  },
 //geometry:{type:Array,default:{type:{type:String,default:'Point'},coordinates:{type:[Number],index:'2dsphere'}}},

 created: { type: Date, default: Date.now },
});


//geometry:{type:{type:String,default:'Point'},coordinates:{type:[Number],index:'2dsphere'}},