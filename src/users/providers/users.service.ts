import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";

@Injectable()
export class UsersService {
    constructor(
        @Inject(forwardRef(()=> AuthService))
        public readonly authService:AuthService,
    ){}

    public findAll(getUsersParamDto: GetUsersParamDto, limit: number, page: number
    ){
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    
        //AuthService
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

    // Find a user by ID
    public findOnebyId(id:string){
        return {
            id: 1234,
            firstName: 'Alice',
            email: 'alice@doe.com'
        }
    }
}