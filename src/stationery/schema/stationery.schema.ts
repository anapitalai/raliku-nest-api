import * as mongoose from 'mongoose';

export const StationerySchema = new mongoose.Schema({
  name: String,
  type: String,
  price:Number,
  images:{
    type:String,
    default:false,
  },
  created: { type: Date, default: Date.now },
});