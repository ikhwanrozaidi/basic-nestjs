import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostsDto } from './dtos/patch-post.dto';
import { PostsService } from './providers/posts.service';

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
        return this.postsService.create(createPostDto)
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
    public updatePosts(@Body() patchPostsDto: PatchPostsDto){
        return this.postsService.update(patchPostsDto);

    }

    @Delete()
    public deletePost(@Query('id', ParseIntPipe) id: number){
        return this.postsService.delete(id);
    }
}
