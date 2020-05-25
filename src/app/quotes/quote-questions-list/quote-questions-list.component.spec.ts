import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteQuestionsListComponent } from './quote-questions-list.component';

describe('QuoteQuestionsListComponent', () => {
  let component: QuoteQuestionsListComponent;
  let fixture: ComponentFixture<QuoteQuestionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteQuestionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
