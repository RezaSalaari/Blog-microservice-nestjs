import { IsEmail, IsNumber, IsString } from "class-validator";

export class CommentDto {
    id?: number;
    @IsEmail()
    email?: string;
    @IsString()
    text?: string;
    @IsNumber()
    post?: number
}