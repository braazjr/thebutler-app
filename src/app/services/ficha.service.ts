import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FichaService {

  constructor(private http: HttpClient) { }

  getFichasFullForMorador(moradorId: string) {
    return this.http.get(`${environment.urlSpring}/fichas/morador/${moradorId}/full`)
    .pipe(
      catchError(error => {
        console.error(error);
        return throwError(error.message)
      })
    )
  }
}
