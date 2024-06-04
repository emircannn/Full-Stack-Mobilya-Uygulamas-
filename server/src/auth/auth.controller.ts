import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Res,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { MessageType } from 'types';
import { LoginDto } from './dto/login.dto';
import { AtGuard } from 'src/common/guards/at.guard';
import { RtGuard } from 'src/common/guards/rt.guard';
import { getCurrentUser } from 'src/common/decorators/get_current_user.decorator';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    @HttpCode(HttpStatus.CREATED)
    signup(@Body() dto: SignupDto, @Res() res: Response) {
        return this.authService.signup(dto, res);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() dto: LoginDto, @Res() res: Response) {
        return this.authService.login(dto, res);
    }

    @UseGuards(AtGuard)
    @Post('logout')
    @HttpCode(HttpStatus.OK)
    logout(@getCurrentUser('id') id: number): Promise<MessageType> {
        return this.authService.logout(id);
    }

    @UseGuards(RtGuard)
    @Post('refresh')
    refresh(@getCurrentUser() user: any, @Res() res: Response) {
        return this.authService.refresh(user['id'], user['refresh_token'], res);
    }
}
