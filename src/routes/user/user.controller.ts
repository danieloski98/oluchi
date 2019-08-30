import { Controller, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import * as joi from 'joi';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/models/userModel';
import {DataBaseService} from './DatabaseServce';


@Controller('user')
export class UserController {

    constructor(@InjectModel('User') private readonly USER: Model<IUser>, private DBService: DataBaseService) {}

    /**
     * creates a new user
     * @param res
     * @param body
     */

    @Post()
    async createUser(@Res() res: Response, @Body() body: IUser): Promise<void> {
        body.email.toLowerCase();
        const UserSchema = joi.object().keys({
            firstname: joi.string().required().min(3).trim(),
            lastname: joi.string().required().min(3).trim(),
            email: joi.string().required().min(8).trim(),
            phone: joi.string().required().min(11).max(11).trim(),
            password: joi.string().required().min(8).max(255).trim(),
        });

        // validating the body of the request

        const joiValidationResult = UserSchema.validate(body);
        if (joiValidationResult['error'] === null) {
            const emailCheckResult = await this.DBService.checkUser(body.email, body.phone);
            if (emailCheckResult === true) {
                    const newUserWithHashedPassword =  await this.DBService.hashPassword(body);
                    this.USER.insertMany([newUserWithHashedPassword])
                    .then(data => {
                        res.status(201).send({
                            message: 'Account created Successfully',
                            data,
                            error: null,
                            date: new Date().toLocaleDateString(),
                        });
                    })
                    .catch(error => {
                        res.status(500).send({
                            messgae: 'An error occured while trying to create your account, please try again',
                            data: null,
                            error,
                            date: new Date().toLocaleDateString(),
                        });
                    });
                    // res.send('user created');
            } else {
                    res.status(400).send({
                        message: 'A user exist with that email or phone',
                        data: null,
                        error: 'User exist',
                        date: new Date().toLocaleDateString(),
                    });
                }
        } else {
            res.status(400).send({
                messgae: 'An error occured',
                data: null,
                error: joiValidationResult['error'],
                date: new Date().toLocaleDateString(),
            });
        }
    }
}
