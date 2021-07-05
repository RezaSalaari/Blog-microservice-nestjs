import { Category } from 'src/blogs/entites/models/category';
import { Repository } from 'typeorm';
import { Comment } from './entites/models/comment';
import { Post } from './entites/models/post';
export declare class PostsService {
    private postsRepository;
    private commentsReository;
    private categoriesRepository;
    constructor(postsRepository: Repository<Post>, commentsReository: Repository<Comment>, categoriesRepository: Repository<Category>);
    add(dto: any): Promise<any>;
    update(dto: any): Promise<any>;
    remove(postId: number): Promise<any>;
    get(postId: number): Promise<any>;
    addComment(dto: any): Promise<any>;
    getUsersComment(id: number): Promise<any>;
    deleteComment(commentId: number): Promise<any>;
    addCategory(dto: any): Promise<any>;
    findUsersPost(dto: any): Promise<any>;
    addPostTag(dto: Post): Promise<Post>;
}
