import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './routes/api/auth/auth.controller';
import { PasswordController } from './routes/api/password/password.controller';
import { HttpModule } from '@nestjs/common';
import { LoginModule } from './routes/api/login/login.module';
import {MongooseModule} from '@nestjs/mongoose';
import { UserModule } from './routes/user/user.module';
import { TfaModule } from './routes/2fa/2fa.module';
import { CredentialsModule } from './routes/credentials/credentials.module';

@Module({
  imports: [HttpModule,
            LoginModule,
            MongooseModule.forRoot('mongodb://localhost/oluchi',
            { useNewUrlParser: true }),
            UserModule,
            TfaModule,
            CredentialsModule],
  controllers: [AppController, AuthController, PasswordController],
  providers: [AppService],
})
export class AppModule {}
