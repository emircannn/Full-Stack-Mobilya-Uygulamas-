import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromUrlQueryParameter('refresh_token'),
            passReqToCallback: true,
            secretOrKey: `${process.env.RT_SECRET}`,
        });
    }

    validate(req: Request, payload: any) {
        const refresh_token = req.query['refresh_token'];
        return {
            ...payload,
            refresh_token,
        };
    }
}
