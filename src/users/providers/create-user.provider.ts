import { BadRequestException, forwardRef, Inject, Injectable, RequestTimeoutException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../user.entity';

@Injectable()
export class CreateUserProvider {
    constructor(
        /**
         * Injecting userRepository
         */
        @InjectRepository(User)
        private usersRepository: Repository<User>,

        /**
         * Injecting hashingProvider
         */
        @Inject(forwardRef(()=> HashingProvider))
        private hashingProvider: HashingProvider,
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
    
        let newUser = this.usersRepository.create({
            ...createUserDto,
            password: await this.hashingProvider.hashPassword(createUserDto.password),
        });

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
}
