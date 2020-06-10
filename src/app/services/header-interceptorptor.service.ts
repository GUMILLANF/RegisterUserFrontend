import { Injectable, NgModule, ViewChild } from '@angular/core';
import { HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable()
export class HeaderInterceptorptorService implements HttpInterceptor {

  constructor() { }

  processaError(error: HttpErrorResponse) {
    let errorMessage = '';
    console.log(error)
    if (error.error instanceof ErrorEvent) {
      errorMessage = 'Error: ' + error.error.error;
      console.error(error.error);
    } else {
      if (error.status == 403) {
        errorMessage = "Acesso negado. Faça o login novamente.";
        console.error("Erro " + error.status + " - " + errorMessage + " | " + error.error);
      } else {
        for (var i = 0; i < error.error.length; i++) {
          console.log(error.error[i]);
          errorMessage = errorMessage + (i === 0 ? '' : '\n') + error.error[i].userMessage;
        }
      }
    }
    swal.fire({
      position: 'center',
      icon: 'error',
      title: errorMessage,
      showConfirmButton: true,
      timer: 6000
    });
    return throwError(errorMessage);
  }

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    if (localStorage.getItem('token') !== null) {
      const token = 'Bearer ' + localStorage.getItem('token');

      const tokenRequest = req.clone({
        headers: req.headers.set('Authorization', token)
      });

      return next.handle(tokenRequest).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && (event.status === 200 || event.status === 201)) {
            console.info('Sucesso na operação');
          }
        })
        , catchError(this.processaError));
    } else {
      return next.handle(req).pipe(catchError(this.processaError));
    }
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorptorService,
      multi: true,
    },
  ],
})

export class HttpInterceptorModule {

}
