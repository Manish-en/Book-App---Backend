import { IsEmpty, IsEnum, IsNumber, IsOptional, IsSemVer, IsString } from "class-validator";
import { Category } from "../schemas/book.schema";
import { User } from "src/auth/schemas/user.schema";

export class UpdateBookDto{
    
    @IsOptional()
    @IsString()
    readonly title : string;

    @IsOptional()
    @IsString()
    readonly description : string;

    @IsOptional()
    @IsString()
    readonly author : string;

    @IsOptional()
    @IsNumber()
    readonly price : number;

    @IsOptional()
    @IsEnum(Category,{message:'Please enter correct category.'})
    readonly category : Category;

    @IsEmpty({message : "You cannot Pass user id"})
    readonly user: User
}