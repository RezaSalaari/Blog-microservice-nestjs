import { Post } from 'src/posts/entites/models/post';
import { Repository } from 'typeorm';
import { Blog } from './entites/models/blog';
export declare class BlogsService {
    private blogsRepository;
    private postsRepository;
    constructor(blogsRepository: Repository<Blog>, postsRepository: Repository<Post>);
    add(dto: any): Promise<any>;
    get(): Promise<Blog[]>;
    getAllPosts(): Promise<Post[]>;
}
