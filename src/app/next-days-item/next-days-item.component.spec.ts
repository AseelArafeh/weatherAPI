import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDaysItemComponent } from './next-days-item.component';

describe('NextDaysItemComponent', () => {
  let component: NextDaysItemComponent;
  let fixture: ComponentFixture<NextDaysItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextDaysItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextDaysItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
