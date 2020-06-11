import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociationAboutPage } from './association-about.page';

const routes: Routes = [
  {
    path: '',
    component: AssociationAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociationAboutPageRoutingModule {}
