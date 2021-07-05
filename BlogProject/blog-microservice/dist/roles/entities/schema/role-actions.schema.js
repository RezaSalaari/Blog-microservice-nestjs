"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsSchema = void 0;
const typeorm_1 = require("typeorm");
const action_1 = require("../models/action");
exports.ActionsSchema = new typeorm_1.EntitySchema({
    name: 'Action',
    target: action_1.Action,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        action: {
            type: String,
        }
    }
});
//# sourceMappingURL=role-actions.schema.js.map