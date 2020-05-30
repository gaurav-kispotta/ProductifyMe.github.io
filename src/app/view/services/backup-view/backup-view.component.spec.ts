import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupViewComponent } from './backup-view.component';

describe('BackupViewComponent', () => {
  let component: BackupViewComponent;
  let fixture: ComponentFixture<BackupViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
