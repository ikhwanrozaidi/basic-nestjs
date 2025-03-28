import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Auth } from './decorators/auth.decorator';
import { RefreshTokenDto } from './dtos/refresh-token.dto';
import { SignInDto } from './dtos/signin.dto';
import { AuthType } from './enums/auth-type.enum';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('sign-in')
    @Auth(AuthType.None)
    @HttpCode(HttpStatus.OK)
    public async signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto);
    }

    @Auth(AuthType.None)
    @HttpCode(HttpStatus.OK)
    @Post('refresh-tokens')
    refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
        return this.authService.refreshTokens(refreshTokenDto);
  }
}
