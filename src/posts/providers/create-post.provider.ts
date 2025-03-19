import {
    BadRequestException,
    ConflictException,
    Injectable
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActiveUserData } from 'src/auth/interfaces/active-user-interfaces';
import { TagsService } from 'src/tags/providers/tags.service';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Post } from '../post.entity';
  
  @Injectable()
  export class CreatePostProvider {
    constructor(
      /*
       * Injecting Users Service
       */
      private readonly usersService: UsersService,
      /**
       * Inject postsRepository
       */
      @InjectRepository(Post)
      private readonly postsRepository: Repository<Post>,
      /**
       * Inject TagsService
       */
      private readonly tagsService: TagsService,
    ) {}
  
    public async create(createPostDto: CreatePostDto, user: ActiveUserData) {
      let author = undefined;
      let tags = undefined;
  
      try {
        author = await this.usersService.findOneById(user.sub);
        tags = await this.tagsService.findMultipleTags(createPostDto.tags);

      } catch (error) {
        throw new ConflictException(error);
      }
  
      if (createPostDto.tags.length !== tags.length) {
        throw new BadRequestException('Please check your tag Ids');
      }
  
      let post = this.postsRepository.create({
        ...createPostDto,
        author: author,
        tags: tags,
      });
  
      try {
        return await this.postsRepository.save(post);
      } catch (error) {
        throw new ConflictException(error, {
          description: 'Ensure post slug is unique and not a duplicate',
        });
      }
    }
  }
  