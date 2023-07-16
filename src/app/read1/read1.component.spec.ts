import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Read1Component } from './read1.component';

describe('Read1Component', () => {
  let component: Read1Component;
  let fixture: ComponentFixture<Read1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Read1Component]
    });
    fixture = TestBed.createComponent(Read1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
