import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQueueComponent } from './product-queue.component';

describe('ProductQueueComponent', () => {
  let component: ProductQueueComponent;
  let fixture: ComponentFixture<ProductQueueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductQueueComponent]
    });
    fixture = TestBed.createComponent(ProductQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
