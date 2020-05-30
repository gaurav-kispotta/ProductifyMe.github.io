import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteQuestionsComponent } from './quotes/quote-questions/quote-questions.component';
import { QuoteQuestionsListComponent } from './quotes/quote-questions-list/quote-questions-list.component';
import { QuoteCartComponent } from './quotes/quote-cart/quote-cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { QuoteQuestionsService } from './quotes/quote-questions.service';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { ComputeViewComponent } from './view/services/compute-view/compute-view.component';
import { StorageViewComponent } from './view/services/storage-view/storage-view.component';
import { BackupViewComponent } from './view/services/backup-view/backup-view.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteQuestionsComponent,
    QuoteQuestionsListComponent,
    QuoteCartComponent,
    HomeViewComponent,
    ComputeViewComponent,
    StorageViewComponent,
    BackupViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    QuoteQuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
