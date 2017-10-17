import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/do';

@Injectable()
export class SimpleInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next
         .handle(request)
         .do(event => {
           if (event instanceof HttpResponse) {
             const elapsed = Date.now() - started;
             console.log(`Request for ${request.urlWithParams} took ${elapsed} ms.`);
           }
          });
  }
}
