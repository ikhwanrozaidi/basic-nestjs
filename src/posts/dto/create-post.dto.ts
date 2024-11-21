import { IsArray, IsDate, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { postStatus } from "../enum/postStatus.enum";
import { postType } from "../enum/postType.enum";
import { CreatePostMetaOptionsDto } from "./create-post-metaoptions.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto {
    @IsString() @IsNotEmpty() @MinLength(4)
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

    @IsString() @IsNotEmpty() @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
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

    @IsString() @IsUrl()
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

    @IsOptional() @IsArray() @IsString({ each: true }) @MinLength(3, {each: true})
    @ApiPropertyOptional({
        description: 'Array of tags passed as string values',
        example: ['nestjs', 'typescript']
    })
    tags?: string[];

    @IsOptional() @IsArray() @ValidateNested({each:true}) @Type(()=> CreatePostMetaOptionsDto)
    @ApiPropertyOptional({
        type: 'array',
        required: false,
        items: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
            },
            value: {
              type: 'string',
            },
          },
        },
      })
    metaOptions?: CreatePostMetaOptionsDto[];
}
