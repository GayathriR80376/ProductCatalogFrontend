import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewWlessplansComponent } from './add-new-wlessplans.component';

describe('AddNewWlessplansComponent', () => {
  let component: AddNewWlessplansComponent;
  let fixture: ComponentFixture<AddNewWlessplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewWlessplansComponent]
    });
    fixture = TestBed.createComponent(AddNewWlessplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
