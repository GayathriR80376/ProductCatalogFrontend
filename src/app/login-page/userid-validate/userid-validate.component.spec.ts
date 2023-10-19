import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseridValidateComponent } from './userid-validate.component';

describe('UseridValidateComponent', () => {
  let component: UseridValidateComponent;
  let fixture: ComponentFixture<UseridValidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseridValidateComponent]
    });
    fixture = TestBed.createComponent(UseridValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
