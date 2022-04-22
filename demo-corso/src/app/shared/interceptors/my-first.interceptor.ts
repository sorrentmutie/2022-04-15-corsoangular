import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class MyFirstInterceptor implements HttpInterceptor {

  token = 'zzzzzzz';
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //console.log(request);
    let richiestaClonata = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + this.token)
    });

    let richiestaClonata2 = richiestaClonata.clone(
      {
        headers: request.headers.set('Accept','application/myttututu')
    });

    const x =  next.handle(richiestaClonata2)
      .pipe(
        map( (event: HttpEvent<any>) => {
          if(event instanceof HttpResponse) {
            console.log('event...');
            console.log(event);
          }
          return event;
        }),
        catchError( (error: HttpErrorResponse) => {
          console.log(error);
          return throwError({ error: "errore" });
        })
      );
    return x;
  }
}
