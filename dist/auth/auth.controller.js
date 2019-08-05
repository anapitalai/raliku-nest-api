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
const user_service_1 = require("../shared/user.service");
const register_dto_1 = require("../auth/dto/register.dto");
const login_dto_1 = require("../auth/dto/login.dto");
const auth_service_1 = require("./auth.service");
const platform_express_1 = require("@nestjs/platform-express");
let AuthController = class AuthController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    login(userDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.findByLogin(userDTO);
            const payload = {
                username: user.username,
                seller: user.seller,
            };
            const token = yield this.authService.signPayload(payload);
            return { user, token };
        });
    }
    register(userDTO, file) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.create(userDTO, file);
            const payload = {
                username: user.username,
                image: user.image,
                seller: user.seller,
            };
            const token = yield this.authService.signPayload(payload);
            return { user, token };
        });
    }
    update(id, registerDTO, file) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(file.path, 'from update endpoint from controller');
            const imagePath = file.path;
            const { image } = registerDTO;
            return this.userService.update(id, registerDTO, file);
        });
    }
};
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('register'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image')),
    __param(0, common_1.Body()), __param(1, common_1.UploadedFile('file')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    common_1.Put('update/:id'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image')),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()), __param(2, common_1.UploadedFile('file')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, register_dto_1.RegisterDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "update", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map