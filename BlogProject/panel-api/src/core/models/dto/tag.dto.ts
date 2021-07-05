import { IsNotEmpty, IsString } from "class-validator";

export class TagDto {
    id?: number;
    @IsString()
    @IsNotEmpty()
    title: string;
}