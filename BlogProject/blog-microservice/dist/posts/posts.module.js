"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_schema_1 = require("../blogs/entites/schemas/category.schema");
const comment_schema_1 = require("./entites/schema/comment.schema");
const post_schema_1 = require("./entites/schema/post.schema");
const posts_controller_1 = require("./posts.controller");
const posts_service_1 = require("./posts.service");
const post_subscriber_1 = require("./posts.subscriber/post.subscriber");
let PostsModule = class PostsModule {
};
PostsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                post_schema_1.PostSchema,
                comment_schema_1.CommentSchema,
                category_schema_1.categorySchema
            ])
        ],
        providers: [posts_service_1.PostsService, post_subscriber_1.PostSubscriber],
        controllers: [posts_controller_1.PostsController]
    })
], PostsModule);
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map