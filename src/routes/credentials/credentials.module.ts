import { Module } from '@nestjs/common';
import { CredentialsController } from './credentials.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CredentialSchema } from '../../models/credential';

@Module({
  controllers: [CredentialsController],
  imports: [
    MongooseModule.forFeature([{ name: 'Credential', schema: CredentialSchema }]),
  ],
})
export class CredentialsModule {}
