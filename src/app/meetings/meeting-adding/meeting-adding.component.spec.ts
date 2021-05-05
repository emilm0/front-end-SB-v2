import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingAddingComponent } from './meeting-adding.component';

describe('MeetingAddingComponent', () => {
  let component: MeetingAddingComponent;
  let fixture: ComponentFixture<MeetingAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingAddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
