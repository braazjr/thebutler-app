import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaListPageRoutingModule } from './ficha-list-routing.module';

import { FichaListPage } from './ficha-list.page';
import { FichaService } from 'src/app/services/ficha.service';
import { LoadingUtil } from 'src/app/utils/loading-util';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaListPageRoutingModule
  ],
  declarations: [FichaListPage],
  providers: [
    FichaService,
    LoadingUtil
  ]
})
export class FichaListPageModule { }
