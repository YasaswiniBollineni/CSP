import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc13Component } from './sc13.component';

describe('Sc13Component', () => {
  let component: Sc13Component;
  let fixture: ComponentFixture<Sc13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sc13Component]
    });
    fixture = TestBed.createComponent(Sc13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
