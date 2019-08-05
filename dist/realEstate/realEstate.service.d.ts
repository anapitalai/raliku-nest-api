import { Model } from 'mongoose';
import { RealEstate } from '../types/realestate';
import { RealEstateDTO } from './dto/realEstate.dto';
export declare class RealEstateService {
    private readonly estateModel;
    constructor(estateModel: Model<RealEstate>);
    get(): Promise<RealEstate[]>;
    getEstates(lng: any, lat: any): Promise<RealEstate[]>;
    create(estateDTO: RealEstateDTO, files: any): Promise<RealEstate>;
    update(id: string, realEstate: RealEstate): Promise<RealEstate>;
    delete(id: string): Promise<RealEstate>;
}
