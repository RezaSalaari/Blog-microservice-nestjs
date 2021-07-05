import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RoleDto } from './entities/dto/role-dto';
import { Role } from './entities/models/role';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(
        private rolesService: RolesService
    ) { }

    @MessagePattern('roles/add')
    add(@Payload() dto: RoleDto): Promise<Role> {
        return this.rolesService.add(dto);
    }

    @MessagePattern('roles/edit')
    edit(@Payload() dto: RoleDto): Promise<Role> {
        return this.rolesService.edit(dto);
    }
}