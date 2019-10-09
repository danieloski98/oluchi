import { Controller, Post, Res, Body, UseGuards, Get, Param, Delete } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { ISecretQuestion } from '../../../models/secretquestion.Model';
import { Response } from 'express';
import * as joi from 'joi';
import { AuthorizationGuard } from '../../../guards/authorization.guard';

@Controller('secret')
export class SecretController {

    constructor(@InjectModel('Secret') private readonly secretDB: Model<ISecretQuestion>) {}

    @Post()
    // @UseGuards( new AuthorizationGuard())
    async addNewSecret(@Res() res: Response, @Body() body: ISecretQuestion): Promise<void> {
        // validation
        const Schema = joi.object().keys({
            userID: joi.string().required(),
            contents: joi.required(),
            type: joi.string().required(),
            name: joi.string().required(),
        });
        const verifyBody = Schema.validate(body);

        if (verifyBody.error === null) {
            try {
                const newSecret = await this.secretDB.insertMany([body]);
                res.status(201).send({
                    message: 'Secret inserted successfully',
                    data: newSecret,
                    error: null,
                    date: new Date().toLocaleDateString(),
                });
            } catch (error) {
                res.status(500).send({
                    message: 'internal server error',
                    data: null,
                    error,
                    date: new Date().toLocaleDateString(),
                });
            }
        } else {
            res.status(401).send({
                message: 'invalid object',
                error: verifyBody.error,
                data: null,
                date: new Date().toLocaleDateString(),
            });
        }
    }

    @Get(':userID')
    async getUserItems(@Res() res: Response, @Param() param): Promise<void> {
        try {
            const id = param.userID;
            console.log(id);
            const result = await this.secretDB.find({ userID: id});
            res.status(200).send({
                message: 'Success',
                error: null,
                data: result,
                date: new Date().toLocaleDateString(),
            });
        } catch (error) {
            console.log(error);
        }
    }

    @Delete(':id')
    async delete(@Res() res: Response, @Param() param): Promise<void> {
        try {
            const id = param.id;
            const deleted = await this.secretDB.findByIdAndDelete(id);
            res.status(200).send({
                messgae: 'Deleted',
                data: deleted,
                error: null,
                date: new Date().toLocaleDateString(),
            });
        } catch (error) {
            res.status(500).send({
                message: 'Internal Server error',
                data: null,
                error,
                date: new Date().toLocaleDateString(),
            });
        }
    }
}
