import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card04Component } from './card04.component';

describe('Card04Component', () => {
  let component: Card04Component;
  let fixture: ComponentFixture<Card04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
