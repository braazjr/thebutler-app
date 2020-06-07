import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isPublic(req) && !localStorage.getItem('accessToken')) {
      this.router.navigate(['/login']);
    } else if (!this.isPublic(req)) {
      return next.handle(req.clone({
        setHeaders: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      }))
    } else {
      return next.handle(req)
    }
  }

  isPublic(req) {
    return req.url.split('/')[3] == 'oauth' || (req.url.split('/')[3] == 'igrejas' && req.method == 'POST');
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthInterceptorModule { }

