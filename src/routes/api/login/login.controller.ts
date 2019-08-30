import { Controller, Get, Res, Post, Body, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { IUser } from 'src/models/userModel';
import { LoginService } from './loginService';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { compare } from 'bcrypt';
import * as jwt from 'jsonwebtoken';

interface ILogin {
    email: string;
    password: string;
}

@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService, @InjectModel('User') private readonly USER: Model<IUser>) {}

    @Post()
    async loginUser(@Res() res: Response, @Body() body: ILogin): Promise<void> {
        try {
            const emailUsed = await this.USER.find({ email: body.email });
            if (emailUsed.length === 0) {
                res.status(500).send({
                    message: `There is no account with this email ${body.email}`,
                    data: null,
                    error: 'No account',
                    date: new Date().toLocaleDateString(),
                });
            } else {
                emailUsed.forEach( email => {
                    compare(body.password, email.password, (err, same) => {
                        console.log(same);
                        if (err) {
                            throw new HttpException('Internal server error', 500);
                        }
                        if (same) {
                            const token = jwt.sign({ email: email.email, password: email.password}, 'SECRETKEY', {expiresIn: '2h'});
                            res.status(201).send({
                                message: 'login successful',
                                data: {
                                    token,
                                    user: emailUsed,
                                },
                                error: null,
                                date: new Date().toLocaleDateString(),
                            });
                        } else {
                            res.status(400).send({
                                message: 'Invalid password',
                                data: null,
                                error: 'Not Match',
                                date: new Date().toLocaleDateString(),
                            });
                        }
                    });
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Internal server error',
                data: null,
                error,
                date: new Date().toLocaleDateString(),
            });
        }
    }
}
