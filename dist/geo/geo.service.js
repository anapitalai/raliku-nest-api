"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongodb_1 = require("mongodb");
let GeoService = class GeoService {
    constructor(geoModel) {
        this.geoModel = geoModel;
    }
    getGeo() {
        return __awaiter(this, void 0, void 0, function* () {
            const center = this.geoModel.findOne({ "name": "Lae Center" }, { _id: 0, "location": 1 });
            console.log(mongodb_1.DBRef);
            return yield this.geoModel.aggregate([{ geoNear: { near: { center }, distanceField: "dist.calculated", maxDistance: 8046.72, spherical: true, distanceMultiplier: 1 / 1609.344 } }]);
        });
    }
    create(geoDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = geoDTO.name;
            const propName = yield this.geoModel.findOne({ name });
            if (propName) {
                throw new common_1.HttpException('Property already exists', common_1.HttpStatus.BAD_REQUEST);
            }
            const location = geoDTO.location;
            const createdProp = new this.geoModel({ name: name, location: location });
            yield createdProp.save();
            return createdProp;
        });
    }
};
GeoService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Geo')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GeoService);
exports.GeoService = GeoService;
//# sourceMappingURL=geo.service.js.map