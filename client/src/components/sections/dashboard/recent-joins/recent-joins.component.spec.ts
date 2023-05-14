import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentJoinsComponent } from './recent-joins.component';

describe('RecentJoinsComponent', () => {
  let component: RecentJoinsComponent;
  let fixture: ComponentFixture<RecentJoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentJoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentJoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
