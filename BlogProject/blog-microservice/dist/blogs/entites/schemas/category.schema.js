"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
const typeorm_1 = require("typeorm");
const category_1 = require("../models/category");
exports.categorySchema = new typeorm_1.EntitySchema({
    name: 'Category',
    target: category_1.Category,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        title: {
            type: String,
            nullable: true
        },
    },
    relations: {
        blog: {
            type: 'many-to-one',
            target: 'Blog',
            inverseSide: 'category'
        },
    }
});
//# sourceMappingURL=category.schema.js.map