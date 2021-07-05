import { Body, Controller, Inject, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/public.decorator';
import { LoginUser } from 'src/auth/user.decorator';
import { BLOG_MICROSERVICE } from 'src/core/microservices';
import { UserDto } from 'src/core/models/user-dto';
import { User } from 'src/core/models/user.entity';
import { Role } from 'src/gurad/role.enum';
@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(
    @Inject(BLOG_MICROSERVICE.name) private client: ClientProxy
  ) { }

  @Public()
  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string' },
        password: { type: 'string' },
        role: { type: 'string', enum: <any>Role },
        age: { type: 'number' }
      }
    }
  })
  add(@Body() dto: UserDto): Promise<User> {
    return this.client.send('users/add', dto).toPromise();
  }

  @Put('change-password')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        username: { type: 'string' },
        password: { type: 'string' },
        role: { type: 'string', enum: <any>Role },
        age: { type: 'number' }
      }
    }
  })
  changePassword(@Body() dto: UserDto, @LoginUser() user: User): Promise<any> {
    dto.id = user.id
    return this.client.send('users/chnagePassword', dto).toPromise();
  }
}
