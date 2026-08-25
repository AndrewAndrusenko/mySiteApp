import { inject, Pipe, PipeTransform } from "@angular/core";
import { LanguageService } from "./language.service";
import { LOCALIZATION, LocalizationKey } from "../models/localizations";

@Pipe({
  name:'translate',
  standalone:true,
  pure:false
})
export class TranslatePipe implements PipeTransform {
  private languageService = inject(LanguageService)
  transform(key:LocalizationKey) {
    const lang = this.languageService.currentLang()
    return LOCALIZATION[key][lang] || String(key)
  }
}