import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/public.decorator';
import { LoginUser } from 'src/auth/user.decorator';
import { BLOG_MICROSERVICE } from 'src/core/microservices';
import { User } from 'src/core/models/user.entity';
import { Role } from 'src/gurad/role.enum';
import { Roles } from 'src/gurad/roles.decorator';
@ApiTags('Public')
@ApiBearerAuth()
@Controller('public')
export class PublicController {
    constructor(
        @Inject(BLOG_MICROSERVICE.name) private client: ClientProxy
    ) { }
    @Public()
    @Get('get-blogs')
    blog(@LoginUser() user: User): Promise<any> {
        console.log(user)
        return this.client.send('blogs/getAllBlogs', '').toPromise();
    }
    @Public()
    @Get('get-posts')
    posts(): Promise<any> {
        return this.client.send('blogs/getAllPosts', '').toPromise();
    }

}
