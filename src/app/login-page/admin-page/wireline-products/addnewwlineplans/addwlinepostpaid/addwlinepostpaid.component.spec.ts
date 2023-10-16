import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwlinepostpaidComponent } from './addwlinepostpaid.component';

describe('AddwlinepostpaidComponent', () => {
  let component: AddwlinepostpaidComponent;
  let fixture: ComponentFixture<AddwlinepostpaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddwlinepostpaidComponent]
    });
    fixture = TestBed.createComponent(AddwlinepostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
