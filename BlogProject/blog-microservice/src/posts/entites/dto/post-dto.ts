import { Category } from "src/blogs/entites/models/category";

export class PostDto {
    id?: number;
    text?: string;
    category: Category
}