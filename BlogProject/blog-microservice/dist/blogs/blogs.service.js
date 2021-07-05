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
exports.BlogsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_1 = require("../posts/entites/models/post");
const typeorm_2 = require("typeorm");
const blog_1 = require("./entites/models/blog");
let BlogsService = class BlogsService {
    constructor(blogsRepository, postsRepository) {
        this.blogsRepository = blogsRepository;
        this.postsRepository = postsRepository;
    }
    async add(dto) {
        return await this.blogsRepository.save(dto);
    }
    async get() {
        return await this.blogsRepository.find();
    }
    async getAllPosts() {
        return await this.postsRepository.find();
    }
};
BlogsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(blog_1.Blog)),
    __param(1, typeorm_1.InjectRepository(post_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BlogsService);
exports.BlogsService = BlogsService;
//# sourceMappingURL=blogs.service.js.map