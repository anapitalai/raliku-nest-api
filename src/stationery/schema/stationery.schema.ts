import * as mongoose from 'mongoose';

export const StationerySchema = new mongoose.Schema({
  name: String,
  type: String,
  price:Number,
  images:{
    type:Array,
    default:false,
  },
  created: { type: Date, default: Date.now },
});