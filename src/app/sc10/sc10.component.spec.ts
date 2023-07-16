import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc10Component } from './sc10.component';

describe('Sc10Component', () => {
  let component: Sc10Component;
  let fixture: ComponentFixture<Sc10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sc10Component]
    });
    fixture = TestBed.createComponent(Sc10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
