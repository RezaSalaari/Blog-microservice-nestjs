import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { BLOG_MICROSERVICE } from 'src/core/microservices';
import { UsersController } from './users.controller';
@Module({
  imports: [
    ClientsModule.register([BLOG_MICROSERVICE]),
  ],
  controllers: [UsersController],

})

export class UsersModule { }
