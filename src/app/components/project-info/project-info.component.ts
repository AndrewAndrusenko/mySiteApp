import { Component, inject, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IProjects } from '../../models/shared-models';
import { MatDialogClose } from '@angular/material/dialog';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../services/translate.pipe';

@Component({
  selector: 'project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
  imports: [MatIconModule, MatDialogClose,TranslatePipe],
})
export class ProjectInfoComponent {
  public project = input.required<IProjects>();
  lang = inject(LanguageService).currentLang
  public selectedImage: string = '';
  scroll(container: HTMLDivElement, direction: 'left' | 'right') {
    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
  onWheel(event: WheelEvent, container: HTMLDivElement) {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 'right' : 'left';
    this.scroll(container, direction);
  }
  openFullscreen(imagePath: string) {
   // if (window.innerWidth <= 768) {
      this.selectedImage = imagePath;
      const dialog = document.querySelector('dialog');
      dialog?.showModal();
    //}
  }
}
