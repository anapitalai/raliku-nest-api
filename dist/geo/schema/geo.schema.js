"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const geoo_schema_1 = require("../schema/geoo.schema");
exports.Geoschema = new mongoose.Schema({
    name: String,
    location: { type: geoo_schema_1.Geooschema }
});
//# sourceMappingURL=geo.schema.js.map