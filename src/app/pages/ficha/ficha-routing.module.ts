import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ficha-list'
  },
  {
    path: 'ficha-list',
    loadChildren: () => import('./ficha-list/ficha-list.module').then( m => m.FichaListPageModule)
  },
  {
    path: 'ficha',
    loadChildren: () => import('./ficha/ficha.module').then( m => m.FichaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaPageRoutingModule {}
