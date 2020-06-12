import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isPublic(req) && this.authService.isInvalidAccessToken()) {
      console.info('-- request with invalid token. get new token...')

      return this.authService.getNewAccessToken()
        .pipe(
          switchMap(() => {
            console.info('-- new token created. next request...');

            return next.handle(req.clone({
              setHeaders: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
            }));
          })
        )
    } else if (!this.isPublic(req) && localStorage.getItem('token')) {
      return next.handle(req.clone({
        setHeaders: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }))
    } else if (this.isPublic(req)) {
      return next.handle(req)
    } else {
      this.router.navigate(['/login']);
    }
  }

  isPublic(req) {
    return req.url.split('/')[3] == 'oauth';
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

