import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentdegreeDialogComponent } from './add-studentdegree-dialog.component';

describe('AddStudentdegreeDialogComponent', () => {
  let component: AddStudentdegreeDialogComponent;
  let fixture: ComponentFixture<AddStudentdegreeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentdegreeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentdegreeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
