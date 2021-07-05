import { Post } from "src/posts/entites/models/post";
import { Blog } from "./blog";

export class Category {
    id?: number;
    title: string
    blog: Blog;
    posts: Post
}