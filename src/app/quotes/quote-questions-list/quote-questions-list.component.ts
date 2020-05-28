import { Component, OnInit } from '@angular/core';
import { QuoteQuestions } from 'src/app/models/quote-questions.model';

@Component({
  selector: 'app-quote-questions-list',
  templateUrl: './quote-questions-list.component.html',
  styleUrls: ['./quote-questions-list.component.css']
})
export class QuoteQuestionsListComponent implements OnInit {

  public quoteQuestionList = new Array<QuoteQuestions>();

  constructor() {

    const q = new QuoteQuestions();
    q.questionTitle = 'Asset Life?(In Months)';
    q.minCount = 36;
    q.maxCount = 96;
    q.value = 0;

    const q1 = new QuoteQuestions();
    q1.questionTitle = 'Initial Capacity Requirement ?(In TiB)';
    q1.minCount = 0;
    q1.maxCount = 25600;
    q1.value = 0;

    const q2 = new QuoteQuestions();
    q2.questionTitle = 'Annual Growth ?(In Percentage)';
    q2.minCount = 1;
    q2.maxCount = 100;
    q2.value = 0;

    const q3 = new QuoteQuestions();
    q3.questionTitle = 'Migration Period ?(In Months)';
    q3.minCount = 0;
    q3.maxCount = 24;
    q3.value = 0;


    this.quoteQuestionList.push(q);
    this.quoteQuestionList.push(q1);
    this.quoteQuestionList.push(q2);
    this.quoteQuestionList.push(q3);
   }

  ngOnInit() {
  }

}
