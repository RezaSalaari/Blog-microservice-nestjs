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
exports.AdminsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comment_1 = require("../posts/entites/models/comment");
const post_1 = require("../posts/entites/models/post");
const role_actions_dto_1 = require("../roles/entities/dto/role-actions-dto");
const role_dto_1 = require("../roles/entities/dto/role-dto");
const action_1 = require("../roles/entities/models/action");
const role_1 = require("../roles/entities/models/role");
const role_enum_1 = require("../roles/entities/models/role.enum");
const user_dto_1 = require("../users/entities/dto/user-dto");
const user_1 = require("../users/entities/models/user");
const typeorm_2 = require("typeorm");
const admin_1 = require("./entities/admin");
const tag_1 = require("./entities/tag");
let AdminsService = class AdminsService {
    constructor(rolesRepository, actionsRepository, usersRepository, commentsRepository, postsRepository, adminsRepository, tagsRepository) {
        this.rolesRepository = rolesRepository;
        this.actionsRepository = actionsRepository;
        this.usersRepository = usersRepository;
        this.commentsRepository = commentsRepository;
        this.postsRepository = postsRepository;
        this.adminsRepository = adminsRepository;
        this.tagsRepository = tagsRepository;
    }
    async addAdmin(dto) {
        dto.role = role_enum_1.RolesEnum.Admin;
        return await this.adminsRepository.save(dto);
    }
    async createRole(dto) {
        return await this.rolesRepository.save(dto);
    }
    async createAction(dto) {
        return await this.actionsRepository.save(dto);
    }
    async editProfile(dto) {
        return await this.adminsRepository.save(dto);
    }
    async deletePost(id) {
        await this.postsRepository.remove({ id: id });
    }
    async deleteComment(id) {
        await this.commentsRepository.delete(id);
    }
    async createTag(title) {
        return await this.tagsRepository.save(title);
    }
};
AdminsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(role_1.Role)),
    __param(1, typeorm_1.InjectRepository(action_1.Action)),
    __param(2, typeorm_1.InjectRepository(user_1.User)),
    __param(3, typeorm_1.InjectRepository(comment_1.Comment)),
    __param(4, typeorm_1.InjectRepository(post_1.Post)),
    __param(5, typeorm_1.InjectRepository(admin_1.Admin)),
    __param(6, typeorm_1.InjectRepository(tag_1.Tag)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AdminsService);
exports.AdminsService = AdminsService;
//# sourceMappingURL=admins.service.js.map