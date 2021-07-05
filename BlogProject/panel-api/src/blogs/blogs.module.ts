import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { BLOG_MICROSERVICE } from 'src/core/microservices';
import { BlogsController } from './blogs.controller';


@Module({
  imports: [
    ClientsModule.register([BLOG_MICROSERVICE]),
  ],
  controllers: [BlogsController],

})


export class BlogsModule { }
