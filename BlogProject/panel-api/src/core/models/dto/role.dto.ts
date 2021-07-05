import { IsString } from "class-validator";

export class RoleDto {

    id: number;
    @IsString()
    role: string;
}