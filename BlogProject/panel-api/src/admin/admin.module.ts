import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { BLOG_MICROSERVICE } from 'src/core/microservices';
import { AdminController } from './admin.controller';
@Module({
  imports: [
    ClientsModule.register([BLOG_MICROSERVICE]),
  ],
  controllers: [AdminController],

})
export class AdminsModule { }

