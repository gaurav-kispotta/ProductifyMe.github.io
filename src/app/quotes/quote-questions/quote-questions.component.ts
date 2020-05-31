import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlusSquare, faMinusSquare, faThList } from '@fortawesome/free-solid-svg-icons';
import {format} from 'bytes';
import { QuoteQuestionsService } from '../quote-questions.service';

@Component({
  selector: 'app-quote-questions',
  templateUrl: './quote-questions.component.html',
  styleUrls: ['./quote-questions.component.css']
})
export class QuoteQuestionsComponent implements OnInit {
  public incrementIcon = faPlusSquare;
  public decrementIcon = faMinusSquare;
  public countValue: number;
  public isInputValid = false;

  public minCount = 0;
  public maxCount = 10;

  @Output() public value = new EventEmitter<number>();

  public questionTitle: string;
  @Input() public collectionIndex: number;

  public formatedValue: (v: number) => string;

  constructor(private quoteQuestionsService: QuoteQuestionsService) {

  }

  ngOnInit() {
    const q = this.quoteQuestionsService.getQuestion(this.collectionIndex);
    this.minCount = q.minCount;
    this.maxCount = q.maxCount;
    this.countValue = q.minCount;
    this.questionTitle = q.questionTitle;
    this.formatedValue = q.formatValueFunction;
  }

  incrementValue() {
    this.countValue = parseInt(this.countValue.toString(), 0) + 1;
    this.quoteQuestionsService.updateValues(this.collectionIndex, this.countValue);
  }

  decrementValue() {
    this.countValue = parseInt(this.countValue.toString(), 0) - 1;
    this.quoteQuestionsService.updateValues(this.collectionIndex, this.countValue);
  }

  onSliderChange(value: number) {
    this.countValue = value;
    this.quoteQuestionsService.updateValues(this.collectionIndex, value);
    this.quoteQuestionsService.cartUpdatedEvent();
  }

  validateMinButton() {
    this.validateCard(this.countValue);
    return this.countValue > this.minCount;
  }

  validateMaxButton() {
    this.validateCard(this.countValue);
    return this.countValue < this.maxCount;
  }

  inputValueChanged(changedValue: number, target: any) {
    const c = parseInt(changedValue.toString(), 0);

    if (!this.validateCard(c)) {
      this.countValue = this.minCount;
      target.value = this.minCount;
      alert(`Value provided for '${this.questionTitle}' out of range min:${this.minCount} and max:${this.maxCount}`);
    } else {
      this.countValue = c;
      this.quoteQuestionsService.updateValues(this.collectionIndex, this.countValue);
    }
  }

  validateCard(c: number): boolean {
    if (c >= this.minCount && c <= this.maxCount) {
      return true;
    } else {
      return false;
    }
  }

  prettyMinValue() {
    if (this.formatedValue) {
      return this.formatedValue(this.minCount);
    }
    return this.minCount;
  }

  prettyMaxValue() {
    if (this.formatedValue) {
      return this.formatedValue(this.maxCount);
    }
    return this.maxCount;
  }

  prettyCurrentValue() {
    if (this.formatedValue) {
      return this.formatedValue(this.maxCount);
    }
    return this.maxCount;
  }
}
