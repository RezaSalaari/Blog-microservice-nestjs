import { Role } from "src/gurad/role.enum";

export class User {
    id: number;
    username: string;
    password: string;
    age: number;
    role: Role;
    roles: Role[]
}