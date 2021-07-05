export class Posts {
    id: number;
    text: string;
    // comments :Comment[];
    category: number;
    user: number;
    commentStatus: boolean;
    commentLimit: number
    tags?: number[]
}