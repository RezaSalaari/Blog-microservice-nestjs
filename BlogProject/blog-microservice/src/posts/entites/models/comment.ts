import { Post } from "./post";

export class Comment {
    id?: number;
    email?: string;
    text: string;
    post: Post
}