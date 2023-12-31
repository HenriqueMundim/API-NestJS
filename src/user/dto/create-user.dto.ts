import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDTO {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword({
        minLength: 5,
        minSymbols: 1,
        minUppercase: 1,
        minNumbers: 1
    })
    password: string;
}