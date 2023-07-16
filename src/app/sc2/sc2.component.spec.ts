import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc2Component } from './sc2.component';

describe('Sc2Component', () => {
  let component: Sc2Component;
  let fixture: ComponentFixture<Sc2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sc2Component]
    });
    fixture = TestBed.createComponent(Sc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
