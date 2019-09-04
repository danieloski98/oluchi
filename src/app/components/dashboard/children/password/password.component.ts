import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ICredential } from '../../../../globals/User.interface';
import { UserStateService } from 'src/app/state/user-state.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class PasswordComponent implements OnInit {

  password: Array<ICredential>;
  itemId: string;
  index: number;
  state: string;
  itemName: string;
  data = ELEMENT_DATA;
  displayedColumns: string[] = ['position', 'name', 'weight', 'username', 'phone', 'password', 'actions'];

  httpOptions = {
    headers: new HttpHeaders({
      Authorization : localStorage.getItem('token')
    }),
  };

  constructor(private http: HttpClient,
              private router: Router,
              private userServ: UserStateService,
              private modal: NgbModal,
              config: NgbModalConfig) {
                config.backdrop = 'static';
                config.keyboard = false;
               }

  ngOnInit() {
    this.state = 'loading';
    this.password = [];
    const user = localStorage.getItem('user');
    if (user === null || user === undefined) {
      this.router.navigate((['/login']));
    }
    this.http.get(`http://localhost:3000/credentials/user/${user}`, this.httpOptions)
    .subscribe(
      (data: ICredential[]) => {
        console.log(data);
        this.password = data;
        if (this.password.length === 0) {
          this.state = 'empty';
        } else {
          this.state = 'contain';
        }
      },
      error => {
        console.log(error);
        this.state = 'error';
      }
    );

    this.userServ.changeTitle('Dashboard');
  }

  getFirstCharacter(name: string): string {
    return name.charAt(0);
  }

  openModal(template, index: number, item: ICredential) {
    this.modal.open(template);
    this.index = index;
    this.itemId = item['_id'];
    this.itemName = item['name'];
  }


  delete(): void {
    this.state = 'loading';
    this.modal.dismissAll();
    this.http.delete(`http://localhost:3000/credentials/${this.itemId}`, this.httpOptions)
    .subscribe(
      (data) => {
        console.log(data);
        this.password.splice(this.index, 1);
        if (this.password.length === 0) {
          this.state = 'empty';
        } else {
          this.state = 'contain';
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigate(id, name): void {
    this.userServ.changeTitle(name);
    this.router.navigate([`/dashboard/view/${id}`]);
  }

  retry(): void {
    this.state = 'loading';
    const user = localStorage.getItem('user');
    this.http.get(`http://localhost:3000/credentials/user/${user}`, this.httpOptions)
    .subscribe(
      (data: ICredential[]) => {
        this.password = data;
        if (this.password.length === 0) {
          this.state = 'empty';
        } else {
          this.state = 'contain';
        }
      },
      (error) => {
        console.log(error);
        this.state = 'error';
      }
    );
  }

  checkPassword(password: string) {
    if (password.length <= 8 && !password.includes('@&.%$!')) {
      return 'Weak';
    }
    if (password.length >= 10 && !password.includes('@&.%$!')) {
      return 'fair';
    }
  }

}
