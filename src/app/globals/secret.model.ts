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
