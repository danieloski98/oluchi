import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { USER } from '../../models/userModel';
import { DataBaseService } from './DatabaseServce';

@Module({
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: USER},
    ]),
  ],
  providers: [
    DataBaseService,
  ]
})
export class UserModule {}
