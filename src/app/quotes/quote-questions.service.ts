import { Injectable } from '@angular/core';
import { QuoteQuestions } from '../models/quote-questions.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteQuestionsService {

  private quoteQuestionList = new Array<QuoteQuestions>();

  public region: string;
  public country: string;
  public type: string;
  public performance: string;

  private cartUpdateSubject = new Subject();

  constructor() { }

  getQuestion(index: number) {
    return this.quoteQuestionList[index];
  }

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
    this.cartUpdateHandler();
  }

  updateRegion(value: string) {
    this.region = value;
    this.cartUpdateHandler();
  }

  updateCountry(value: string) {
    this.country = value;
    this.cartUpdateHandler();
  }

  updateType(value: string) {
    this.type = value;
    this.cartUpdateHandler();
  }

  updatePerformance(value: string) {
    this.performance = value;
    this.cartUpdateHandler();
  }

  cartUpdatedEvent() {
    this.cartUpdateSubject.next();
  }

  cartUpdateHandler() {
    return this.cartUpdateSubject;
  }
}
