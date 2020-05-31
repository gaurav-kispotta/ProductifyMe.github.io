import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpViewComponent } from './sp-view.component';

describe('SpViewComponent', () => {
  let component: SpViewComponent;
  let fixture: ComponentFixture<SpViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
