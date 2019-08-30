import { Controller, Post, Res, Body, Get, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Document } from 'mongoose';
import { Response } from 'express';
import * as joi from 'joi';

interface ICredential extends Document {
    UserId: string;
    email: string;
    phone: string;
    password: string;
    name: string;
}

@Controller('credentials')
export class CredentialsController {

    constructor(@InjectModel('Credential') private readonly credential: Model<ICredential>) {}

    /**
     *create a new credential
     * @param res ;
     * @param body ;
     */

    @Post()
    async createCredential(@Res() res: Response, @Body() body: ICredential ): Promise<void> {
        const schema = joi.object().keys({
            userID: joi.string().required().trim(),
            name: joi.string().required().trim(),
            email: joi.string().required().trim(),
            phone: joi.string().required().min(11).max(11).trim(),
            password: joi.string().min(8).trim().required(),
            type: joi.string().required().trim(),
        });

        const validationResult = schema.validate(body);

        if (validationResult['error'] === null) {
            const r = await this.credential.insertMany([body]);
            res.send(r);
        } else {
            res.send(validationResult);
        }
    }

    @Get()
    async getAll(@Res() res: Response): Promise<void> {
        const result = await this.credential.find();
        res.send(result);
    }

    @Get(':id')
    async getOne(@Res() res: Response, @Param() param): Promise<void> {
        const id = param.id;
        try {
            const result = await this.credential.findById(id);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }
}
