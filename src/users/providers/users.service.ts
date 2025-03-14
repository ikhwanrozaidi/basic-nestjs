import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { ConfigService, ConfigType } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthService } from "src/auth/providers/auth.service";
import { Repository } from "typeorm";
import profileConfig from "../config/profile.config";
import { CreateUserDto } from "../dtos/create-user.dto";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { User } from "../user.entity";

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
    ){}

    public async createUser (createUserDto: CreateUserDto){
        // Check is user exists with the same email
        const existingUser = await this.usersRepository.findOne({
            where: {email: createUserDto.email},

        })
        // Handle exception
        // Create a new user
        let newUser = this.usersRepository.create(createUserDto);
        newUser = await this.usersRepository.save(newUser);

        return newUser;
    }

    /**
     * The method to get all users from the database
     */
    public findAll(getUsersParamDto: GetUsersParamDto, limit: number, page: number
    ){
    // // get an environment variable
    // const environment = this.configService.get<string>('S3_BUCKET');
    // console.log(environment);

    //test the new config
    console.log(this.profileConfiguration);
    
        return [
            {
                firstName: "John",
                email:"John@dmail.com"
            },
            {
                firstName: "Alice",
                email:"Alice@dmail.com"
            }
        ]
    }

    /**
     * Find a user by ID
     */
    public async findOnebyId(id: number){
        return await this.usersRepository.findOneBy({
            id,
        })
    }
}