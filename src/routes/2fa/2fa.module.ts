import { Module } from '@nestjs/common';
import { TfaController } from './2fa.controller';

@Module({
  controllers: [TfaController]
})
export class TfaModule {}
