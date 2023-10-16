import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobpostpaidComponent } from './mobpostpaid.component';

describe('MobpostpaidComponent', () => {
  let component: MobpostpaidComponent;
  let fixture: ComponentFixture<MobpostpaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobpostpaidComponent]
    });
    fixture = TestBed.createComponent(MobpostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
