import * as mongoose from 'mongoose';


//geolocation schema
export const Geoschema = new mongoose.Schema({
    type:{
      type:String,
      default:"Point"
    },
    coordinates:{
      type:[Number],
      index:"2dsphere"
    }
    });


    