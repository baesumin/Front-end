import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditOfferPage } from './edit-offer.page';

const routes: Routes = [
  {
    path: '',
    component: EditOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditOfferPageRoutingModule {}
