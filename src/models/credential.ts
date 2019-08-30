import { Schema } from 'mongoose';

export const CredentialSchema = new Schema({
    userID: {
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
        required: false,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: new Date().toLocaleDateString()
    },
    type: {
        type: String,
        required: true,
    },
});
