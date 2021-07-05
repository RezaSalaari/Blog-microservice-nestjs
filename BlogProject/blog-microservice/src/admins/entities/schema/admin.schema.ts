import { RolesEnum } from "src/roles/entities/models/role.enum";
import { EntitySchema } from "typeorm";
import { Admin } from "../admin";

export const AdminSchema = new EntitySchema<any>({
    name: 'Admin',
    target: Admin,
    columns: {
        id: {
            type: Number,
            generated: true,
            primary: true
        },

        username: {
            type: String,
            nullable: true
        },
        password: {
            type: String,
            nullable: true
        },
        role: {
            type: 'enum',
            enum: RolesEnum
        }
    },
    relations: {
        actions: {
            type: 'many-to-many',
            target: 'Action',
            joinTable: true
        }
    }
})