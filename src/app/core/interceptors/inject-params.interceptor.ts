import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const injectParamsInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method === 'GET') {
    req = req.clone({
      setParams: {
        apiKey: environment.API_KEY
      }
    });
  }

  return next(req);
};
