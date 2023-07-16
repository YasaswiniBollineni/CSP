import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc12Component } from './sc12.component';

describe('Sc12Component', () => {
  let component: Sc12Component;
  let fixture: ComponentFixture<Sc12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sc12Component]
    });
    fixture = TestBed.createComponent(Sc12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
