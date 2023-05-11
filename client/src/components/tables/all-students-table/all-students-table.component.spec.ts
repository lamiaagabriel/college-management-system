import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentsTableComponent } from './all-students-table.component';

describe('AllStudentsTableComponent', () => {
  let component: AllStudentsTableComponent;
  let fixture: ComponentFixture<AllStudentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStudentsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllStudentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
