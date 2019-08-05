import { Model } from 'mongoose';
import { Geo } from 'src/types/geo';
import { GeoDTO } from './schema/dto/geo.dto';
export declare class GeoService {
    private readonly geoModel;
    constructor(geoModel: Model<Geo>);
    getGeo(): Promise<any[]>;
    create(geoDTO: GeoDTO): Promise<Geo>;
}
