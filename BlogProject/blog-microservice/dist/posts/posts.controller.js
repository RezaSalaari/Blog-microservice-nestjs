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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const post_1 = require("./entites/models/post");
const posts_service_1 = require("./posts.service");
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    add(dto) {
        return this.postsService.add(dto);
    }
    edit(dto) {
        return this.postsService.update(dto);
    }
    delete(dto) {
        return this.postsService.remove(dto);
    }
    get(dto) {
        return this.postsService.get(dto);
    }
    addComments(dto) {
        return this.postsService.addComment(dto);
    }
    getComments(id) {
        return this.postsService.getUsersComment(id);
    }
    removeComments(dto) {
        return this.postsService.deleteComment(dto);
    }
    addCategory(dto) {
        return this.postsService.addCategory(dto);
    }
    findUserPost(dto) {
        console.log(1);
        return this.postsService.findUsersPost(dto);
    }
    addTagToPost(dto) {
        return this.postsService.addPostTag(dto);
    }
};
__decorate([
    microservices_1.MessagePattern('posts/add'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "add", null);
__decorate([
    microservices_1.MessagePattern('posts/edit'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "edit", null);
__decorate([
    microservices_1.MessagePattern('posts/delete'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "delete", null);
__decorate([
    microservices_1.MessagePattern('posts/get'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "get", null);
__decorate([
    microservices_1.MessagePattern('posts/comments/add'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "addComments", null);
__decorate([
    microservices_1.MessagePattern('posts/comments/get'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getComments", null);
__decorate([
    microservices_1.MessagePattern('posts/comments/remove'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "removeComments", null);
__decorate([
    microservices_1.MessagePattern('posts/category/add'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "addCategory", null);
__decorate([
    microservices_1.MessagePattern('posts/find'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findUserPost", null);
__decorate([
    microservices_1.MessagePattern('posts/tags'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.Post]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "addTagToPost", null);
PostsController = __decorate([
    common_1.Controller('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map