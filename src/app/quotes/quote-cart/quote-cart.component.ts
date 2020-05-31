import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-cart',
  templateUrl: './quote-cart.component.html',
  styleUrls: ['./quote-cart.component.css']
})
export class QuoteCartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToReport() {
    this.router.navigate(['/service/storage/report']);
  }

}
