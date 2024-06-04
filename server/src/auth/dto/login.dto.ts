import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
    @IsEmail({}, { message: 'Lutfen gecerli bir email adresi girin' })
    @IsNotEmpty({ message: 'Email Alani Bos Birakilamaz' })
    email: string;

    @IsNotEmpty({ message: 'Sifre Alani Bos Birakilamaz' })
    password: string;
}
