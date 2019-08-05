import { Model } from 'mongoose';
import { RegisterDTO } from '../auth/dto/register.dto';
import { LoginDTO } from '../auth/dto/login.dto';
import { Payload } from '../types/payload';
import { User } from '../types/user';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    create(userDTO: RegisterDTO, file: any): Promise<any>;
    find(): Promise<User[]>;
    findByLogin(userDTO: LoginDTO): Promise<any>;
    findByPayload(payload: Payload): Promise<User>;
    sanitizeUser(user: User): any;
    update(id: string, user: RegisterDTO, file: any): Promise<User>;
}
