import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpasswordComponent } from './addpassword.component';

describe('AddpasswordComponent', () => {
  let component: AddpasswordComponent;
  let fixture: ComponentFixture<AddpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
