import * as mongoose from 'mongoose';
import { boolean } from 'joi';

export const USER = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    sex: {
        type: String,
        required: true,
        trim: true,
    },
    preferences: {
        type: {},
        default: {
            'theme': 'light',
            '2FA': false,
        },
    },
    // verified: {
    //     type: boolean,
    //     default: false,
    // },
});

export interface IUser extends mongoose.Document {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    createdAt?: Date;
    username: string;
    sex: string;
    verified: boolean;
}
