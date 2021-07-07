import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPostPage } from './add-post.page';

const routes: Routes = [
  {
    path: '',
    component: AddPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPostPageRoutingModule {}
