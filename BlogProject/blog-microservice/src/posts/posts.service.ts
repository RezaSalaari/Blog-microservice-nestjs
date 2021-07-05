import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/blogs/entites/models/category';
import { Repository } from 'typeorm';
import { CommentDto } from './entites/dto/comment-dto';
import { Comment } from './entites/models/comment';
import { Post } from './entites/models/post';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
        @InjectRepository(Comment)
        private commentsReository: Repository<Comment>,
        @InjectRepository(Category)
        private categoriesRepository: Repository<Category>
    ) { }

    add(dto: any): Promise<any> {
        return this.postsRepository.save(dto);
    }
    update(dto: any): Promise<any> {
        console.log(dto)
        return this.postsRepository.save(dto);
    }
    remove(postId: number): Promise<any> {
        return this.postsRepository.delete(postId);
    }

    get(postId: number): Promise<any> {
        return this.postsRepository.findOne(postId);
    }

    async addComment(dto: any): Promise<any> {
        await this.postsRepository.decrement({ commentLimit: 1 }, 'commentLimit', 1);
        return this.commentsReository.save(dto);
    }

    getUsersComment(id: number): Promise<any> {

        return this.commentsReository.find({
            where: {
                id: id
            },
            relations: ['post']
        })
    }
    deleteComment(commentId: number): Promise<any> {
        return this.commentsReository.delete(commentId);
    }

    addCategory(dto: any): Promise<any> {
        return this.categoriesRepository.save(dto);
    }

    async findUsersPost(dto: any): Promise<any> {
        console.log(1)
        return await this.postsRepository.find({
            where: {
                user: dto.userId,
                id: dto.postId
            },
            relations: ['user']
        })
    }

    addPostTag(dto: Post): Promise<Post> {
        if (dto.tags) dto.tags = <any>dto.tags.map(x => ({ id: x }));
        return this.postsRepository.save(dto)
    }
}