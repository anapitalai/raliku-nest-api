import { RealEstateService } from './realEstate.service';
import { RealEstateDTO } from './dto/realEstate.dto';
import { RealEstate } from 'src/types/realestate';
export declare class RealEstateController {
    private estateService;
    constructor(estateService: RealEstateService);
    get(): Promise<RealEstate[]>;
    getEstates(qlng: any, qlat: any): Promise<RealEstate[]>;
    create(estateDTO: RealEstateDTO, files: any): Promise<RealEstate>;
    update(id: any, estate: RealEstate): Promise<RealEstate>;
    purge(id: any): Promise<RealEstate>;
}
