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
    q.questionTitle = 'Select total CPUs ?';
    q.minCount = 0;
    q.maxCount = 10;
    q.value = 0;


    this.quoteQuestionList.push(q);
    this.quoteQuestionList.push(q);
    this.quoteQuestionList.push(q);
    this.quoteQuestionList.push(q);
   }

  ngOnInit() {
  }

}
