import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WLavailableplansComponent } from './wlavailableplans.component';

describe('WLavailableplansComponent', () => {
  let component: WLavailableplansComponent;
  let fixture: ComponentFixture<WLavailableplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WLavailableplansComponent]
    });
    fixture = TestBed.createComponent(WLavailableplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
