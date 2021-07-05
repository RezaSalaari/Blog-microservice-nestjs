import { Comment } from 'src/posts/entites/models/comment';
import { Post } from 'src/posts/entites/models/post';
import { ActionDto } from 'src/roles/entities/dto/role-actions-dto';
import { RoleDto } from 'src/roles/entities/dto/role-dto';
import { Action } from 'src/roles/entities/models/action';
import { Role } from 'src/roles/entities/models/role';
import { User } from 'src/users/entities/models/user';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin';
import { Tag } from './entities/tag';
export declare class AdminsService {
    private rolesRepository;
    private actionsRepository;
    private usersRepository;
    private commentsRepository;
    private postsRepository;
    private adminsRepository;
    private tagsRepository;
    constructor(rolesRepository: Repository<Role>, actionsRepository: Repository<Action>, usersRepository: Repository<User>, commentsRepository: Repository<Comment>, postsRepository: Repository<Post>, adminsRepository: Repository<Admin>, tagsRepository: Repository<Tag>);
    addAdmin(dto: Admin): Promise<Admin>;
    createRole(dto: RoleDto): Promise<Role>;
    createAction(dto: ActionDto): Promise<Action>;
    editProfile(dto: any): Promise<any>;
    deletePost(id: number): Promise<void>;
    deleteComment(id: number): Promise<void>;
    createTag(title: string): Promise<Tag>;
}
