"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const comment_dto_1 = require("../posts/entites/dto/comment-dto");
const post_dto_1 = require("../posts/entites/dto/post-dto");
const role_actions_dto_1 = require("../roles/entities/dto/role-actions-dto");
const role_dto_1 = require("../roles/entities/dto/role-dto");
const action_1 = require("../roles/entities/models/action");
const role_1 = require("../roles/entities/models/role");
const user_dto_1 = require("../users/entities/dto/user-dto");
const user_1 = require("../users/entities/models/user");
const admins_service_1 = require("./admins.service");
let AdminsController = class AdminsController {
    constructor(adminsService) {
        this.adminsService = adminsService;
    }
    action(dto) {
        return this.adminsService.createAction(dto);
    }
    role(dto) {
        return this.adminsService.createRole(dto);
    }
    addAdmin(dto) {
        return this.adminsService.addAdmin(dto);
    }
    editProfile(dto) {
        return this.adminsService.editProfile(dto);
    }
    deletePost(postId) {
        return this.adminsService.deletePost(postId);
    }
    deleteComment(commentId) {
        return this.adminsService.deleteComment(commentId);
    }
    addTag(title) {
        return this.adminsService.createTag(title);
    }
};
__decorate([
    microservices_1.MessagePattern('admin/actions'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_actions_dto_1.ActionDto]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "action", null);
__decorate([
    microservices_1.MessagePattern('admin/roles'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.RoleDto]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "role", null);
__decorate([
    microservices_1.MessagePattern('admin/addAdmin'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "addAdmin", null);
__decorate([
    microservices_1.MessagePattern('admin/editProfile'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "editProfile", null);
__decorate([
    microservices_1.MessagePattern('admin/deletePost'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "deletePost", null);
__decorate([
    microservices_1.MessagePattern('admin/deleteComment'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "deleteComment", null);
__decorate([
    microservices_1.MessagePattern('admin/addtag'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "addTag", null);
AdminsController = __decorate([
    common_1.Controller('admins'),
    __metadata("design:paramtypes", [admins_service_1.AdminsService])
], AdminsController);
exports.AdminsController = AdminsController;
//# sourceMappingURL=admins.controller.js.map