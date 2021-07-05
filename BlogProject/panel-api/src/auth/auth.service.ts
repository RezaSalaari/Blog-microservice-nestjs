import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { BLOG_MICROSERVICE } from 'src/core/microservices';
import { User } from 'src/core/models/user.entity';
import { Role } from 'src/gurad/role.enum';


@Injectable()
export class AuthService {
  constructor(
    @Inject(BLOG_MICROSERVICE.name) private blogMicroservice: ClientProxy,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.blogMicroservice.send('users/findbyUsername', username).toPromise();
    if (user && user.password === pass) {
      user.roles = [user.role]
      const { password, ...result } = user;
      return result;


    }
    return null;
  }

  async login(user: any) {
    const payload = user;
    return {
      ...user,
      token: this.jwtService.sign(payload),
    };
  }

  async register(dto: User): Promise<User> {
    return this.blogMicroservice.send('users/add', dto).toPromise();
  }

}
