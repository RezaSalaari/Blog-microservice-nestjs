import { ForbiddenException, HttpStatus } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent, Repository } from "typeorm";
import { Comment } from "../entites/models/comment";
import { Post } from "../entites/models/post";

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<Comment> {
    constructor(
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
        @InjectRepository(Comment)
        private commentsRepository: Repository<Comment>,
        connection: Connection
    ) {
        connection.subscribers.push(this);
    }

    listenTo() {
        return Comment
    }
    /**
     * 
     * pass the @augments  event and checked the Status Post for insert comment
     * 
     */
    async beforeInsert(event: InsertEvent<Comment>) {
        const checkStatusComment = await this.postsRepository.findOne({ where: { id: event.entity.post } });
        if (checkStatusComment.commentStatus == false || checkStatusComment.commentLimit == 0) {
            throw new RpcException({
                status: HttpStatus.METHOD_NOT_ALLOWED,
                message: "The possibility to leave a comment for this post is closed"
            });
        }
        if (checkStatusComment.commentLimit > 0) {
            this.postsRepository.decrement({ id: <any>event.entity.post }, 'commentLimit', 1);
        }


    }
}