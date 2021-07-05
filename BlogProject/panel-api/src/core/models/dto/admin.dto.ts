import { IsOptional, IsString } from "class-validator";

export class AdminDto {

    id: number;
    @IsOptional()
    @IsString()
    username?: string;
    @IsOptional()
    @IsString()
    password?: string;
}