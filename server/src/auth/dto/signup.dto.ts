import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignupDto {
    @IsEmail({}, { message: 'Lutfen gecerli bir email adresi girin' })
    @IsNotEmpty({ message: 'Email Alani Bos Birakilamaz' })
    email: string;

    @IsNotEmpty({ message: 'Isim Alani Bos Birakilamaz' })
    name: string;

    @IsNotEmpty({ message: 'Soyisim Alani Bos Birakilamaz' })
    surname: string;

    @IsNotEmpty({ message: 'Telefon Alani Bos Birakilamaz' })
    phone: string;

    @IsNotEmpty({ message: 'Sifre Alani Bos Birakilamaz' })
    password: string;

    gender: boolean;
}
