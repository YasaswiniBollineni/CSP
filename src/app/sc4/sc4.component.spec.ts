import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc4Component } from './sc4.component';

describe('Sc4Component', () => {
  let component: Sc4Component;
  let fixture: ComponentFixture<Sc4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sc4Component]
    });
    fixture = TestBed.createComponent(Sc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
