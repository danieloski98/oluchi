import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs';
import { ICredential } from '../globals/User.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {


  pageTitleClone: BehaviorSubject<string> = new BehaviorSubject('Dashboard');
  pageTitle: Observable<string> = this.pageTitleClone.asObservable();
  userClone = new BehaviorSubject({});
  user = this.userClone.asObservable();

  constructor() { }

  changeTitle(title): void {
    this.pageTitleClone.next(title);
  }

  get pageTitleGetter(): Observable<string> {
    return this.pageTitle;
  }

  addUser(user: ICredential | {}): void {
    this.userClone.next(user);
  }

  get getUser(): Observable<ICredential | {}> {
    return of<ICredential | {}>(this.user);
  }
}
