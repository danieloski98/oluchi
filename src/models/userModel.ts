import * as mongoose from 'mongoose';

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
        default: new Date().toLocaleDateString(),
    },
});

export interface IUser extends mongoose.Document {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    createdAt?: Date;
}
