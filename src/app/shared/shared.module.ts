import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorModule } from './security/auth-interceptor/auth-interceptor.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    HttpClientModule,
    AuthInterceptorModule
  ]
})
export class SharedModule { }
