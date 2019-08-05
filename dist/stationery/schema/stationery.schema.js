"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.StationerySchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    images: {
        type: Array,
        default: false,
    },
    created: { type: Date, default: Date.now },
});
//# sourceMappingURL=stationery.schema.js.map