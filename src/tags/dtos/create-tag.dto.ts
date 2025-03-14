import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength } from "class-validator";


export class CreateTagDto {
    @ApiProperty()
    @IsNotEmpty() @IsString() @MinLength(3) @MaxLength(256) @IsOptional()
    name: string;

    @ApiProperty({
        description: "For example - 'my-url'",
        example: 'my-blog-post'
    })
    @IsOptional() @IsString() @IsNotEmpty() @MaxLength(256) @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message:
          'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
      })
    slug: string;

    @ApiPropertyOptional()
    @IsString() @IsNotEmpty()
    @IsOptional()
    description?: string;

    @ApiPropertyOptional()
    @IsJSON() @IsNotEmpty()
    @IsOptional()
    schema?: string;

    @ApiPropertyOptional()
    @IsUrl() @IsNotEmpty() @MaxLength(1024)
    @IsOptional()
    featuredImageUrl?: string;
}