import { User } from "src/users/entities/models/user";

export class Blog {
    id?: number;
    title: string;
    user: User
}