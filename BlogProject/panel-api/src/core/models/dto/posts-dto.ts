import { ApiProperty } from "@nestjs/swagger";

export class PostDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    text: string;
    // comments :Comment[];
    @ApiProperty()
    category: number;
    @ApiProperty()
    user: number;
    @ApiProperty()
    commentStatus: boolean;
    @ApiProperty()
    commentLimit: number
    @ApiProperty()
    tags?: number[]
}