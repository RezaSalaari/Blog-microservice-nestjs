"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSchema = void 0;
const typeorm_1 = require("typeorm");
const comment_1 = require("../models/comment");
exports.CommentSchema = new typeorm_1.EntitySchema({
    name: 'Comment',
    target: comment_1.Comment,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        email: {
            type: String,
            nullable: true
        },
        text: {
            type: String,
            nullable: true
        }
    },
    relations: {
        post: {
            type: 'many-to-one',
            target: 'Post',
            eager: true,
            onDelete: 'CASCADE',
            inverseSide: 'comments'
        }
    }
});
//# sourceMappingURL=comment.schema.js.map