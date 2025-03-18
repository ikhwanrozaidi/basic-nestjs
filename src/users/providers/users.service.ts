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

        // Injecting ConfigService
        private readonly configService: ConfigService,

        // Injecting profileConfig
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
    ){}

    public async createUser(createUserDto: CreateUserDto) {
        let existingUser = undefined;
    
        try {
          // Check if user with email exists
          existingUser = await this.usersRepository.findOne({
            where: { email: createUserDto.email },
          });

        } catch (error) {
          throw new RequestTimeoutException(
            'Unable to process your request at the moment please try later',
            {
              description: 'Error connecting to database',
            },
          );
        }
    
        /**
         * Handle exceptions if user exists later
         * */
        if (existingUser) {
          throw new BadRequestException(
            'The user already exists, please check your email',
          );
        }
    
        let newUser = this.usersRepository.create(createUserDto);

        try {
        newUser = await this.usersRepository.save(newUser);
        } catch (error) {
        throw new RequestTimeoutException(
            'Unable to process your request at the moment please try later',
            {
            description: 'Error connecting to database',
            },
        );
        }

        return newUser;
    }

    /**
     * Public method responsible for handling GET request for '/users' endpoint
     */
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

    /**
     * Public method used to find one user using the ID of the user
     */
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

      /**
       * Handle the user does not exist
       */
      if(!user){
          throw new BadRequestException('The user id does not exist');
      }

      return user;
    }

    public async createMany(createManyUsersDto: CreateManyUsersDto) {
      return await this.usersCreateManyProvider.createMany(createManyUsersDto);
    }
}