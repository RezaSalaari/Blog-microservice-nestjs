import { Post } from 'src/posts/entites/models/post';
import { BlogsService } from './blogs.service';
import { Blog } from './entites/models/blog';
export declare class BlogsController {
    private blogsService;
    constructor(blogsService: BlogsService);
    add(dto: any): Promise<any>;
    get(): Promise<Blog[]>;
    getPosts(): Promise<Post[]>;
}
