import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';
import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

@Injectable()
/**
 * this middleware get the response captcha from google
 * And Check it 
 * if true call the next(),
 * if false response the error 
 */

export class LoggerMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        let result = await axios({
            method: 'post',
            url: 'https://www.google.com/recaptcha/api/siteverify',
            params: {
                secret: '6LcDoz8bAAAAAFjeuMpkZ37B8hdZ5zCYv5r0Olya',
                response: req.body['g-recaptcha-response']
            }
        })
        if (result.data.success) { next() } else {
            throw new ForbiddenException() ? result.data : { success: false, error: 'captcha_error' }
        }
    }
}
