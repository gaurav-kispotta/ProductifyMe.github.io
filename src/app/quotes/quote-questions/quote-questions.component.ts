import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlusSquare, faMinusSquare, faThList } from '@fortawesome/free-solid-svg-icons';

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

  @Input() public minCount = 0;
  @Input() public maxCount = 10;

  @Output() public value = new EventEmitter<number>();

  @Input() public questionTitle: string;

  constructor() {
    this.countValue = 0;
  }

  ngOnInit() {
  }

  incrementValue() {
    this.countValue = parseInt(this.countValue.toString(), 0) + 1;
    this.value.emit(this.countValue);
  }

  decrementValue() {
    this.countValue = parseInt(this.countValue.toString(), 0) - 1;
    this.value.emit(this.countValue);
  }

  onSliderChange(value: number) {
    this.countValue = value;
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
    }
  }

  validateCard(c: number): boolean {
    if (c >= this.minCount && c <= this.maxCount) {
      return true;
    } else {
      return false;
    }
  }
}
