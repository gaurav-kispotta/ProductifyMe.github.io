import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { StorageViewComponent } from './view/services/storage-view/storage-view.component';
import { ComputeViewComponent } from './view/services/compute-view/compute-view.component';
import { BackupViewComponent } from './view/services/backup-view/backup-view.component';

const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'service/storage', component: StorageViewComponent},
  { path: 'service/compute', component: ComputeViewComponent},
  { path: 'service/backup', component: BackupViewComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
