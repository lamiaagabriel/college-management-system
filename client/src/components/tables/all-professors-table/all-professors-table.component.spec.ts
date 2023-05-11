import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProfessorsTableComponent } from './all-professors-table.component';

describe('AllProfessorsTableComponent', () => {
  let component: AllProfessorsTableComponent;
  let fixture: ComponentFixture<AllProfessorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProfessorsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProfessorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
