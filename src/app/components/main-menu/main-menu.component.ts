import { NgTemplateOutlet, ViewportScroller } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../services/translate.pipe';
import { LocalizationKey } from '../../models/localizations';
interface IMenu {
  label: LocalizationKey;
  href: string;
  target_blank?: boolean;
  icon?: string;
  handler?: (arg0: string) => void;
  arg?: string;
}
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  imports: [MatIconModule, MatTooltipModule, MatMenuModule,TranslatePipe,NgTemplateOutlet],
  standalone: true,
})
export class MainMenuComponent {
  public readonly menuItems: IMenu[] = [];
  protected languageService = inject(LanguageService)
  constructor(private viewportScroller: ViewportScroller) {
    this.menuItems = [
      {
        label: 'me',
        href: './#about',
        icon: 'shake-hands-fill',
        handler: this.navigateToSection,
        arg: 'about',
      },
      {
        label: 'resume',
        href: './',
        icon: 'article-fill',
        handler: this.openPDF,
        arg: 'assets/CV_AndrewAndrusenko.pdf',
      },
      {
        label: 'skills',
        href: './#skills',
        icon: 'lightbulb-fill',
        handler: this.navigateToSection,
        arg: 'skills',
      },
      {
        label: 'experience',
        href: './#experience',
        icon: 'graduation-cap-fill',
        handler: this.navigateToSection,
        arg: 'experience',
      },
      {
        label: 'projects',
        href: './#about',
        icon: 'mac-fill',
        handler: this.navigateToSection,
        arg: 'about',
      },
      {
        label: 'github',
        href: 'https://github.com/AndrewAndrusenko',
        target_blank: true,
        icon: 'github-fill',
      },
    ];
  }
  ngOnInit(): void {
    let offset = window.innerHeight < 600 ? 40 : 30;
    let i = (1 / (100 / document.documentElement.clientHeight)) * offset;
    this.viewportScroller.setOffset([1, i]);
  }
  navigateToSection = (anchor: string): void => {
    this.viewportScroller.scrollToAnchor(anchor);
  };
  openPDF = (url: string) => {
    window.open(url, '_blank');
  };
}
