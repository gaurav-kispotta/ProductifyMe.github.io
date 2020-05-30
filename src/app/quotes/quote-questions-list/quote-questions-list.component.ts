import { Component, OnInit } from '@angular/core';
import { QuoteQuestions } from 'src/app/models/quote-questions.model';
import { QuoteQuestionsService } from 'src/app/quotes/quote-questions.service';
import { format } from 'bytes';
import { months } from 'moment';

@Component({
  selector: 'app-quote-questions-list',
  templateUrl: './quote-questions-list.component.html',
  styleUrls: ['./quote-questions-list.component.css']
})
export class QuoteQuestionsListComponent implements OnInit {

  public quoteQuestionList = new Array<QuoteQuestions>();

  constructor(private quoteQuestionsService: QuoteQuestionsService) {

    const q = new QuoteQuestions();
    q.questionTitle = 'Asset Life?(In Months)';
    q.minCount = 36;
    q.maxCount = 96;
    // q.formatValueFunction = (v) => months(v);


    const q1 = new QuoteQuestions();
    q1.questionTitle = 'Initial Capacity Requirement ?(In TiB)';
    q1.minCount = 0;
    q1.maxCount = 25600;

    const q2 = new QuoteQuestions();
    q2.questionTitle = 'Annual Growth ?(In Percentage)';
    q2.minCount = 1;
    q2.maxCount = 100;
    q2.formatValueFunction = (v) => `${v}%`;

    const q3 = new QuoteQuestions();
    q3.questionTitle = 'Migration Period ?(In Months)';
    q3.minCount = 0;
    q3.maxCount = 24;

    const q4 = new QuoteQuestions();
    q4.questionTitle = 'Initial Commit ?(In percentage)';
    q4.minCount = 0;
    q4.maxCount = 70;
    q4.formatValueFunction = (v) => `${v}%`;

    this.quoteQuestionsService.addQestion(q);
    this.quoteQuestionsService.addQestion(q1);
    this.quoteQuestionsService.addQestion(q2);
    this.quoteQuestionsService.addQestion(q3);
    this.quoteQuestionsService.addQestion(q4);
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
