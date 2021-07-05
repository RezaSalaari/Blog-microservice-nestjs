import { Connection, EntitySubscriberInterface, InsertEvent, Repository } from "typeorm";
import { Comment } from "../entites/models/comment";
import { Post } from "../entites/models/post";
export declare class PostSubscriber implements EntitySubscriberInterface<Comment> {
    private postsRepository;
    private commentsRepository;
    constructor(postsRepository: Repository<Post>, commentsRepository: Repository<Comment>, connection: Connection);
    listenTo(): typeof Comment;
    beforeInsert(event: InsertEvent<Comment>): Promise<void>;
}
