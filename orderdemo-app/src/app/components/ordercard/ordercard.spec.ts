import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ordercard } from './ordercard';

describe('Ordercard', () => {
  let component: Ordercard;
  let fixture: ComponentFixture<Ordercard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ordercard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ordercard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
