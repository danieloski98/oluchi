import { Controller, Post, Req, Res, HttpService } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
const messagebird = require('messagebird')['oYlnQPj2Q3Z9W21iXXGTzC1pWkmylho4'];

@Controller('api')
export class AuthController {
    constructor(private http: HttpService) {}
    @Post('auth')
    get(@Req() req: Request, @Res() res: Response): void {
        const body = {
            originator: 'oYlnQPj2Q3Z9W21iXXGTzC1pWkmylho4',
        };
        const result: Observable<AxiosResponse> = this.http.post('https://rest.messagebird.com/verify', body);
        result.toPromise()
        .then(data => {
            res.send(data);
        })
        .catch( err => {
            res.send(err);
        });
    }
}
