import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/entites/models/post';
import { Repository } from 'typeorm';
import { Blog } from './entites/models/blog';

@Injectable()
export class BlogsService {
    constructor(
        @InjectRepository(Blog)
        private blogsRepository: Repository<Blog>,
        @InjectRepository(Post)
        private postsRepository: Repository<Post>
    ) { }

    async add(dto: any): Promise<any> {
        return await this.blogsRepository.save(dto)
    }

    async get(): Promise<Blog[]> {
        return await this.blogsRepository.find();
    }

    async getAllPosts(): Promise<Post[]> {
        return await this.postsRepository.find()
    }
}