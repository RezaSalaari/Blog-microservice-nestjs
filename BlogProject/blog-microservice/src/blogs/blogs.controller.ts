import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Post } from 'src/posts/entites/models/post';
import { BlogsService } from './blogs.service';
import { Blog } from './entites/models/blog';

@Controller('blogs')
export class BlogsController {
  constructor(
    private blogsService: BlogsService
  ) { }

  @MessagePattern('blogs/add')
  add(@Payload() dto: any): Promise<any> {
    return this.blogsService.add(dto);
  }

  @MessagePattern('blogs/getAllBlogs')
  get(): Promise<Blog[]> {
    return this.blogsService.get();
  }

  @MessagePattern('blogs/getAllPosts')
  getPosts(): Promise<Post[]> {
    return this.blogsService.getAllPosts();
  }

}
