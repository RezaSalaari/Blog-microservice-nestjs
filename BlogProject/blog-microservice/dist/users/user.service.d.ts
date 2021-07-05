import { Repository } from "typeorm";
import { UserDto } from "./entities/dto/user-dto";
import { User } from "./entities/models/user";
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    add(dto: UserDto): Promise<any>;
    editUser(dto: UserDto): Promise<any>;
    findUser(username: string): Promise<User>;
    findUserById(id: number): Promise<User>;
}
