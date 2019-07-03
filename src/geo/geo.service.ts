import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Geo } from 'src/types/geo';
import { GeoDTO } from './schema/dto/geo.dto';
import { Db, DBRef } from 'mongodb';

@Injectable()
export class GeoService {
    constructor(@InjectModel('Geo') private readonly geoModel: Model<Geo>) { }
    
    async getGeo(){

        const center=this.geoModel.findOne({"name":"Lae Center"}, {_id: 0, "location": 1});  
        
        console.log(DBRef);
         
    return await this.geoModel.aggregate([ { geoNear: { near: {center}, distanceField: "dist.calculated", maxDistance: 8046.72, spherical: true,distanceMultiplier: 1/1609.344 } } ]);
      //return await this.geoModel.geoNear({type:'Point',coordinates:[147.008207,-6.728797]},{maxDistance:100000,spherical:true});  
    }
    
    
    
    async create(geoDTO: GeoDTO) {
        const name = geoDTO.name;
        const propName = await this.geoModel.findOne({ name });
        if (propName) {
          throw new HttpException('Property already exists', HttpStatus.BAD_REQUEST);
        }
        //addedby sly
        const location = geoDTO.location;

    
    
        const createdProp = new this.geoModel({ name: name, location:location});
        await createdProp.save();
        return createdProp;
      }
}


/*deleteBook(bookID): Promise<any> {
    let id = Number(bookID);
    return new Promise(resolve => {
        let index = this.books.findIndex(book => book.id === id);
        if (index === -1) {
            throw new HttpException('Book does not exist!', 404);
        }
        this.books.splice(1, index);
        resolve(this.books);
    });
------------------------------------

        @Delete()
    async deleteBook(@Query() query) {
        const books = await this.booksService.deleteBook(query.bookID);
        return books;
}
}**/