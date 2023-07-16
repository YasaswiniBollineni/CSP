import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc11Component } from './sc11.component';

describe('Sc11Component', () => {
  let component: Sc11Component;
  let fixture: ComponentFixture<Sc11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sc11Component]
    });
    fixture = TestBed.createComponent(Sc11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
