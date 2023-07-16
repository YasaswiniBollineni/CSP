import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insert2Component } from './insert2.component';

describe('Insert2Component', () => {
  let component: Insert2Component;
  let fixture: ComponentFixture<Insert2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Insert2Component]
    });
    fixture = TestBed.createComponent(Insert2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
