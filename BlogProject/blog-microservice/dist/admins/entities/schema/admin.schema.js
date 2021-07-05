"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSchema = void 0;
const role_enum_1 = require("../../../roles/entities/models/role.enum");
const typeorm_1 = require("typeorm");
const admin_1 = require("../admin");
exports.AdminSchema = new typeorm_1.EntitySchema({
    name: 'Admin',
    target: admin_1.Admin,
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
            enum: role_enum_1.RolesEnum
        }
    },
    relations: {
        actions: {
            type: 'many-to-many',
            target: 'Action',
            joinTable: true
        }
    }
});
//# sourceMappingURL=admin.schema.js.map