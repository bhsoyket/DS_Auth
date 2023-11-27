
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'
export class CreateUserDto {
    @IsNotEmpty()
    @IsString({ message: 'Please Enter Valid Name' })
    first_name: string;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsString()
    phone: string;

    @IsString()
    date_of_birth: string;

    @IsString()
    password: string;

    @IsString()
    address: string;

    @IsEmail()
    status: string;

    @IsEmail()
    email: string;
  
}
