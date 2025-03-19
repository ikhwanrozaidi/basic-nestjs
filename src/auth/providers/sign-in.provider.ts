import {
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/providers/users.service';
import jwtConfig from '../config/jwt.config';
import { SignInDto } from '../dtos/signin.dto';
import { ActiveUserData } from '../interfaces/active-user-interfaces';
import { HashingProvider } from './hashing.provider';
  
  @Injectable()
  export class SignInProvider {
    constructor(
      /**
       * Inject the usersService
       */
      @Inject(forwardRef(() => UsersService))
      private readonly usersService: UsersService,
  
      /**
       * Inject the hashingProvider
       */
      private readonly hashingProvider: HashingProvider,
  
      /**
       * Inject jwtService
       */
      private readonly jwtService: JwtService,
  
      /**
       * Inject jwtConfiguration
       */
      @Inject(jwtConfig.KEY)
      private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    ) {}
  
    public async signIn(signInDto: SignInDto) {
      // Find user by email ID
      // Throw exception if user is not found
      let user = await this.usersService.findOneByEmail(signInDto.email);
  
      let isEqual: boolean = false;
  
      try {
        isEqual = await this.hashingProvider.comparePassword(
          signInDto.password,
          user.password,
        );
      } catch (error) {
        throw new RequestTimeoutException(error, {
          description: 'Could not compare the password',
        });
      }
  
      if (!isEqual) {
        throw new UnauthorizedException('Password does not match');
      }
  
      // Generate access token
      const accessToken = await this.jwtService.signAsync(
        {
          sub: user.id,
          email: user.email,
        } as ActiveUserData,
        {
          audience: this.jwtConfiguration.audience,
          issuer: this.jwtConfiguration.issuer,
          secret: this.jwtConfiguration.secret,
          expiresIn: this.jwtConfiguration.accessTokenTtl,
        },
      );

      return {
        accessToken,
      };
    }
  }
  