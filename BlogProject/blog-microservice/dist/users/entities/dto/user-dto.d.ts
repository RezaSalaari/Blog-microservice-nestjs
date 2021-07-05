import { RolesEnum } from "src/roles/entities/models/role.enum";
export declare class UserDto {
    id?: number;
    username: string;
    password: string;
    age: number;
    role: RolesEnum;
}
