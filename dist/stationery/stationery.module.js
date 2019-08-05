"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const stationery_controller_1 = require("./stationery.controller");
const stationery_service_1 = require("./stationery.service");
const mongoose_1 = require("@nestjs/mongoose");
const platform_express_1 = require("@nestjs/platform-express");
const stationery_schema_1 = require("./schema/stationery.schema");
let StationeryModule = class StationeryModule {
};
StationeryModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Stationery', schema: stationery_schema_1.StationerySchema }]),
            platform_express_1.MulterModule.register({
                dest: './stationeryImages'
            })],
        controllers: [stationery_controller_1.StationeryController],
        providers: [stationery_service_1.StationeryService],
        exports: [stationery_service_1.StationeryService]
    })
], StationeryModule);
exports.StationeryModule = StationeryModule;
//# sourceMappingURL=stationery.module.js.map