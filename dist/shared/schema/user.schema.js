"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    username: String,
    password: {
        type: String,
        select: false,
    },
    image: {
        type: String,
        default: false,
    },
    seller: {
        type: Boolean,
        default: false,
    },
    address: {
        addr1: String,
        addr2: String,
        city: String,
        state: String,
        country: String,
        zip: Number,
    },
    created: { type: Date, default: Date.now },
});
exports.UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!this.isModified('password')) {
                return next();
            }
            const hashed = yield bcrypt.hash(this['password'], 10);
            this['password'] = hashed;
            return next();
        }
        catch (err) {
            return next(err);
        }
    });
});
//# sourceMappingURL=user.schema.js.map