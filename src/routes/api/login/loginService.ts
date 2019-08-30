import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/models/userModel';

@Injectable()
export class LoginService {

    constructor(@InjectModel('User') private readonly USER: Model<IUser>) {}

     checkEmail(email: string, password: string) {}
}
