import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductaddEditComponent } from './productadd-edit.component';

describe('ProductaddEditComponent', () => {
  let component: ProductaddEditComponent;
  let fixture: ComponentFixture<ProductaddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductaddEditComponent]
    });
    fixture = TestBed.createComponent(ProductaddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
