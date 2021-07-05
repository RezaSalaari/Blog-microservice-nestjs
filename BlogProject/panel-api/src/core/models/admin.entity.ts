import { Role } from "src/gurad/role.enum";
import { Action } from "./action.entity";


export class Admin {
    id: number;
    username?: string;
    password?: string;
    role: Role
    actions: Action[];
}