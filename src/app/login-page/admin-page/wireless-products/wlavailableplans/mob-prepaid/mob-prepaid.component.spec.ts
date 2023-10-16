import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobPrepaidComponent } from './mob-prepaid.component';

describe('MobPrepaidComponent', () => {
  let component: MobPrepaidComponent;
  let fixture: ComponentFixture<MobPrepaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobPrepaidComponent]
    });
    fixture = TestBed.createComponent(MobPrepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
