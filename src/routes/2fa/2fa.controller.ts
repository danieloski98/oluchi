import { Controller, Post, Body, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { _I2FA } from '../../models/2fa.model';
import { Model } from 'mongoose';
import { Response } from 'express';
import { IUser } from '../../models/userModel';

@Controller('Tfa')
export class TfaController {

    constructor(@InjectModel('_2fa') private readonly _2FA: Model<_I2FA>, @InjectModel('user') private readonly userSchema: Model<IUser>) {}

}
