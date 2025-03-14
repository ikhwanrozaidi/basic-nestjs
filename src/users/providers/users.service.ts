import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";

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
        private usersRepository: Repository<User>
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
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
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