import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CreateUserProvider } from './providers/create-user.provider';
import { FindOneUserByEmailProvider } from './providers/find-one-user-by-email.provider';
import { UsersCreateManyProvider } from './providers/users-create-many.provider';
import { UsersService } from './providers/users.service';
import { User } from './user.entity';
import { UsersController } from './users.controller';

import profileConfig from './config/profile.config';

@Module({
    controllers:[UsersController],
    providers: [
      UsersService, 
      UsersCreateManyProvider, 
      CreateUserProvider, 
      FindOneUserByEmailProvider,
    ],
    exports: [UsersService],
    imports: [
        TypeOrmModule.forFeature([User]),
        forwardRef(() => AuthModule),
        ConfigModule.forFeature(profileConfig),
      ],
})
export class UsersModule {}


