"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const role_actions_schema_1 = require("./entities/schema/role-actions.schema");
const role_schema_1 = require("./entities/schema/role.schema");
const roles_controller_1 = require("./roles.controller");
const roles_service_1 = require("./roles.service");
let RolesModule = class RolesModule {
};
RolesModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                role_schema_1.RoleSchema,
                role_actions_schema_1.ActionsSchema
            ])
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            roles_service_1.RolesService
        ],
        providers: [roles_service_1.RolesService],
        controllers: [roles_controller_1.RolesController]
    })
], RolesModule);
exports.RolesModule = RolesModule;
//# sourceMappingURL=roles.module.js.map