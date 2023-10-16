import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobAddPrepaidComponent } from './mob-add-prepaid.component';

describe('MobAddPrepaidComponent', () => {
  let component: MobAddPrepaidComponent;
  let fixture: ComponentFixture<MobAddPrepaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobAddPrepaidComponent]
    });
    fixture = TestBed.createComponent(MobAddPrepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
