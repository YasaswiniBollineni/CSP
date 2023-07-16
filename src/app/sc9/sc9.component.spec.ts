import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc9Component } from './sc9.component';

describe('Sc9Component', () => {
  let component: Sc9Component;
  let fixture: ComponentFixture<Sc9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sc9Component]
    });
    fixture = TestBed.createComponent(Sc9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
