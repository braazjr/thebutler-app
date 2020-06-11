import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssociationAboutPageRoutingModule } from './association-about-routing.module';

import { AssociationAboutPage } from './association-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssociationAboutPageRoutingModule
  ],
  declarations: [AssociationAboutPage]
})
export class AssociationAboutPageModule {}
