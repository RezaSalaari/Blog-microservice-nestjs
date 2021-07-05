import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginUser } from 'src/auth/user.decorator';
import { BLOG_MICROSERVICE } from 'src/core/microservices';
import { BlogDto } from 'src/core/models/blog-dto';
import { Blog } from 'src/core/models/blog.entity';
import { User } from 'src/core/models/user.entity';

@ApiTags('Blogs')
@ApiBearerAuth()
@Controller('blogs')
export class BlogsController {
  constructor(
    @Inject(BLOG_MICROSERVICE.name) private client: ClientProxy
  ) { }

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {

        title: { type: 'string' },
        user: { type: 'number' }
      }
    }
  })
  add(@Body() dto: BlogDto, @LoginUser() user: User): Promise<Blog> {
    dto.user = user.id
    return this.client.send('blogs/add', dto).toPromise();

  }
}
