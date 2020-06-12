import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaListPage } from './ficha-list.page';

const routes: Routes = [
  {
    path: '',
    component: FichaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaListPageRoutingModule {}
