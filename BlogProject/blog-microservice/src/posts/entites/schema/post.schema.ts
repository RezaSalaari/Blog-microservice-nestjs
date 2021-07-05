import { User } from "src/users/entities/models/user";
import { EntitySchema } from "typeorm";
import { Post } from "../models/post";

export const PostSchema = new EntitySchema<any>({
    name: 'Post',
    target: Post,
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
            // eager:true,
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
            // eager:true,
            inverseSide: 'posts'
        },
        tags: {
            type: 'many-to-many',
            target: 'Tag',
            joinTable: true,
            inverseSide: 'tags',
            // eager:true
        }


    }
})