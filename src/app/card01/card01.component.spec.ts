import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card01Component } from './card01.component';

describe('Card01Component', () => {
  let component: Card01Component;
  let fixture: ComponentFixture<Card01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
