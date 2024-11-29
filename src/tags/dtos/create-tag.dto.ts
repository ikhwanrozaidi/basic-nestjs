import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength, Matches, IsJSON, IsUrl, Max } from "class-validator";


export class CreateTagDto {
    @ApiProperty()
    @IsNotEmpty() @IsString() @MinLength(3) @MaxLength(256)
    name: string;

    @ApiProperty({
        description: "For example - 'my-url'",
        example: 'my-blog-post'
    })
    @IsString() @IsNotEmpty() @MaxLength(256) @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message:
          'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
      })
    slug: string;

    @ApiPropertyOptional()
    @IsString() @IsNotEmpty()
    description?: string;

    @ApiPropertyOptional()
    @IsJSON() @IsNotEmpty()
    schema?: string;

    @ApiPropertyOptional()
    @IsUrl() @IsNotEmpty() @MaxLength(1024)
    featuredImageUrl?: string;
}