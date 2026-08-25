import { Component, inject} from '@angular/core';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AppIntersectDirective } from './directives/intersect-view.directive';
import { SkillsBoxComponent } from './components/skills-box/skills-box.component';
import { TimelineExperienceComponent } from './components/timeline-experience/timeline-experience.component';
import { BpProcessChartsComponent } from './components/bp-process-charts/bp-process-charts.component';
import { ContactMeFormComponent } from './components/contact-me-form/contact-me-form.component';
import { FooterContactComponent } from './components/footer-contact/footer-contact.component';
import { IconBaseService } from './services/icon-base.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        MainMenuComponent, 
        AboutSectionComponent, 
        AppIntersectDirective, 
        SkillsBoxComponent, 
        TimelineExperienceComponent, 
        BpProcessChartsComponent, 
        ContactMeFormComponent, 
        FooterContactComponent
    ]
})
export class AppComponent 
{
  private icons = inject(IconBaseService)
  public deviceType:string = ''
  public viewArea = '150px 0px 0px 0px'
}