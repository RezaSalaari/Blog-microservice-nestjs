import { Repository } from 'typeorm';
import { RoleDto } from './entities/dto/role-dto';
import { Role } from './entities/models/role';
export declare class RolesService {
    private rolesRepository;
    constructor(rolesRepository: Repository<Role>);
    add(dto: RoleDto): Promise<Role>;
    edit(dto: RoleDto): Promise<Role>;
}
