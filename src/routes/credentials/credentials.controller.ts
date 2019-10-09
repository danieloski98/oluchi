import { Controller, Post, Res, Body, Get, Param, UseGuards, Delete, Put } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Document } from 'mongoose';
import { Response } from 'express';
import * as joi from 'joi';
import { AuthorizationGuard } from '../../guards/authorization.guard';

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

    @Get('')
    async getAll(@Res() res: Response): Promise<void> {
        const result = await this.credential.find();
        res.send(result);
    }

    @Get('user/:userId')
    @UseGuards( new AuthorizationGuard())
    async getUserCredentials( @Res() res: Response, @Param() param): Promise<void> {
        const userid = param['userId'];
        try {
            const result = await this.credential.find({ userID: userid });
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }

    @Delete(':id')
    @UseGuards( new AuthorizationGuard())
    async deleteCredential(@Res() res: Response, @Param() param): Promise<void> {
        const id = param.id;
        try {
            const del = await this.credential.findByIdAndDelete(id);
            console.log(del);
            res.send(del);
        } catch (error) {
            res.send(error);
        }
    }

    @Get(':id')
    @UseGuards( new AuthorizationGuard())
    async getOne(@Res() res: Response, @Param() param): Promise<void> {
        const id = param.id;
        try {
            const result = await this.credential.findById(id);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }

    @Put(':id')
    @UseGuards( new AuthorizationGuard())
    async update(@Res() res: Response, @Body() body: ICredential, @Param() param: string): Promise<void> {
        try {
            const _id = param['id'];
            const updatedValued = await this.credential.findByIdAndUpdate(_id, { $set: body});
            res.status(201).send({
                message: 'Updated successfull',
                data: updatedValued,
                error: null,
                date: new Date().toLocaleDateString(),
            });
        } catch (error) {
            res.status(500).send({
                message: 'An error occured while trying to update this field',
                data: null,
                error,
                date: new Date().toLocaleDateString(),
            });
        }

    }
}
