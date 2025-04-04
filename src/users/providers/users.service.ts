import { BadRequestException, HttpException, HttpStatus, Inject, Injectable, RequestTimeoutException, forwardRef } from "@nestjs/common";
import { ConfigService, ConfigType } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthService } from "src/auth/providers/auth.service";
import { DataSource, Repository } from "typeorm";
import profileConfig from "../config/profile.config";
import { CreateManyUsersDto } from "../dtos/create-many-users.dto";
import { CreateUserDto } from "../dtos/create-user.dto";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { User } from "../user.entity";
import { CreateUserProvider } from "./create-user.provider";
import { FindOneUserByEmailProvider } from "./find-one-user-by-email.provider";
import { UsersCreateManyProvider } from "./users-create-many.provider";

/**
 * Class to connect to Users table and perform business operation
 */

@Injectable()
export class UsersService {
    constructor(
        @Inject(forwardRef(()=> AuthService))
        public readonly authService:AuthService,

        /**
         * Injecting userRepository
         */
        @InjectRepository(User)
        private usersRepository: Repository<User>,

        /**
         * Inject the ConfigService
         */
        private readonly configService: ConfigService,

        /**
         * Inject the profileConfig
         */
        @Inject(profileConfig.KEY)
        private readonly profileConfiguration: ConfigType<typeof profileConfig>,

        /**
         * Inject the datasource
         */
        private dataSource: DataSource,

        /**
         * Inject UsersCreateMany provider
         */
        private readonly usersCreateManyProvider: UsersCreateManyProvider,

        /**
         * Inject create users provider
         */
        private readonly createUserProvider: CreateUserProvider,

        /**
         * Inject findOneUserByEmailProvider
         */
        private readonly findOneUserByEmailProvider: FindOneUserByEmailProvider,
    ){}

    public async createUser(createUserDto: CreateUserDto){
      return this.createUserProvider.createUser(createUserDto);
    }

    // Public method responsible for handling GET request for '/users' endpoint
    public findAll(
        getUserParamDto: GetUsersParamDto,
        limt: number,
        page: number,
    ) {
        let loggenIn = false;
        if (!loggenIn) {
        throw new HttpException(
            {
            status: HttpStatus.MOVED_PERMANENTLY,
            error: `The API endpoint doesn't exist anymore`,
            fileName: 'users.service.ts',
            lineNumber: 103,
            },
            HttpStatus.MOVED_PERMANENTLY,
            {
            cause: new Error(),
            description:
                'Occured because the API endpoint was permanently moved to a new location',
            },
        );
        }
    }

    // Public method used to find one user using the ID of the user
    public async findOneById(id: number) {
      let user = undefined;

      try{
          user = await this.usersRepository.findOneBy({
              id,
          });
      }
      catch(error){
          throw new RequestTimeoutException(
              'Unable to process your request at the moment please try later',
              {
              description: 'Error connecting to database',
              },
          );
      }

      // Handle the user does not exist       
      if(!user){
          throw new BadRequestException('The user id does not exist');
      }

      return user;
    }

    public async createMany(createManyUsersDto: CreateManyUsersDto) {
      return await this.usersCreateManyProvider.createMany(createManyUsersDto);
    }

    // Finds one user by email
    public async findOneByEmail(email: string) {
      return await this.findOneUserByEmailProvider.findOneByEmail(email);
    }
}