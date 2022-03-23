import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGroupsCardComponent } from './section-groups-card.component';

describe('SectionGroupsCardComponent', () => {
  let component: SectionGroupsCardComponent;
  let fixture: ComponentFixture<SectionGroupsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionGroupsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGroupsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
