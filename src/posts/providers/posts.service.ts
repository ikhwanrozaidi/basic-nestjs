import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PatchPostsDto } from '../dtos/patch-post.dto';
import { Post } from '../post.entity';

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
        private readonly metaOptionsRepository: Repository<MetaOption>,

        /**
         * Injecting TagsService
         */
        private readonly tagsService: TagsService,
    ){}

    /**
     * Creating new posts
     */
    public async create(@Body() createPostDto: CreatePostDto){
        // Find author from database based on authorId
        let author = await this.usersService.findOnebyId(createPostDto.authorId);

        //Find tags
        let tags = await this.tagsService.findMultipleTags(createPostDto.tags);

        // Create post
        let post = this.postsRepository.create({
            ...createPostDto,
            author: author,
            tags: tags,
        });

        // return the post
        return await this.postsRepository.save(post);
    }

    public async findAll(userId: string){
        let posts = await this.postsRepository.find({
            relations: {
                metaOptions: true,
                author: true,
                // tags: true,
            }
        });

        return posts
    }

    
  public async update(patchPostDto: PatchPostsDto) {
    // Find new tags
    let tags = await this.tagsService.findMultipleTags(patchPostDto.tags);

    // Find the post
    let post = await this.postsRepository.findOneBy({
      id: patchPostDto.id,
    });

    // Update post related properties
    post.title = patchPostDto.title ?? post.title;
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.postType = patchPostDto.postType ?? post.postType;
    post.slug = patchPostDto.slug ?? post.slug;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;

    // Update the tags
    post.tags = tags;

    return await this.postsRepository.save(post);
  }

    public async delete(id: number){
        await this.postsRepository.delete(id);
        
        return { deleted: true, id}
    }
}
