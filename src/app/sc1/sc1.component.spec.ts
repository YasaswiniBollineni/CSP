import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc1Component } from './sc1.component';

describe('Sc1Component', () => {
  let component: Sc1Component;
  let fixture: ComponentFixture<Sc1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sc1Component]
    });
    fixture = TestBed.createComponent(Sc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
