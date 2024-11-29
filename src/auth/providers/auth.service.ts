import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(()=> UsersService))
        public readonly usersService:UsersService,
    ){}
    
    public login(email:string, password:string, id: string){
        // const user = this.usersService.findOnebyId('1234');
        //login
        return "SAMPLE_TOKEN";
    }

    public isAuth(){
        return true;
    }
}
