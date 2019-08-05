"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const realEstate_service_1 = require("./realEstate.service");
const realEstate_controller_1 = require("./realEstate.controller");
const mongoose_1 = require("@nestjs/mongoose");
const realEstate_schema_1 = require("./schema/realEstate.schema");
const platform_express_1 = require("@nestjs/platform-express");
let RealEstateModule = class RealEstateModule {
};
RealEstateModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'RealEstate', schema: realEstate_schema_1.RealEstateSchema }]),
            platform_express_1.MulterModule.register({
                dest: './realestates'
            })],
        providers: [realEstate_service_1.RealEstateService],
        exports: [realEstate_service_1.RealEstateService],
        controllers: [realEstate_controller_1.RealEstateController],
    })
], RealEstateModule);
exports.RealEstateModule = RealEstateModule;
//# sourceMappingURL=realEstate.module.js.map