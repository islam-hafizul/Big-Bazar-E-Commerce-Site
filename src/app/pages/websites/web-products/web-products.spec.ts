import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebProducts } from './web-products';

describe('CustomerProducts', () => {
  let component: WebProducts;
  let fixture: ComponentFixture<WebProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(WebProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
