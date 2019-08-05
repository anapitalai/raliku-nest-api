import { StationeryService } from './stationery.service';
import { StationeryDTO } from './dto/stationery.dto';
export declare class StationeryController {
    private stationeryService;
    constructor(stationeryService: StationeryService);
    get(): Promise<import("../types/stationery").Stationery[]>;
    create(estateDTO: StationeryDTO, files: any): Promise<import("../types/stationery").Stationery>;
    purge(id: any): Promise<import("../types/stationery").Stationery>;
    update(): string;
}
