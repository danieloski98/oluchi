import { Module } from '@nestjs/common';
import { TfaController } from './2fa.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { _2FaModel } from '../../models/2fa.model';
import { USER } from '../../models/userModel';

@Module({
  controllers: [TfaController],
  imports: [
    MongooseModule.forFeature([{ name: '_2fa', schema: _2FaModel}, { name: 'user', schema: USER}]),
  ]
})
export class TfaModule {}
