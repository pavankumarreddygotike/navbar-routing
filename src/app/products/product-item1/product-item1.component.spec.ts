import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItem1Component } from './product-item1.component';

describe('ProductItem1Component', () => {
  let component: ProductItem1Component;
  let fixture: ComponentFixture<ProductItem1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItem1Component]
    });
    fixture = TestBed.createComponent(ProductItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
