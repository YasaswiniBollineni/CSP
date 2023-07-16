import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc5Component } from './sc5.component';

describe('Sc5Component', () => {
  let component: Sc5Component;
  let fixture: ComponentFixture<Sc5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sc5Component]
    });
    fixture = TestBed.createComponent(Sc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
