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
let OrderService = class OrderService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    listOrdersByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield this.orderModel
                .find({ owner: userId })
                .populate('owner')
                .populate('products.product');
            if (!orders) {
                throw new common_1.HttpException('No Orders Found', common_1.HttpStatus.NO_CONTENT);
            }
            return orders;
        });
    }
    createOrder(orderDTO, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const createOrder = {
                owner: userId,
                products: orderDTO.products,
            };
            const { _id } = yield this.orderModel.create(createOrder);
            let order = yield this.orderModel
                .findById(_id)
                .populate('products.product');
            const totalPrice = order.products.reduce((acc, product) => {
                const price = product.product.price * product.quantity;
                return acc + price;
            }, 0);
            yield order.update({ totalPrice });
            order = yield this.orderModel
                .findById(_id)
                .populate('owner')
                .populate('products.product');
            return order;
        });
    }
};
OrderService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Order')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map