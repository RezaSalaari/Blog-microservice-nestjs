import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserDto } from "./entities/dto/user-dto";
import { User } from "./entities/models/user";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) { }

    add(dto: UserDto): Promise<any> {
        return this.usersRepository.save(<any>dto);
    }
    editUser(dto: UserDto): Promise<any> {
        return this.usersRepository.save(<any>dto);
    }
    findUser(username: string): Promise<User> {
        return this.usersRepository.findOne({ username: username });
    }

    findUserById(id: number): Promise<User> {
        return this.usersRepository.findOne(id);
    }
}
