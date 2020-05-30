import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeViewComponent } from './compute-view.component';

describe('ComputeViewComponent', () => {
  let component: ComputeViewComponent;
  let fixture: ComponentFixture<ComputeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
