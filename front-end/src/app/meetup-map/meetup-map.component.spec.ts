import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupMapComponent } from './meetup-map.component';

describe('MeetupMapComponent', () => {
  let component: MeetupMapComponent;
  let fixture: ComponentFixture<MeetupMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
