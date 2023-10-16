import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlinePostpaidComponent } from './wline-postpaid.component';

describe('WlinePostpaidComponent', () => {
  let component: WlinePostpaidComponent;
  let fixture: ComponentFixture<WlinePostpaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WlinePostpaidComponent]
    });
    fixture = TestBed.createComponent(WlinePostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
