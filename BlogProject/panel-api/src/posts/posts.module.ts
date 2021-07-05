import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ClientsModule } from '@nestjs/microservices';
import { BLOG_MICROSERVICE } from 'src/core/microservices';
import { RolesGuard } from 'src/gurad/roles.guard';
import { PostsController } from './posts.controller';
@Module({
  imports: [
    ClientsModule.register([BLOG_MICROSERVICE]),
  ],
  controllers: [PostsController],
})
export class PostsModule { }
