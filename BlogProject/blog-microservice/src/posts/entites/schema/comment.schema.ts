import { Entity, EntitySchema } from "typeorm";
import { Comment } from "../models/comment";
import { Post } from "../models/post";

export const CommentSchema = new EntitySchema<Comment>({
    name: 'Comment',
    target: Comment,
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
})