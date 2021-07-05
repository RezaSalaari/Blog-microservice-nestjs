"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagSchema = void 0;
const typeorm_1 = require("typeorm");
const tag_1 = require("../tag");
exports.TagSchema = new typeorm_1.EntitySchema({
    name: 'Tag',
    target: tag_1.Tag,
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
});
//# sourceMappingURL=tag.schema.js.map