import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Read2Component } from './read2.component';

describe('Read2Component', () => {
  let component: Read2Component;
  let fixture: ComponentFixture<Read2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Read2Component]
    });
    fixture = TestBed.createComponent(Read2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
