import { EntitySchema } from "typeorm";
import { Role } from "../models/role";
import { RolesEnum } from "../models/role.enum";

export const RoleSchema = new EntitySchema<Role>({
    name: 'Role',
    target: Role,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },

        role: {
            type: 'enum',
            enum: RolesEnum
        },

    },
    relations: {
        actions: {
            target: 'Action',
            type: 'many-to-many',
            joinTable: true,
            eager: true,
            inverseSide: 'action',
            cascade: true
        }
    }
})