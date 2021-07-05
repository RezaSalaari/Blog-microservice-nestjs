import { Blog } from "./blog";
import { Posts } from "./post";

export class Category {
    id?: number;
    title: string
    blog: Blog;
    posts: Posts[]
}