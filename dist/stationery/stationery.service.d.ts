import { Model } from 'mongoose';
import { StationeryDTO } from './dto/stationery.dto';
import { Stationery } from 'src/types/stationery';
export declare class StationeryService {
    private readonly stationeryModel;
    constructor(stationeryModel: Model<Stationery>);
    get(): Promise<Stationery[]>;
    create(stationeryDTO: StationeryDTO, files: any): Promise<Stationery>;
    delete(id: string): Promise<Stationery>;
}
