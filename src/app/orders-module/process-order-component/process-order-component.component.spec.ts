import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessOrderComponentComponent } from './process-order-component.component';

describe('ProcessOrderComponentComponent', () => {
  let component: ProcessOrderComponentComponent;
  let fixture: ComponentFixture<ProcessOrderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessOrderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessOrderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
