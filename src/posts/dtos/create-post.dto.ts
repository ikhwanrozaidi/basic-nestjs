import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsEnum, IsInt, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength, ValidateNested } from "class-validator";
import { CreatePostMetaOptionsDto } from "../../meta-options/dtos/create-post-metaoptions.dto";
import { postStatus } from "../enum/postStatus.enum";
import { postType } from "../enum/postType.enum";

export class CreatePostDto {
    @IsString() @IsNotEmpty() @MinLength(4) @MaxLength(512)
    @ApiProperty({
        example: 'This is a title',
        description: 'This is the title for the blof posts'
    })
    title: string;

    @IsEnum(postType) @IsNotEmpty()
    @ApiProperty({
        enum: postType,
        description: "Possible values, 'post', 'page', 'story', 'series'"
    })
    postType: postType;

    @IsString() @IsNotEmpty() @MaxLength(512) @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message:
          'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
      })
    @ApiProperty({
            description: "For example - 'my-url'",
            example: 'my-blog-post'
    })
    slug: string;

    @IsEnum(postStatus) @IsNotEmpty()
    @ApiProperty({
        enum: postStatus,
        description: "Possible values 'draft', 'scheduled', 'review', 'published'"
    })
    status: postStatus;

    @IsString() @IsOptional()
    @ApiPropertyOptional({
        description: 'This is the content of the post',
        example: 'The post content'
    })
    content?: string;

    @IsOptional() @IsJSON()
    @ApiPropertyOptional({
        description:
          'Serialize your JSON object else a validation error will be thrown',
    })
    schema?: string;

    @IsString() @IsUrl() @MaxLength(1024)
    @ApiPropertyOptional({
        description: 'Featurted image for your blog posts',
        example: 'http://localhost.com/images/image1.jpg'
    })
    featuredImageUrl?: string;

    @IsISO8601() @IsOptional()
    @ApiProperty({
        description: 'Must be a valid timestamp in ISO8601',
        example: '2024-03-16T07:46:32+0000',
      })
    publishOn?: Date;

    @IsOptional() @IsArray() @IsInt({ each: true })
    @ApiPropertyOptional({
        description: 'Array of id of tags',
        example: ['1', '2']
    })
    tags?: number[];

    @IsOptional() @ValidateNested({each:true}) @Type(()=> CreatePostMetaOptionsDto)
    @ApiPropertyOptional({
        type: 'object',
        required: false,
        items: {
          type: 'object',
          properties: {
            metaValue: {
              type: 'json',
              description: 'The metaValue is a JSON string',
              example: '{sidebarEnaled: true}'
            },
          },
        },
      })
    metaOptions?: CreatePostMetaOptionsDto | null;

    @IsInt() @IsNotEmpty()
    @ApiProperty({
      type: 'integer',
      required: true,
      example: 1,
    })
    authorId: number;
}
