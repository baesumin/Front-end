import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceDetailPage } from './place-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceDetailPageRoutingModule {}
