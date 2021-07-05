import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesService } from 'src/roles/roles.service';
import { UserSchema } from './entities/schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserSchema
    ])
  ],
  exports: [
    TypeOrmModule,

  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UsersModule { }

