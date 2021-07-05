import { IsString } from "class-validator";
import { Role } from "src/gurad/role.enum";

export class UserDto {
    id: number;
    @IsString()
    username: string;
    @IsString()
    password: string;
    age: number;
    role: number
    roles: Role[]
}