import { ActionDto } from 'src/roles/entities/dto/role-actions-dto';
import { RoleDto } from 'src/roles/entities/dto/role-dto';
import { Action } from 'src/roles/entities/models/action';
import { Role } from 'src/roles/entities/models/role';
import { User } from 'src/users/entities/models/user';
import { AdminsService } from './admins.service';
export declare class AdminsController {
    private adminsService;
    constructor(adminsService: AdminsService);
    action(dto: ActionDto): Promise<Action>;
    role(dto: RoleDto): Promise<Role>;
    addAdmin(dto: any): Promise<any>;
    editProfile(dto: any): Promise<User>;
    deletePost(postId: number): Promise<void>;
    deleteComment(commentId: number): Promise<void>;
    addTag(title: string): Promise<any>;
}
