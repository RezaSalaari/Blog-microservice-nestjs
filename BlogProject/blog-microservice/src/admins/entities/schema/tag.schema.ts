import { EntitySchema } from "typeorm";
import { Tag } from "../tag";

export const TagSchema = new EntitySchema<Tag>({
    name: 'Tag',
    target: Tag,
    columns: {
        id: {
            type: Number,
            generated: true,
            primary: true,
        },
        title: {
            type: String
        }
    }
})