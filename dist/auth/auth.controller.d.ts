import { UserService } from '../shared/user.service';
import { RegisterDTO } from '../auth/dto/register.dto';
import { LoginDTO } from '../auth/dto/login.dto';
import { AuthService } from './auth.service';
import { User } from 'src/types/user';
export declare class AuthController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    login(userDTO: LoginDTO): Promise<{
        user: any;
        token: string;
    }>;
    register(userDTO: RegisterDTO, file: any): Promise<{
        user: any;
        token: string;
    }>;
    update(id: any, registerDTO: RegisterDTO, file: any): Promise<User>;
}
