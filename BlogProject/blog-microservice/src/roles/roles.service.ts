import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleDto } from './entities/dto/role-dto';
import { Role } from './entities/models/role';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role)
        private rolesRepository: Repository<Role>
    ) { }

    add(dto: RoleDto): Promise<Role> {
        return this.rolesRepository.save(<any>dto);
    }

    edit(dto: RoleDto): Promise<Role> {
        return this.rolesRepository.save(<any>dto)
    }
}
