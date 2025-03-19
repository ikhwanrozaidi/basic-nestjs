import {
    Body,
    Controller,
    DefaultValuePipe,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AuthType } from 'src/auth/enums/auth-type.enum';
import { CreateManyUsersDto } from './dtos/create-many-users.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
    constructor(
        // Injecting Users Service
        private readonly usersService: UsersService,
    ){}

    @Get('/:id?')
    @ApiOperation({
        summary: 'Fetches a list of registered users on the application'
    })
    @ApiResponse({
        status: 200,
        description: 'Users fetched succefully based on the query',
    })
    @ApiQuery(
        {
            name: 'limit',
            type: 'number',
            required: false,
            description: 'The number of entries returm per query',
            example: 10
        }
    )
    @ApiQuery(
        {
            name: 'page',
            type: 'number',
            required: false,
            description: 'The position of the page number that you want the API to return',
            example: 1
        }
    )
    public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto, 
    @Query('limit',  new DefaultValuePipe(10), ParseIntPipe) limit: number,  
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number){
        return this.usersService.findAll(getUsersParamDto, limit, page);
    }

    @Post()
    // @SetMetadata('authType', 'none')
    @Auth(AuthType.None)
    public createUsers(@Body() createUserDto: CreateUserDto){
        return this.usersService.createUser(createUserDto);
    }

    @Post('create-many')
    public createManyUsers(@Body() createManyUsersDto: CreateManyUsersDto) {
        return this.usersService.createMany(createManyUsersDto);
    }

    @Patch()
    public patch(@Body() patchUserDto: PatchUserDto){
        return patchUserDto
    }
}
