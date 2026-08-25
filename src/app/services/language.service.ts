import { Injectable, signal } from "@angular/core";
import { Observable, of } from "rxjs";
export type TLang = 'En'|'Ru'
@Injectable ({
  providedIn:'root'
})
export class LanguageService {
  readonly currentLang = signal<TLang>('En')
  private localStorage = localStorage
  setLanguage(lang:TLang) {
    this.currentLang.set(lang)
    this.localStorage.setItem('lang',lang)
  }
  loadLanguage():Observable<boolean> {
    try {
      const lang = this.localStorage.getItem('lang') as TLang
      this.currentLang.set(lang||'En')
      return of(true)
    } catch (error) {
      this.currentLang.set('En')
      return of(true)
    }
  }
}