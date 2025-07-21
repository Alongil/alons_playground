import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { UserRole } from '../../db/enums';

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsOptional()
    role: UserRole;
}