import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBussPlanComponent } from './add-buss-plan.component';

describe('AddBussPlanComponent', () => {
  let component: AddBussPlanComponent;
  let fixture: ComponentFixture<AddBussPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBussPlanComponent]
    });
    fixture = TestBed.createComponent(AddBussPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
