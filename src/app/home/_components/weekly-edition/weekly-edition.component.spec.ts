import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyEditionComponent } from './weekly-edition.component';

describe('WeeklyEditionComponent', () => {
  let component: WeeklyEditionComponent;
  let fixture: ComponentFixture<WeeklyEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
