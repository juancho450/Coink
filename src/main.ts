import { bootstrapApplication} from '@angular/platform-browser';
import { provideAnimations} from '@angular/platform-browser/animations';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules, } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { injectParamsInterceptor } from './app/core/interceptors/inject-params.interceptor';
import { importProvidersFrom } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IonicModule } from '@ionic/angular';
import { loadingInterceptor } from './app/core/interceptors/loading.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(
      withInterceptors([
        injectParamsInterceptor,
        //loadingInterceptor
      ])
    ),
    importProvidersFrom(NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })),
    provideAnimations()
  ],
});
