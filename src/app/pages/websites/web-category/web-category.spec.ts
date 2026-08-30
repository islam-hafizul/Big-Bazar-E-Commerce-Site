import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCategory } from './web-category';

describe('CustomerCategory', () => {
  let component: WebCategory;
  let fixture: ComponentFixture<WebCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCategory],
    }).compileComponents();

    fixture = TestBed.createComponent(WebCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
