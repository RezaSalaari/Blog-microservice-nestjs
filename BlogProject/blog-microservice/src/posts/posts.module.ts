import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categorySchema } from 'src/blogs/entites/schemas/category.schema';
import { CommentSchema } from './entites/schema/comment.schema';
import { PostSchema } from './entites/schema/post.schema';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostSubscriber } from './posts.subscriber/post.subscriber';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            PostSchema,
            CommentSchema,
            categorySchema
        ])
    ],
    providers: [PostsService, PostSubscriber],
    controllers: [PostsController]
})

export class PostsModule { }
