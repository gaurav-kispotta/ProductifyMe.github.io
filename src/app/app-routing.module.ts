import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { StorageViewComponent } from './view/services/storage-view/storage-view.component';
import { ComputeViewComponent } from './view/services/compute-view/compute-view.component';
import { BackupViewComponent } from './view/services/backup-view/backup-view.component';
import { ReportViewComponent } from './view/services/storage-view/report-view/report-view/report-view.component';
import { BdViewComponent } from './view/contacts/bd-view/bd-view.component';
import { SpViewComponent } from './view/contacts/sp-view/sp-view.component';

const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'service/storage', component: StorageViewComponent},
  { path: 'service/storage/report', component: ReportViewComponent},
  { path: 'service/compute', component: ComputeViewComponent},
  { path: 'service/backup', component: BackupViewComponent},
  { path: 'contacts/bdcontacts', component: BdViewComponent},
  { path: 'contacts/spcontacts', component: SpViewComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
