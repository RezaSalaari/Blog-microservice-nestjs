import { Action } from "src/roles/entities/models/action";
import { RolesEnum } from "src/roles/entities/models/role.enum";
export declare class Admin {
    id: number;
    username?: string;
    password?: string;
    role: RolesEnum;
    actions: Action[];
}
