import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvinciaPage } from './provincia.page';

const routes: Routes = [
  {
    path: '',
    component: ProvinciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvinciaPageRoutingModule {}
