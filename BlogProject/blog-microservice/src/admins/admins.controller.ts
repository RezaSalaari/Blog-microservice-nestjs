import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommentDto } from 'src/posts/entites/dto/comment-dto';
import { PostDto } from 'src/posts/entites/dto/post-dto';
import { ActionDto } from 'src/roles/entities/dto/role-actions-dto';
import { RoleDto } from 'src/roles/entities/dto/role-dto';
import { Action } from 'src/roles/entities/models/action';
import { Role } from 'src/roles/entities/models/role';
import { UserDto } from 'src/users/entities/dto/user-dto';
import { User } from 'src/users/entities/models/user';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
    constructor(
        private adminsService: AdminsService
    ) { }

    @MessagePattern('admin/actions')
    action(@Payload() dto: ActionDto): Promise<Action> {
        return this.adminsService.createAction(dto);
    }
    @MessagePattern('admin/roles')
    role(@Payload() dto: RoleDto): Promise<Role> {
        return this.adminsService.createRole(dto);
    }

    @MessagePattern('admin/addAdmin')
    addAdmin(@Payload() dto: any): Promise<any> {
        return this.adminsService.addAdmin(dto);
    }

    @MessagePattern('admin/editProfile')
    editProfile(@Payload() dto: any): Promise<User> {
        return this.adminsService.editProfile(dto);

    }

    @MessagePattern('admin/deletePost')
    deletePost(@Payload() postId: number): Promise<void> {
        return this.adminsService.deletePost(postId);

    }


    @MessagePattern('admin/deleteComment')
    deleteComment(@Payload() commentId: number): Promise<void> {
        return this.adminsService.deleteComment(commentId);

    }

    @MessagePattern('admin/addtag')
    addTag(@Payload() title: string): Promise<any> {
        return this.adminsService.createTag(title)
    }


}
