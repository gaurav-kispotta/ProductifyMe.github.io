import { Component, OnInit, Input, Output } from '@angular/core';
import { faPlusSquare, faMinusSquare, faThList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-questions',
  templateUrl: './quote-questions.component.html',
  styleUrls: ['./quote-questions.component.css']
})
export class QuoteQuestionsComponent implements OnInit {
  public incrementIcon = faPlusSquare;
  public decrementIcon = faMinusSquare;

  @Input() public minCount = 0;
  @Input() public maxCount = 10;

  @Output() public countValue = this.minCount;

  @Input() public questionTitle: string;

  constructor() {}

  ngOnInit() {
  }

  incrementValue() {
    this.countValue += 1;
  }

  decrementValue() {
    this.countValue -= 1;
  }

  onSliderChange(value: number) {
    this.countValue = value;
  }

  validateMinButton() {
    return this.countValue > this.minCount;
  }

  validateMaxButton() {
    return this.countValue < this.maxCount;
  }
}
