import { Blog } from "./blog.entity";
import { Posts } from "./post.entity";

export class Category {
    id?: number;
    title: string
    blog: Blog;
    posts: Posts
}