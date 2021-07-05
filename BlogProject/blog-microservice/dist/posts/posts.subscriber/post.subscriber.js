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
exports.PostSubscriber = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comment_1 = require("../entites/models/comment");
const post_1 = require("../entites/models/post");
let PostSubscriber = class PostSubscriber {
    constructor(postsRepository, commentsRepository, connection) {
        this.postsRepository = postsRepository;
        this.commentsRepository = commentsRepository;
        connection.subscribers.push(this);
    }
    listenTo() {
        return comment_1.Comment;
    }
    async beforeInsert(event) {
        const checkStatusComment = await this.postsRepository.findOne({ where: { id: event.entity.post } });
        if (checkStatusComment.commentStatus == false || checkStatusComment.commentLimit == 0) {
            throw new microservices_1.RpcException({
                status: common_1.HttpStatus.METHOD_NOT_ALLOWED,
                message: "The possibility to leave a comment for this post is closed"
            });
        }
        if (checkStatusComment.commentLimit > 0) {
            this.postsRepository.decrement({ id: event.entity.post }, 'commentLimit', 1);
        }
    }
};
PostSubscriber = __decorate([
    typeorm_2.EventSubscriber(),
    __param(0, typeorm_1.InjectRepository(post_1.Post)),
    __param(1, typeorm_1.InjectRepository(comment_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Connection])
], PostSubscriber);
exports.PostSubscriber = PostSubscriber;
//# sourceMappingURL=post.subscriber.js.map