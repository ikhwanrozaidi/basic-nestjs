import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, MaxLength, MinLength, Matches } from "class-validator";

export class CreateUserDto{
    @IsString() @IsNotEmpty() @MinLength(3) @MaxLength(93)
    firstName: string;

    @IsString() @IsOptional() @MinLength(3) @MaxLength(93)
    lastName: string;

    @IsString() @IsNotEmpty() @IsEmail()
    email: string;

    @IsString() @IsNotEmpty() @MinLength(8)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message:
          'Minimum eight characters, at least one letter, one number and one special character',
      })
    password: string;
}