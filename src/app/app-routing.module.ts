import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsrimapComponent } from './esrimap/esrimap.component';

const routes: Routes = [

  { path: '', redirectTo: 'esri', pathMatch: 'full' },
  { path: 'esri', component: EsrimapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
