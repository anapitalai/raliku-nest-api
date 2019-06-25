import * as mongoose from 'mongoose';

//geolocation schema
export const Geoschema = new mongoose.Schema({
    type:{
      type:String,
      default:"Points"
    },
    cordinates:{
      type:[Number],
      index:"2dsphere"
    }
    });
  