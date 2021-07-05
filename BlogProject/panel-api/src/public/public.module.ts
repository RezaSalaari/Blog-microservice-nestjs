import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { BLOG_MICROSERVICE } from 'src/core/microservices';
import { PublicController } from './public.controller';

@Module({
  imports: [
    ClientsModule.register([BLOG_MICROSERVICE]),
  ],
  controllers: [PublicController],

})

export class PublicModule { }
