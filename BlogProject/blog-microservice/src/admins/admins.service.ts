import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/posts/entites/models/comment';
import { Post } from 'src/posts/entites/models/post';
import { ActionDto } from 'src/roles/entities/dto/role-actions-dto';
import { RoleDto } from 'src/roles/entities/dto/role-dto';
import { Action } from 'src/roles/entities/models/action';
import { Role } from 'src/roles/entities/models/role';
import { RolesEnum } from 'src/roles/entities/models/role.enum';
import { UserDto } from 'src/users/entities/dto/user-dto';
import { User } from 'src/users/entities/models/user';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin';
import { Tag } from './entities/tag';

@Injectable()
export class AdminsService {
    constructor(@InjectRepository(Role)
    private rolesRepository: Repository<Role>,
        @InjectRepository(Action)
        private actionsRepository: Repository<Action>,
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @InjectRepository(Comment)
        private commentsRepository: Repository<Comment>,
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
        @InjectRepository(Admin)
        private adminsRepository: Repository<Admin>,
        @InjectRepository(Tag)
        private tagsRepository: Repository<Tag>

    ) { }
    async addAdmin(dto: Admin): Promise<Admin> {
        dto.role = RolesEnum.Admin
        return await this.adminsRepository.save(dto)
    }
    async createRole(dto: RoleDto): Promise<Role> {
        return await this.rolesRepository.save(<any>dto);
    }

    async createAction(dto: ActionDto): Promise<Action> {
        return await this.actionsRepository.save(dto);
    }
    async editProfile(dto: any): Promise<any> {
        return await this.adminsRepository.save(dto);
    }

    async deletePost(id: number): Promise<void> {
        await this.postsRepository.remove(<any>{ id: id });
    }

    async deleteComment(id: number): Promise<void> {
        await this.commentsRepository.delete(id);
    }

    async createTag(title: string): Promise<Tag> {
        return await this.tagsRepository.save(<any>title);
    }
}
