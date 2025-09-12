import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogcard } from './blogcard';

describe('Blogcard', () => {
  let component: Blogcard;
  let fixture: ComponentFixture<Blogcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
