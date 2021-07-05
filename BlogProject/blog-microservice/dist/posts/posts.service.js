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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_1 = require("../blogs/entites/models/category");
const typeorm_2 = require("typeorm");
const comment_1 = require("./entites/models/comment");
const post_1 = require("./entites/models/post");
let PostsService = class PostsService {
    constructor(postsRepository, commentsReository, categoriesRepository) {
        this.postsRepository = postsRepository;
        this.commentsReository = commentsReository;
        this.categoriesRepository = categoriesRepository;
    }
    add(dto) {
        return this.postsRepository.save(dto);
    }
    update(dto) {
        console.log(dto);
        return this.postsRepository.save(dto);
    }
    remove(postId) {
        return this.postsRepository.delete(postId);
    }
    get(postId) {
        return this.postsRepository.findOne(postId);
    }
    async addComment(dto) {
        await this.postsRepository.decrement({ commentLimit: 1 }, 'commentLimit', 1);
        return this.commentsReository.save(dto);
    }
    getUsersComment(id) {
        return this.commentsReository.find({
            where: {
                id: id
            },
            relations: ['post']
        });
    }
    deleteComment(commentId) {
        return this.commentsReository.delete(commentId);
    }
    addCategory(dto) {
        return this.categoriesRepository.save(dto);
    }
    async findUsersPost(dto) {
        console.log(1);
        return await this.postsRepository.find({
            where: {
                user: dto.userId,
                id: dto.postId
            },
            relations: ['user']
        });
    }
    addPostTag(dto) {
        if (dto.tags)
            dto.tags = dto.tags.map(x => ({ id: x }));
        return this.postsRepository.save(dto);
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(post_1.Post)),
    __param(1, typeorm_1.InjectRepository(comment_1.Comment)),
    __param(2, typeorm_1.InjectRepository(category_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map