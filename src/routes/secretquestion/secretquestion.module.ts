import { Module } from '@nestjs/common';
import { SecretController } from './secret/secret.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {SecretQuestionSchema} from '../../models/secretquestion.Model';

@Module({
  controllers: [SecretController],
  imports: [
    MongooseModule.forFeature([{ name: 'Secret', schema: SecretQuestionSchema }]),
  ]
})
export class SecretquestionModule {}
