import { Category } from "./category.entity";
import { Tag } from "./tag.entity";
import { User } from "./user.entity";


export class Posts {
    id: number;
    text: string;
    comments: Comment[];
    category: Category;
    user: User;
    commentStatus: boolean;
    commentLimit: number
    tags: Tag[]
}