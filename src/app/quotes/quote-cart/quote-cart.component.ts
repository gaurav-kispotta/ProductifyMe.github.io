import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteQuestionsService } from '../quote-questions.service';

@Component({
  selector: 'app-quote-cart',
  templateUrl: './quote-cart.component.html',
  styleUrls: ['./quote-cart.component.css']
})
export class QuoteCartComponent implements OnInit {

  public assetLife: number;
  public initialCapacity: number;
  public anualGrowth: number;
  public migrationPeriod: number;
  public initalCommit: number;

  public estimateTcv = 0.0;

  constructor(private router: Router, private quoteQuestionsService: QuoteQuestionsService) { }

  ngOnInit() {
    this.quoteQuestionsService.cartUpdateHandler().subscribe(() => {
      this.cartUpdatedHander();
    });
  }

  redirectToReport() {
    this.router.navigate(['/service/storage/report']);
  }

  cartUpdatedHander() {
    this.assetLife = this.quoteQuestionsService.getQuestion(0).value;
    this.initialCapacity = this.quoteQuestionsService.getQuestion(1).value;
    this.anualGrowth = this.quoteQuestionsService.getQuestion(2).value;
    this.migrationPeriod = this.quoteQuestionsService.getQuestion(3).value;
    this.initalCommit = this.quoteQuestionsService.getQuestion(4).value;

    this.estimateTcv = this.calculateTcv();
  }

  calculateTcv(): number {
    let tcv = 0;

    tcv = (this.assetLife / this.initalCommit) * 100;

    return tcv;
  }

}
