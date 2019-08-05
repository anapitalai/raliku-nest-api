"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.RealEstateSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    images: {
        type: Array,
        default: false,
    },
    created: { type: Date, default: Date.now },
});
//# sourceMappingURL=realEstate.schema.js.map