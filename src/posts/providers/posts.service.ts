import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
    constructor(
        //Injecting user service
        private readonly usersService: UsersService,
    ){}
    public findAll(userId: string){
        const user = this.usersService.findOnebyId(userId);

        return[
            {
                user:user,
                title: "title Test",
                content: "title 1"
            },
            {
                user:user,
                title: "title Test 2",
                content: "title 2"
            }
        ]

    }
}
