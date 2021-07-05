"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comment_schema_1 = require("../posts/entites/schema/comment.schema");
const post_schema_1 = require("../posts/entites/schema/post.schema");
const role_actions_schema_1 = require("../roles/entities/schema/role-actions.schema");
const role_schema_1 = require("../roles/entities/schema/role.schema");
const user_schema_1 = require("../users/entities/schemas/user.schema");
const admins_controller_1 = require("./admins.controller");
const admins_service_1 = require("./admins.service");
const admin_schema_1 = require("./entities/schema/admin.schema");
const tag_schema_1 = require("./entities/schema/tag.schema");
let AdminsModule = class AdminsModule {
};
AdminsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                role_schema_1.RoleSchema,
                role_actions_schema_1.ActionsSchema,
                user_schema_1.UserSchema,
                admin_schema_1.AdminSchema,
                role_schema_1.RoleSchema,
                comment_schema_1.CommentSchema,
                post_schema_1.PostSchema,
                tag_schema_1.TagSchema
            ])
        ],
        exports: [
            typeorm_1.TypeOrmModule,
        ],
        providers: [admins_service_1.AdminsService],
        controllers: [admins_controller_1.AdminsController]
    })
], AdminsModule);
exports.AdminsModule = AdminsModule;
//# sourceMappingURL=admins.module.js.map