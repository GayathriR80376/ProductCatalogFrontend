import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobAddPostpaidComponent } from './mob-add-postpaid.component';

describe('MobAddPostpaidComponent', () => {
  let component: MobAddPostpaidComponent;
  let fixture: ComponentFixture<MobAddPostpaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobAddPostpaidComponent]
    });
    fixture = TestBed.createComponent(MobAddPostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
