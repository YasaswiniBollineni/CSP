import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc6Component } from './sc6.component';

describe('Sc6Component', () => {
  let component: Sc6Component;
  let fixture: ComponentFixture<Sc6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sc6Component]
    });
    fixture = TestBed.createComponent(Sc6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
