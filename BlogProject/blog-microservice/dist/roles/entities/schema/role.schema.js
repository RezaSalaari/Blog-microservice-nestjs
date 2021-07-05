"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSchema = void 0;
const typeorm_1 = require("typeorm");
const role_1 = require("../models/role");
const role_enum_1 = require("../models/role.enum");
exports.RoleSchema = new typeorm_1.EntitySchema({
    name: 'Role',
    target: role_1.Role,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        role: {
            type: 'enum',
            enum: role_enum_1.RolesEnum
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
});
//# sourceMappingURL=role.schema.js.map