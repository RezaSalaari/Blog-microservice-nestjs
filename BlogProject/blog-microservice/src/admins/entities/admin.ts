import { Action } from "src/roles/entities/models/action";
import { Role } from "src/roles/entities/models/role";
import { RolesEnum } from "src/roles/entities/models/role.enum";

export class Admin {
    id: number;
    username?: string;
    password?: string;
    role: RolesEnum
    actions: Action[];
}