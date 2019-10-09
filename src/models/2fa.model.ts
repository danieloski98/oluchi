import { Schema, Document } from 'mongoose';
import { required } from 'joi';

// tslint:disable-next-line: variable-name
export const _2FaModel = new Schema({
    email: {
        type: String,
        required: true,
    }
});

// tslint:disable-next-line: no-empty-interface
export interface _I2FA extends Document {
    email: string;
}