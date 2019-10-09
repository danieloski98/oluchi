import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { USER } from '../../../models/userModel';
import { LoginService } from './loginService';

@Module({
  controllers: [LoginController],
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: USER }]),
  ],
  providers: [
    LoginService,
  ]
})
export class LoginModule {}
