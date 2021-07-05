import { Posts } from "./post";

export class Comment {
    id?: number;
    email?: string;
    text: string;
    post: Posts
}