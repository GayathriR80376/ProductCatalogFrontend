import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelineProductsComponent } from './wireline-products.component';

describe('WirelineProductsComponent', () => {
  let component: WirelineProductsComponent;
  let fixture: ComponentFixture<WirelineProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WirelineProductsComponent]
    });
    fixture = TestBed.createComponent(WirelineProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
