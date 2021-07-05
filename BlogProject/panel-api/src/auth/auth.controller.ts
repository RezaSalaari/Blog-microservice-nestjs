import { BadRequestException, Body, Controller, ForbiddenException, Inject, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';
import { LocalAuthGuard } from './local-auth.guard';
import axios from 'axios';
import { BLOG_MICROSERVICE } from 'src/core/microservices';
import { ClientProxy } from '@nestjs/microservices';
import { Roles } from 'src/gurad/roles.decorator';
import { Role } from 'src/gurad/role.enum';
import { LoginUser } from './user.decorator';
import { User } from 'src/core/models/user.entity';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/core/models/user-dto';


@ApiTags('Auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService,

  ) { }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string' },
        password: { type: 'string' }
      }
    }
  })
  async login(@Request() req, @LoginUser() user: User) {
    if (req.headers.authorization) throw new ForbiddenException('You Are Login')
    return this.authService.login(req.user);
  }

  @Public()
  @Post('signup')
  async test(@Body() dto: User) {
    if (isNaN(Number(dto.username)) == false || isNaN(Number(dto.password)) == false) {
      throw new BadRequestException('the password or username contain string ');
    }
    console.log(typeof dto.username)
    dto.role = Role.Blogger
    return this.authService.register(dto);
  }

}