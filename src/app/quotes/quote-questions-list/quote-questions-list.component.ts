import { Component, OnInit } from '@angular/core';
import { QuoteQuestions } from 'src/app/models/quote-questions.model';
import { QuoteQuestionsService } from 'src/app/quotes/quote-questions.service';

@Component({
  selector: 'app-quote-questions-list',
  templateUrl: './quote-questions-list.component.html',
  styleUrls: ['./quote-questions-list.component.css']
})
export class QuoteQuestionsListComponent implements OnInit {

  public quoteQuestionList = new Array<QuoteQuestions>();

  constructor(private quoteQuestionsService: QuoteQuestionsService) {

    const q = new QuoteQuestions();
    q.questionTitle = 'Select total CPUs ?';
    q.minCount = 0;
    q.maxCount = 10;
    q.value = 0;

    const q1 = new QuoteQuestions();
    q1.questionTitle = 'Test';
    q1.minCount = 0;
    q1.maxCount = 10;
    q1.value = 0;

    this.quoteQuestionsService.addQestion(q);
    this.quoteQuestionsService.addQestion(q1);
   }

  ngOnInit() {
  }

  onValueChaned(changedValue: number, index: number) {
    this.quoteQuestionsService.updateValues(index, changedValue);
  }

  public getQuestionsList() {
    return this.quoteQuestionsService.getQuestions();
  }
}
