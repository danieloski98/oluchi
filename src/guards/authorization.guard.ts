import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean  {
    const httpClone: Request = context.switchToHttp().getRequest();
    const auth = httpClone.headers['authorization'];
    if (auth) {
      // return true;
     const value = jwt.verify(auth, 'SECRETKEY');
     if (value) {
       return true;
     }
    }

    return false;
  }
}
