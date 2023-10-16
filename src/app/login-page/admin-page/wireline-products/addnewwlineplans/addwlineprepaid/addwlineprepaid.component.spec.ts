import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwlineprepaidComponent } from './addwlineprepaid.component';

describe('AddwlineprepaidComponent', () => {
  let component: AddwlineprepaidComponent;
  let fixture: ComponentFixture<AddwlineprepaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddwlineprepaidComponent]
    });
    fixture = TestBed.createComponent(AddwlineprepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
