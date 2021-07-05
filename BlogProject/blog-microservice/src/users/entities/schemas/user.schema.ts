import { RolesEnum } from "src/roles/entities/models/role.enum";
import { EntitySchema } from "typeorm";
import { User } from "../models/user";

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },

        username: {
            type: String,
        },
        password: {
            type: String
        },
        age: {
            type: Number,
            nullable: true
        },

        role: {
            type: 'enum',
            enum: RolesEnum
        }

    },

})