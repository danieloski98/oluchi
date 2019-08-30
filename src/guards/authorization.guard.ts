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
    console.log(auth);
    if (typeof auth !== 'object') {
      const valid = jwt.verify(auth, 'SECRETKEY');
      if (typeof valid === 'string') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
