import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentSchema } from 'src/posts/entites/schema/comment.schema';
import { PostSchema } from 'src/posts/entites/schema/post.schema';
import { ActionsSchema } from 'src/roles/entities/schema/role-actions.schema';
import { RoleSchema } from 'src/roles/entities/schema/role.schema';
import { UserSchema } from 'src/users/entities/schemas/user.schema';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { AdminSchema } from './entities/schema/admin.schema';
import { TagSchema } from './entities/schema/tag.schema';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            RoleSchema,
            ActionsSchema,
            UserSchema,
            AdminSchema,
            RoleSchema,
            CommentSchema,
            PostSchema,
            TagSchema
        ])
    ],
    exports: [
        TypeOrmModule,

    ],
    providers: [AdminsService],
    controllers: [AdminsController]
})

export class AdminsModule { }
