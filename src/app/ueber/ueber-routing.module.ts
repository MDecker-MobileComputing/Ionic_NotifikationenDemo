import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UeberPage } from './ueber.page';

const routes: Routes = [
  {
    path: '',
    component: UeberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UeberPageRoutingModule {}
