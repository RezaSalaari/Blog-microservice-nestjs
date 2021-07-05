import { RoleDto } from './entities/dto/role-dto';
import { Role } from './entities/models/role';
import { RolesService } from './roles.service';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    add(dto: RoleDto): Promise<Role>;
    edit(dto: RoleDto): Promise<Role>;
}
