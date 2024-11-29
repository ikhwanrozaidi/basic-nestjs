import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { CreatePostDto } from '../dtos/create-post.dto';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { create } from 'domain';

@Injectable()
export class PostsService {
    constructor(
        //Injecting user service
        private readonly usersService: UsersService,

        /**
         * Injecting postsRepository
         */
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,

        /**
         * Injecting metaOptionRepository
         */
        @InjectRepository(MetaOption)
        public metaOptionsRepository: Repository<MetaOption>
    ){}

    /**
     * Creating new posts
     */

    public async create(@Body() createPostDto: CreatePostDto){
        // Find author from database based on authorId
        let author = await this.usersService.findOnebyId(createPostDto.authorId);

        // Create post
        let post = this.postsRepository.create({
            ...createPostDto,
            author: author
        });

        // return the post
        return await this.postsRepository.save(post);
    }

    public async findAll(userId: string){
        let posts = await this.postsRepository.find({
            relations: {
                metaOptions: true,
                author: true,
            }
        });

        return posts
    }

    public async delete(id: number){
        await this.postsRepository.delete(id);
        
        return { deleted: true, id}
    }
}
