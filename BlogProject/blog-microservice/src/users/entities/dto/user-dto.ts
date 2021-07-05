import { RolesEnum } from "src/roles/entities/models/role.enum";

export class UserDto {
    id?: number;
    username: string;
    password: string;
    age: number;
    role: RolesEnum
}