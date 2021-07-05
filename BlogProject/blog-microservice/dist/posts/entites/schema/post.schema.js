"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = void 0;
const user_1 = require("../../../users/entities/models/user");
const typeorm_1 = require("typeorm");
const post_1 = require("../models/post");
exports.PostSchema = new typeorm_1.EntitySchema({
    name: 'Post',
    target: post_1.Post,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        text: {
            type: String,
            nullable: true
        },
        commentStatus: {
            type: Boolean,
            default: true
        },
        commentLimit: {
            type: Number,
            default: 0
        }
    },
    relations: {
        comments: {
            type: 'one-to-many',
            target: 'Comment',
            cascade: true,
            inverseSide: 'post'
        },
        user: {
            type: 'many-to-one',
            target: 'User',
            eager: true,
            inverseSide: 'user'
        },
        category: {
            target: 'Category',
            type: 'many-to-one',
            inverseSide: 'posts'
        },
        tags: {
            type: 'many-to-many',
            target: 'Tag',
            joinTable: true,
            inverseSide: 'tags',
        }
    }
});
//# sourceMappingURL=post.schema.js.map