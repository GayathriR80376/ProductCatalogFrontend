import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlineprepaidComponent } from './wlineprepaid.component';

describe('WlineprepaidComponent', () => {
  let component: WlineprepaidComponent;
  let fixture: ComponentFixture<WlineprepaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WlineprepaidComponent]
    });
    fixture = TestBed.createComponent(WlineprepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
