import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc8Component } from './sc8.component';

describe('Sc8Component', () => {
  let component: Sc8Component;
  let fixture: ComponentFixture<Sc8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sc8Component]
    });
    fixture = TestBed.createComponent(Sc8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
