import { UserDto } from "./entities/dto/user-dto";
import { UserService } from "./user.service";
export declare class UserController {
    private usersServise;
    constructor(usersServise: UserService);
    add(dto: UserDto): Promise<any>;
    edit(dto: UserDto): Promise<any>;
    find(username: string): Promise<any>;
    findbyId(Id: number): Promise<any>;
}
