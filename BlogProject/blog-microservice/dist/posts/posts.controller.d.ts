import { Post } from './entites/models/post';
import { PostsService } from './posts.service';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    add(dto: any): Promise<any>;
    edit(dto: any): Promise<any>;
    delete(dto: any): Promise<any>;
    get(dto: any): Promise<any>;
    addComments(dto: any): Promise<any>;
    getComments(id: number): Promise<any>;
    removeComments(dto: any): Promise<any>;
    addCategory(dto: any): Promise<any>;
    findUserPost(dto: any): Promise<Post>;
    addTagToPost(dto: Post): Promise<any>;
}
