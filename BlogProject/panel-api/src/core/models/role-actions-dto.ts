import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { ActionEnum } from "./role-actions.enum";

export class ActionDto {
    @IsNotEmpty()
    @IsString()
    action: string
}