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
const passport_1 = require("@nestjs/passport");
const seller_guard_1 = require("../guards/seller.guard");
const user_decorator_1 = require("../utilities/user.decorator");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productService.findAll();
        });
    }
    listMine(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = user;
            return yield this.productService.findByOwner(id);
        });
    }
    listBySeller(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productService.findByOwner(id);
        });
    }
    create(product, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productService.create(product, user);
        });
    }
    read(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productService.findById(id);
        });
    }
    update(id, product, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: userId } = user;
            return yield this.productService.update(id, product, userId);
        });
    }
    delete(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: userId } = user;
            return yield this.productService.delete(id, userId);
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "listAll", null);
__decorate([
    common_1.Get('/mine'),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), seller_guard_1.SellerGuard),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "listMine", null);
__decorate([
    common_1.Get('/seller/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "listBySeller", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), seller_guard_1.SellerGuard),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "read", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), seller_guard_1.SellerGuard),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __param(2, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), seller_guard_1.SellerGuard),
    __param(0, common_1.Param('id')),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
ProductController = __decorate([
    common_1.Controller('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map