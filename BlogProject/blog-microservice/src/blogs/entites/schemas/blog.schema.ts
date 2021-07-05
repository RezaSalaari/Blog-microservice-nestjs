import { EntitySchema } from "typeorm";
import { Blog } from "../models/blog";

export const BlogSchema = new EntitySchema<any>({
    name: 'Blog',
    target: Blog,
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
})