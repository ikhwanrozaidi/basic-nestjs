import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { patchPostsDto } from './dto/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
    ){}

    @Get('/:userId?')
    public getPosts(
        @Param('userId') userId:string
    ){
        return this.postsService.findAll(userId);
    }

    @Post()
    @ApiOperation({
        summary: 'Creates a new blog posts'
    })
    @ApiResponse({
        status: 201,
        description:
          'You get a success 201 response if the post is updated successfully',
    })
    public createPost(@Body() createPostDto: CreatePostDto){
        console.log(createPostDto);
        return "Takde posting pun";
    }

    @Patch()
    @ApiOperation({
        summary: 'Updates an existing blog post'
    })
    @ApiResponse({
        status: 200,
        description:
          'You get a success 200 response if the post is updated successfully',
    })
    public updatePosts(@Body() patchPostsDto: patchPostsDto){
        console.log(patchPostsDto)

    }
}
