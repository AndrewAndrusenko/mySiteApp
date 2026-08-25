import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { inject, provideAppInitializer } from '@angular/core';
import { LanguageService } from './app/services/language.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([])),
    provideAppInitializer(() => {
      const languageService = inject(LanguageService);
      return languageService.loadLanguage();
    }),
  ],
}).catch((err) => console.error(err));
