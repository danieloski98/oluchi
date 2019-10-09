import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/models/userModel';
import {compare, genSalt, hash } from 'bcrypt';

@Injectable()
export class DataBaseService {
    constructor(@InjectModel('User') private readonly USER: Model<IUser>) {}

    async checkUser(email, phone): Promise<boolean> {
        const result = await this.USER.find({ email });
        if (result.length === 0) {
            const resultForPhone = await this.USER.find({ phone });
            if (resultForPhone.length === 0) {
                return true;
            } else {
                return false;
            }
        }
        if (result.length > 0) {
            return false;
        }
    }

    async hashPassword(user: IUser): Promise<IUser> {
        const userClone = user;
        const generatedSalt = await  genSalt(10);
        const hashedPassword = await hash(userClone.password, generatedSalt);
        userClone.password = hashedPassword;
        user = userClone;
        return user;
    }
}
