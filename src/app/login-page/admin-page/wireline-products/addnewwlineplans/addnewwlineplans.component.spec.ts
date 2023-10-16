import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewwlineplansComponent } from './addnewwlineplans.component';

describe('AddnewwlineplansComponent', () => {
  let component: AddnewwlineplansComponent;
  let fixture: ComponentFixture<AddnewwlineplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewwlineplansComponent]
    });
    fixture = TestBed.createComponent(AddnewwlineplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
