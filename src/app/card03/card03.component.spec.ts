import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card03Component } from './card03.component';

describe('Card03Component', () => {
  let component: Card03Component;
  let fixture: ComponentFixture<Card03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
