import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

interface JwtPayload {
    id: string;
    email: string;
}

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromUrlQueryParameter('access_token'),
            secretOrKey: `${process.env.AT_SECRET}`,
        });
    }

    validate(payload: JwtPayload) {
        return payload;
    }
}
