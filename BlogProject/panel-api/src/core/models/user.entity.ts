import { IsString } from "class-validator";
import { Role } from "src/gurad/role.enum";

export class User {
    id: number;
    @IsString()
    username: string;
    @IsString()
    password: string;
    age: number;
    role: Role
    roles: Role[]
}