import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteQuestionsComponent } from './quote-questions.component';

describe('QuoteQuestionsComponent', () => {
  let component: QuoteQuestionsComponent;
  let fixture: ComponentFixture<QuoteQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
