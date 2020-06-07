import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LoadingUtil } from 'src/app/utils/loading-util';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,

    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [LoginPage],
  providers: [
    LoadingUtil
  ]
})
export class LoginPageModule { }
