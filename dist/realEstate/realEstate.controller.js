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
const platform_express_1 = require("@nestjs/platform-express");
const realEstate_service_1 = require("./realEstate.service");
const realEstate_dto_1 = require("./dto/realEstate.dto");
let RealEstateController = class RealEstateController {
    constructor(estateService) {
        this.estateService = estateService;
    }
    get() {
        return this.estateService.get();
    }
    getEstates(qlng, qlat) {
        return this.estateService.getEstates(qlng, qlat);
    }
    create(estateDTO, files) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(files, estateDTO.price);
            const prop = this.estateService.create(estateDTO, files);
            return prop;
        });
    }
    update(id, estate) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(estate);
            return this.estateService.update(id, estate);
        });
    }
    purge(id) {
        return this.estateService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RealEstateController.prototype, "get", null);
__decorate([
    common_1.Get('filter'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RealEstateController.prototype, "getEstates", null);
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('images')),
    __param(0, common_1.Body()), __param(1, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [realEstate_dto_1.RealEstateDTO, Object]),
    __metadata("design:returntype", Promise)
], RealEstateController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RealEstateController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RealEstateController.prototype, "purge", null);
RealEstateController = __decorate([
    common_1.Controller('realestate'),
    __metadata("design:paramtypes", [realEstate_service_1.RealEstateService])
], RealEstateController);
exports.RealEstateController = RealEstateController;
//# sourceMappingURL=realEstate.controller.js.map