"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const role_enum_1 = require("../../../roles/entities/models/role.enum");
const typeorm_1 = require("typeorm");
const user_1 = require("../models/user");
exports.UserSchema = new typeorm_1.EntitySchema({
    name: 'User',
    target: user_1.User,
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
            enum: role_enum_1.RolesEnum
        }
    },
});
//# sourceMappingURL=user.schema.js.map