import { Injectable } from '@angular/core';
import { QuoteQuestions } from '../models/quote-questions.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteQuestionsService {

  private quoteQuestionList = new Array<QuoteQuestions>();

  constructor() { }

  getQuestions(): Array<QuoteQuestions> {
    return this.quoteQuestionList;
  }

  addQestion(q: QuoteQuestions) {
    this.quoteQuestionList.push(q);
  }

  addQuestions(questions: QuoteQuestions[]) {
    this.quoteQuestionList.push(...questions);
  }

  updateValues(index: number, value: number) {
    this.quoteQuestionList[index].value = value;
  }

}
