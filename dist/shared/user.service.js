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
const bcrypt = require("bcryptjs");
const mongoose_2 = require("mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    create(userDTO, file) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = userDTO;
            console.log(username);
            const user = yield this.userModel.findOne({ username });
            if (user) {
                throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
            }
            const password = userDTO.password;
            console.log(password);
            const imgPath = file.path;
            console.log(imgPath);
            const createdUser = new this.userModel({ username: username, password: password, image: imgPath });
            yield createdUser.save();
            return this.sanitizeUser(createdUser);
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.find();
        });
    }
    findByLogin(userDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = userDTO;
            const user = yield this.userModel
                .findOne({ username })
                .select('username password seller created address');
            if (!user) {
                throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
            }
            if (yield bcrypt.compare(password, user.password)) {
                return this.sanitizeUser(user);
            }
            else {
                throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
            }
        });
    }
    findByPayload(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = payload;
            return yield this.userModel.findOne({ username });
        });
    }
    sanitizeUser(user) {
        const sanitized = user.toObject();
        delete sanitized['password'];
        return sanitized;
    }
    update(id, user, file) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(file.path);
            const username = user.username;
            const imagePath = file.path;
            const password = user.password;
            console.log(password, 'update password');
            const imgPath = file.path;
            console.log(imgPath, 'update path');
            return yield this.userModel.findByIdAndUpdate(id, { username, image: imgPath }, { new: true });
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map