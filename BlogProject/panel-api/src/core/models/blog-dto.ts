import { IsNumber, IsString } from "class-validator";

export class BlogDto {

    id?: number
    @IsString()
    title: string
    user: number
}