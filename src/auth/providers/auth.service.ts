import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import { SignInDto } from '../dtos/signin.dto';
import { RefreshTokensProvider } from './refresh-tokens.provider';
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

        /**
         * Inject refreshTokensProvider
         */
        private readonly refreshTokensProvider: RefreshTokensProvider,
    ){}
    
    public async signIn(signInDto: SignInDto){
        return await this.signInProvider.signIn(signInDto);
    }

    public async refreshTokens(refreshTokenDto: RefreshTokenDto) {
        return await this.refreshTokensProvider.refreshTokens(refreshTokenDto);
      }
}
