import { ApiProperty } from "@nestjs/swagger";
import { Product } from "@prisma/client";
import { UserEntity } from "src/user/entities/user.entity";

export class ProductEntity implements Product{
    @ApiProperty({default: 1})
    id: number;

    @ApiProperty({default: "Example Title"})
    title: string;

    @ApiProperty({default: "Example Description"})
    description: string;

    @ApiProperty({default: "Example Category"})
    category: string;

    @ApiProperty({required: false})
    userId: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}
