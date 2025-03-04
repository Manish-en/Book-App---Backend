import { IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category } from "../schemas/book.schema";
import { User } from "src/auth/schemas/user.schema";

export class CreateBookDto{
    
    @IsNotEmpty()
    @IsString()
    readonly title : string;

    @IsNotEmpty()
    @IsString()
    readonly description : string;

    @IsNotEmpty()
    @IsString()
    readonly author : string;

    @IsNotEmpty()
    @IsNumber()
    readonly price : number;

    @IsNotEmpty()
    @IsEnum(Category,{message: 'Please enter the correct category'})
    readonly category : Category;

    @IsEmpty({message : "You cannot Pass user id"})
    readonly user: User
}