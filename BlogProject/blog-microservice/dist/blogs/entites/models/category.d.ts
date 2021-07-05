import { Post } from "src/posts/entites/models/post";
import { Blog } from "./blog";
export declare class Category {
    id?: number;
    title: string;
    blog: Blog;
    posts: Post;
}
