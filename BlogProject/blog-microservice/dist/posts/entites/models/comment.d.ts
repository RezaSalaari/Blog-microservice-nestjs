import { Post } from "./post";
export declare class Comment {
    id?: number;
    email?: string;
    text: string;
    post: Post;
}
