import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CategoryDto {
    id: number
    @IsString()
    title: string;
    @IsNotEmpty()
    @IsNumber()
    blog: number;

}