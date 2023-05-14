import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentProfessorsComponent } from './recent-professors.component';

describe('RecentProfessorsComponent', () => {
  let component: RecentProfessorsComponent;
  let fixture: ComponentFixture<RecentProfessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentProfessorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
