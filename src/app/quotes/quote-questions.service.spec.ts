import { TestBed } from '@angular/core/testing';

import { QuoteQuestionsService } from './quote-questions.service';

describe('QuoteQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuoteQuestionsService = TestBed.get(QuoteQuestionsService);
    expect(service).toBeTruthy();
  });
});
