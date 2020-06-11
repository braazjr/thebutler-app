import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = `${environment.urlSpring}/oauth/token`;
  jwtPayload: any;
  tokensRenokeUrl = `${environment.urlSpring}/tokens/revoke`;
  hds = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic dGhlYnV0bGVyX2FuZ3VsYXI6dGhlYnV0bGVyX2FuZ3VsYXI='
  });

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router) { }

  login(user: String, password: String): Observable<void> {
    const body = `username=${user}&password=${password}&grant_type=password`;

    console.info(`-- logging in with user ${user}`)
    return this.http.post(this.oauthTokenUrl, body,
      { headers: this.hds, withCredentials: true })
      .pipe(
        map(response => {
          console.info('-- authenticated user')
          this.saveTokenAndRefreshToken(response as any);
        }),
        catchError(response => {
          if (response.status === 400 && response.error === 'invalid_grant') {
            return Promise.reject('Invalid email or password!');
          }

          return Promise.reject(response);
        })
      )
  }

  private saveTokenAndRefreshToken(jwt: string) {
    localStorage.setItem('token', jwt['access_token']);
    localStorage.setItem('refreshToken', jwt['refresh_token']);
  }

  logout() {
    this.clearAccessToken();
    this.router.navigate(['/auth/login']);
  }

  clearAccessToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.jwtPayload = null;
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');
    const jwtHelper: JwtHelperService = new JwtHelperService();

    return !token || jwtHelper.isTokenExpired(token);
  }

  getNewAccessToken() {
    const body = `grant_type=refresh_token&refresh_token=${localStorage.getItem('refreshToken')}`;

    return this.http.post(this.oauthTokenUrl, body,
      { headers: this.hds, withCredentials: true })
      .pipe(
        map(response => {
          this.saveTokenAndRefreshToken(response as any);
        }),
        catchError(error => {
          console.info('Error renewing token', error);
          return Promise.resolve(null);
        })
      )
  }

  getLoggedUser() {
    if (localStorage.getItem('token') !== null) {
      return this.jwtHelper.decodeToken(localStorage.getItem('token')).usuario;
    }
  }
}
