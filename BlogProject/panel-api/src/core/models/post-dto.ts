import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PostDto {
    id?: number;
    @IsString()
    text?: string;
    user: number
    category: number
}