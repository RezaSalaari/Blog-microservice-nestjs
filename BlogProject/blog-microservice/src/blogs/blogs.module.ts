import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostSchema } from "src/posts/entites/schema/post.schema";
import { BlogsController } from "./blogs.controller";
import { BlogsService } from "./blogs.service";
import { BlogSchema } from "./entites/schemas/blog.schema";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            BlogSchema,
            PostSchema
        ])
    ],
    exports: [
        TypeOrmModule,
    ],
    providers: [BlogsService],
    controllers: [BlogsController]
})

export class BlogsModule { }