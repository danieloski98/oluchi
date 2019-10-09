import { Schema, Document} from 'mongoose';

export const SecretQuestionSchema = new Schema({
    userID: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    contents: {
        type: Array,
        required: true,
    },
    date: {
        type: Date,
        default: new Date().toLocaleDateString(),
        trim: true,
    },
});

export interface ISecretQuestion extends Document {
    userID: string;
    contents: IContent[];
    name: string;
    type: string;
}

interface IContent {
    question: string;
    answer: string;
}
