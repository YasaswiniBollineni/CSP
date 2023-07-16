import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc3Component } from './sc3.component';

describe('Sc3Component', () => {
  let component: Sc3Component;
  let fixture: ComponentFixture<Sc3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sc3Component]
    });
    fixture = TestBed.createComponent(Sc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
