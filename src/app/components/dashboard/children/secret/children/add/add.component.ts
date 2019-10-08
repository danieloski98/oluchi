import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserStateService } from 'src/app/state/user-state.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form: FormGroup;
  userID: string;
  httpOptions: object;
  @Output() public submitted = new EventEmitter();

  constructor(private userService: UserStateService,
              private fb: FormBuilder,
              private http: HttpClient) { }

  ngOnInit() {
    this.userService.changeTitle('New Secret Question');
    this.userID = localStorage.getItem('user');
    this.httpOptions  = {
      header: new HttpHeaders({
        Authorization: this.userID,
      })
    };

    this.form = this.fb.group({
      type: ['', [ Validators.required]],
      name: ['', [Validators.required]],
      contents: this.fb.array([])
    });

    this.Questions.push(this.generateNewFields());
  }

  get Questions(): FormArray {
    return this.form.get('contents') as FormArray;
  }

  generateNewFields(): FormGroup {
    return this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
    });
  }

  addNewFields(): void {
   this.Questions.push(this.generateNewFields());
  }

  delete(i: number): void {
    this.Questions.removeAt(i);
  }

  submit(): void {
    interface IContent  {
      question: string;
      answer: string;
    }
    let clone = {
      userID: this.userID,
      name: this.form.get('name').value,
      type: this.form.get('type').value,
      contents: this.form.get('contents').value as Array<IContent>,
    };

    this.http.post('http://localhost:3000/secret', clone, this.httpOptions)
    .subscribe(
      (result) => {
        // alert(JSON.stringify(result));
        this.submitted.emit('submitted');
      },
      error => {
        console.log(error);
      }
    );

  }

}
