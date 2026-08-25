import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { AppTypingAnimationComponent } from '../typing-animation/typing-animation.component';
import { MatIconModule } from '@angular/material/icon';
import { IProjects } from '../../models/shared-models';
import { MatDialog } from '@angular/material/dialog';
import { ProjectInfoComponent } from '../project-info/project-info.component';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../services/translate.pipe';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
  imports: [MatIconModule, NgOptimizedImage, AppTypingAnimationComponent,TranslatePipe],
})
export class AboutSectionComponent {
  private dialog = inject(MatDialog);
  public projectsData = signal<IProjects[]>([]);
  protected lang = inject(LanguageService).currentLang
  private http = inject(HttpClient);
  ngOnInit(): void {
    this.http
      .get<{ projects: IProjects[] }>('assets/data/projects.json')
      .pipe(take(1))
      .subscribe((data) => this.projectsData.set(data.projects));
  }
  openProject(project: IProjects) {
    let ref = this.dialog.open(ProjectInfoComponent, {
      panelClass: 'dialog-project',
      minWidth: '90vw',
      minHeight: '90vh',
      //maxHeight: '96vh'
    });
    ref.componentRef?.setInput('project', project);
  }
}
