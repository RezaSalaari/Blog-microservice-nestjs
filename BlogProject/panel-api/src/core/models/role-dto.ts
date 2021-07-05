import { IsEnum, IsNumber } from "class-validator"
import { ActionEnum } from "../models/role-actions.enum"
import { RolesEnum } from "../models/role-status.enum"


export class RoleDto {
    @IsNumber()
    id?: number
    @IsEnum(RolesEnum)
    role: RolesEnum
    actions: number[]
}