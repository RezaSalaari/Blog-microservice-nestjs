import { Tag } from "src/admins/entities/tag";
import { Blog } from "src/blogs/entites/models/blog";
import { Category } from "src/blogs/entites/models/category";
import { User } from "src/users/entities/models/user";

export class Post {
    id: number;
    text: string;
    comments: Comment[];
    category: Category;
    user: User;
    commentStatus: boolean;
    commentLimit: number
    tags: Tag[]
}