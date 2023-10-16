import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlineavailableplansComponent } from './wlineavailableplans.component';

describe('WlineavailableplansComponent', () => {
  let component: WlineavailableplansComponent;
  let fixture: ComponentFixture<WlineavailableplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WlineavailableplansComponent]
    });
    fixture = TestBed.createComponent(WlineavailableplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
