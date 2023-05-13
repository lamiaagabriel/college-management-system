import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfessorDialogComponent } from './edit-professor-dialog.component';

describe('EditProfessorDialogComponent', () => {
  let component: EditProfessorDialogComponent;
  let fixture: ComponentFixture<EditProfessorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfessorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfessorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
