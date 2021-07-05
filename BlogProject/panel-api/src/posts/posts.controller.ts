import { Body, Controller, Delete, ForbiddenException, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiBearerAuth, ApiBody, ApiExtraModels, ApiProperty, ApiTags } from '@nestjs/swagger';
import { type } from 'os';
import { LoginUser } from 'src/auth/user.decorator';
import { BLOG_MICROSERVICE } from 'src/core/microservices';
import { CategoryDto } from 'src/core/models/category-dto';
import { Category } from 'src/core/models/category.entity';
import { CommentDto } from 'src/core/models/comment-dto';
import { Comment } from 'src/core/models/comment.entity';
import { PostDto } from 'src/core/models/post-dto';
import { Posts } from 'src/core/models/post.entity';
import { Tag } from 'src/core/models/tag.entity';
import { User } from 'src/core/models/user.entity';
import { Role } from 'src/gurad/role.enum';
import { Roles } from 'src/gurad/roles.decorator';

@ApiTags('Posts')
@ApiBearerAuth()
@Controller('posts')
export class PostsController {
  constructor(
    @Inject(BLOG_MICROSERVICE.name) private client: ClientProxy
  ) { }

  @Roles(Role.Blogger)
  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        text: { type: 'string' },
        category: { type: 'number' },
        user: { type: 'number' },
        commentStatus: { type: 'boolean' },
        commentLimit: { type: 'number' },
      }
    }
  })
  add(@Body() dto: PostDto, @LoginUser() user: User): Promise<Posts> {
    dto.user = user.id
    return this.client.send('posts/add', dto).toPromise();
  }

  @Roles(Role.Blogger)
  @Put()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        text: { type: 'string' },
        category: { type: 'number' },
        user: { type: 'number' },
        commentStatus: { type: 'boolean' },
        commentLimit: { type: 'number' },
        tags: { type: 'array', items: { type: 'number' } }
      }
    }
  })
  async edit(@Body() dto: PostDto, @LoginUser() currentUser: User): Promise<Posts> {
    const usersPosts = await this.client.send('posts/find', { userId: currentUser.id, postId: dto.id }).toPromise();
    if (usersPosts.length > 0) {
      return this.client.send('posts/edit', dto).toPromise()
    }
    else {
      throw new ForbiddenException('no access for edit this post')
    }
  }
  @Roles(Role.Blogger, Role.Admin)
  @Delete('/:id')
  async remove(@Param('id') id: number, @LoginUser() currentUser: User): Promise<void> {
    const usersPosts = await this.client.send('posts/find', { userId: currentUser.id, postId: id }).toPromise();

    if ((usersPosts && usersPosts.length > 0) || currentUser.roles[0] == Role.Admin) { return this.client.send('posts/delete', id).toPromise(); }
    else {
      throw new ForbiddenException('no access for Delete this post')
    }


  }

  @Get('/:id')
  get(@Param('id') id: number, @LoginUser() user: User): Promise<Posts> {
    return this.client.send('posts/get', id).toPromise();

  }

  @Post('add-comment')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        text: { type: 'string' },
        post: { type: 'number' }
      }
    }
  })
  async commentAdd(@Body() dto: CommentDto): Promise<Comment> {
    try
     {
      return await this.client.send('posts/comments/add', dto).toPromise();
    } catch (error) {
      return error ? error : error
    }

  }
  @Roles(Role.Blogger, Role.Admin)
  @Delete('remove-comment/:id')
  async commentRemove(@Param('id') id: number, @LoginUser() currentUser: User): Promise<void> {
    /**
     * @var usersPosts Checks if the comment belongs to the same post
     *  in the Post APi (Post,Get,Put) 
     * Before executing the first function, the first condition for establishing 
     * the post owner is checked with the requesting user
     */
    const usersPosts = await this.client.send('posts/comments/get', id).toPromise();
    if (((usersPosts.length > 0 && usersPosts[0].post.user.id) == currentUser.id) || currentUser.roles[0] == Role.Admin) {

      return this.client.send('posts/comments/remove', id).toPromise();
    }
    throw new ForbiddenException();

  }

  @Post('add-category')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        blog: { type: 'number' },
        posts: { type: 'number' },
      }
    }
  })
  category(@Body() dto: CategoryDto): Promise<Category> {
    return this.client.send('posts/category/add', dto).toPromise();
  }

  @Post('add-tags')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        tags: { type: 'array', items: { type: 'object' } }
      }
    }
  })
  tags(@Body() dto: Tag): Promise<any> {
    return this.client.send('posts/tags', dto).toPromise();
  }

}
