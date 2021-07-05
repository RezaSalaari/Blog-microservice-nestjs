import { EntitySchema } from "typeorm";
import { Action } from "../models/action";
export const ActionsSchema = new EntitySchema<Action>({
    name: 'Action',
    target: Action,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },

        action: {
            type: String,
        }
    }
})