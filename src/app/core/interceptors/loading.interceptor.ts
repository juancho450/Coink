import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

let totalRequests = 0;

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const spinnerService = inject(NgxSpinnerService);

  totalRequests++;
  spinnerService.show();

  return next(req).pipe(
    finalize(() => {
      totalRequests--;
      if (totalRequests === 0) {
        totalRequests = 0;
        spinnerService.hide();
      }
    })
  );
};
