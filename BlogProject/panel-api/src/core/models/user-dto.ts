import { IsEmpty, IsEnum, isEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Role } from "src/gurad/role.enum";

export class UserDto {
    id: number;
    @IsOptional()
    @IsString()
    username: string;
    @IsString()
    password: string;
    age: number;
    roles: Role[]
    role: Role
}