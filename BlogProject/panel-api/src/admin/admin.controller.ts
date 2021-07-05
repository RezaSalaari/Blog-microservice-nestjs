import { Body, Controller, Delete, Inject, Param, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginUser } from 'src/auth/user.decorator';
import { BLOG_MICROSERVICE } from 'src/core/microservices';
import { Action } from 'src/core/models/action.entity';
import { Admin } from 'src/core/models/admin.entity';
import { AdminDto } from 'src/core/models/dto/admin.dto';
import { RoleDto } from 'src/core/models/dto/role.dto';
import { TagDto } from 'src/core/models/dto/tag.dto';
import { ActionDto } from 'src/core/models/role-actions-dto';
import { Tag } from 'src/core/models/tag.entity';
import { Role } from 'src/gurad/role.enum';
import { Roles } from 'src/gurad/roles.decorator';


@ApiBearerAuth()
@ApiTags('Admins')
@Controller('admin')
@Roles(Role.Admin)
export class AdminController {
    constructor(
        @Inject(BLOG_MICROSERVICE.name) private client: ClientProxy
    ) { }

    @Post('actions')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                action: { type: 'string' }
            }
        }
    })
    addAction(@Body() action: ActionDto, @LoginUser() user): Promise<any> {

        return this.client.send('admin/actions', action).toPromise();
    }
    @Post('roles')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                role: { type: 'string' }
            }
        }
    })
    addRoles(@Body() roleDto: RoleDto): Promise<any> {

        return this.client.send('admin/roles', roleDto).toPromise();
    }

    @Post('tag')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string' }
            }
        }
    })
    addTag(@Body() dto: TagDto): Promise<any> {
        return this.client.send('admin/addtag', dto).toPromise();
    }
    @Post('addAdmin')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                username: { type: 'string' },
                password: { type: 'string' },
            }
        }
    })
    addAdmin(@Body() adminDto: AdminDto): Promise<any> {
        return this.client.send('admin/addAdmin', adminDto).toPromise();
    }

    @Put('editProfile')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                id: { type: 'number' },
                username: { type: 'string' },
                password: { type: 'string' },
                actions: { type: 'array', items: { type: 'number' } }
            }
        }
    })
    editProfile(@Body() adminDto: AdminDto): Promise<any> {
        return this.client.send('admin/editProfile', adminDto).toPromise();
    }

    @Delete('deletePost/:id')
    deletePost(@Param('id') id: number): Promise<any> {

        return this.client.send('admin/deletePost', id).toPromise();
    }

    @Delete('deleteComment/:id')
    deleteComment(@Param('id') id: number): Promise<any> {

        return this.client.send('admin/deleteComment', id).toPromise();
    }

}
