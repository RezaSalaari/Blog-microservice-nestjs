import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { AppController } from "src/app.controller";
import { UserDto } from "./entities/dto/user-dto";
import { UserService } from "./user.service";
@Controller()
export class UserController {
    constructor(private usersServise: UserService) { }

    @MessagePattern('users/add')
    add(@Payload() dto: UserDto): Promise<any> {
        console.log(dto)
        return this.usersServise.add(dto);
    }

    @MessagePattern('users/chnagePassword')
    edit(@Payload() dto: UserDto): Promise<any> {
        return this.usersServise.editUser(dto);
    }

    @MessagePattern('users/findbyUsername')
    find(@Payload() username: string): Promise<any> {
        return this.usersServise.findUser(username);
    }

    @MessagePattern('users/findById')
    findbyId(@Payload() Id: number): Promise<any> {
        return this.usersServise.findUserById(<any>Id);
    }

}