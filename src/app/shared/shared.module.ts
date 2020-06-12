import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorModule } from './security/auth-interceptor/auth-interceptor.module';
import { AuthService } from '../services/auth.service';
import { HttpErrorHandlerModule } from './security/auth-interceptor/http-error-handle-interceptor.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    HttpClientModule,
    AuthInterceptorModule,
    HttpErrorHandlerModule
  ],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
