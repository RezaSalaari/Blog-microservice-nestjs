"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = void 0;
const typeorm_1 = require("typeorm");
const blog_1 = require("../models/blog");
exports.BlogSchema = new typeorm_1.EntitySchema({
    name: 'Blog',
    target: blog_1.Blog,
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
        user: {
            type: 'one-to-one',
            target: 'User',
            joinColumn: true,
            inverseSide: 'user'
        },
    }
});
//# sourceMappingURL=blog.schema.js.map