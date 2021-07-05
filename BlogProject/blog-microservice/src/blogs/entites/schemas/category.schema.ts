import { EntitySchema } from "typeorm";
import { Category } from "../models/category";

export const categorySchema = new EntitySchema<Category>({
    name: 'Category',
    target: Category,
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
            // eager:true,
            inverseSide: 'category'
        },
    }
})