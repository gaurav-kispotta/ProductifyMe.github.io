import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteQuestionsComponent } from './quotes/quote-questions/quote-questions.component';
import { QuoteQuestionsListComponent } from './quotes/quote-questions-list/quote-questions-list.component';
import { QuoteCartComponent } from './quotes/quote-cart/quote-cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    QuoteQuestionsComponent,
    QuoteQuestionsListComponent,
    QuoteCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
