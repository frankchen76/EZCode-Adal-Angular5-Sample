import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgraphComponent } from './msgraph.component';

describe('MsgraphComponent', () => {
  let component: MsgraphComponent;
  let fixture: ComponentFixture<MsgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
