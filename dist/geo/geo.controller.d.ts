import { GeoDTO } from './schema/dto/geo.dto';
import { GeoService } from './geo.service';
import { Geo } from 'src/types/geo';
export declare class GeoController {
    private geoService;
    constructor(geoService: GeoService);
    getEstates(): Promise<any[]>;
    create(geoDTO: GeoDTO): Promise<Geo>;
}
