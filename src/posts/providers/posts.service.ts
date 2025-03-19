import { BadRequestException, Injectable, RequestTimeoutException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActiveUserData } from 'src/auth/interfaces/active-user-interfaces';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dtos/create-post.dto';
import { GetPostsDto } from '../dtos/get-post.dto';
import { PatchPostsDto } from '../dtos/patch-post.dto';
import { Post } from '../post.entity';
import { CreatePostProvider } from './create-post.provider';

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
        
        /**
         * Inject the paginationProvider
         */
        private readonly paginationProvider: PaginationProvider,

        /**
         * Inject createPostProvider
         */
        private readonly createPostProvider: CreatePostProvider,

    ){}

    /**
     * Creating new posts
     */
    public async create(createPostDto: CreatePostDto, user: ActiveUserData){
      return await this.createPostProvider.create(createPostDto, user);
    }

    public async findAll(
      postQuery: GetPostsDto,
      userId: string,
    ): Promise<Paginated<Post>> {
      let posts = await this.paginationProvider.paginateQuery(
        {
          limit: postQuery.limit,
          page: postQuery.page,
        },
        this.postsRepository,
      );
  
      return posts;
    }

    
    public async update(patchPostDto: PatchPostsDto) {
      let tags = undefined;
      let post = undefined;
  
      try {
        tags = await this.tagsService.findMultipleTags(patchPostDto.tags);
      } catch (error) {
        throw new RequestTimeoutException(
          'Unable to process your request at the moment please try later',
          {
            description: 'Error connecting to the database',
          },
        );
      }
  
      /**
       * If tags were not found
       * Need to be equal number of tags
       */
      if (!tags || tags.length !== patchPostDto.tags.length) {
        throw new BadRequestException(
          'Please check your tag Ids and ensure they are correct',
        );
      }
  
      try {
        // Returns null if the post does not exist
        post = await this.postsRepository.findOneBy({
          id: patchPostDto.id,
        });
      } catch (error) {
        throw new RequestTimeoutException(
          'Unable to process your request at the moment please try later',
          {
            description: 'Error connecting to the database',
          },
        );
      }
  
      if (!post) {
        throw new BadRequestException('The post Id does not exist');
      }
  
      post.title = patchPostDto.title ?? post.title;
      post.content = patchPostDto.content ?? post.content;
      post.status = patchPostDto.status ?? post.status;
      post.postType = patchPostDto.postType ?? post.postType;
      post.slug = patchPostDto.slug ?? post.slug;
      post.featuredImageUrl =
        patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
      post.publishOn = patchPostDto.publishOn ?? post.publishOn;
  
      post.tags = tags;
  
      try {
        await this.postsRepository.save(post);
      } catch (error) {
        throw new RequestTimeoutException(
          'Unable to process your request at the moment please try later',
          {
            description: 'Error connecting to the database',
          },
        );
      }
      return post;
    }

    public async delete(id: number){
        await this.postsRepository.delete(id);
        
        return { deleted: true, id}
    }
}
