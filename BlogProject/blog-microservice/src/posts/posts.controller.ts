import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Post } from './entites/models/post';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(
        private postsService: PostsService
    ) { }

    @MessagePattern('posts/add')
    add(@Payload() dto: any): Promise<any> {
        return this.postsService.add(dto);
    }

    @MessagePattern('posts/edit')
    edit(@Payload() dto: any): Promise<any> {
        return this.postsService.update(dto);
    }
    @MessagePattern('posts/delete')
    delete(@Payload() dto: any): Promise<any> {
        return this.postsService.remove(dto);
    }
    @MessagePattern('posts/get')
    get(@Payload() dto: any): Promise<any> {
        return this.postsService.get(dto);
    }
    @MessagePattern('posts/comments/add')
    addComments(@Payload() dto: any): Promise<any> {
        return this.postsService.addComment(dto);
    }
    @MessagePattern('posts/comments/get')
    getComments(@Payload() id: number): Promise<any> {
        return this.postsService.getUsersComment(id);
    }
    @MessagePattern('posts/comments/remove')
    removeComments(@Payload() dto: any): Promise<any> {
        return this.postsService.deleteComment(dto)
    }
    @MessagePattern('posts/category/add')
    addCategory(@Payload() dto: any): Promise<any> {
        return this.postsService.addCategory(dto);
    }

    @MessagePattern('posts/find')
    findUserPost(@Payload() dto: any): Promise<Post> {
        console.log(1)
        return this.postsService.findUsersPost(dto)
    }

    @MessagePattern('posts/tags')
    addTagToPost(@Payload() dto: Post): Promise<any> {
        return this.postsService.addPostTag(dto);
    }

}
