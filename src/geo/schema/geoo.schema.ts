import * as mongoose from 'mongoose';

//geolocation schema
export const Geooschema = new mongoose.Schema({
        type:{
            type:String,
            default:"Point"
          },
          coordinates:{
            type:[Number],
            index:"2dsphere"
          }
        });
