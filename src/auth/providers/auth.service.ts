import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin.dto';
import { SignInProvider } from './sign-in.provider';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(()=> UsersService))
        public readonly usersService:UsersService,

         /**
         * Inject the signInProvider
         */
        private readonly signInProvider: SignInProvider,
    ){}
    
    public async signIn(signInDto: SignInDto){
        return await this.signInProvider.signIn(signInDto);
    }

    public isAuth(){
        return true;
    }
}
