import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc7Component } from './sc7.component';

describe('Sc7Component', () => {
  let component: Sc7Component;
  let fixture: ComponentFixture<Sc7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sc7Component]
    });
    fixture = TestBed.createComponent(Sc7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
