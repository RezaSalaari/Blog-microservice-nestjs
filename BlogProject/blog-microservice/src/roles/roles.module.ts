import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionsSchema } from './entities/schema/role-actions.schema';
import { RoleSchema } from './entities/schema/role.schema';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RoleSchema,
      ActionsSchema
    ])
  ],
  exports: [
    TypeOrmModule,
    RolesService


  ],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule { }
