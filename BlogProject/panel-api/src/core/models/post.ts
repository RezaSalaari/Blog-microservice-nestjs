import { Category } from "./category";
import { User } from "./user";


export class Posts {
    id?: number;
    text?: string;
    comments: Comment[]
    category: Category
    user: User
}