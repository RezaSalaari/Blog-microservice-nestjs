import { Action } from "./action.entity";



export class Role {
    id?: number;
    role?: Role
    actions: Action[]
}