import * as mongoose from 'mongoose';

export const RealEstateSchema = new mongoose.Schema({
  name: String,

  type: {
    type: String,
    default: false,
  },
  price:{type:Number,
  default:false},

  images:{
    type:Array,
    default:false,
  },

  created: { type: Date, default: Date.now },
});