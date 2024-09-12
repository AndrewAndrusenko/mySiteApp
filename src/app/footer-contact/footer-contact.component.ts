import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.scss']
})
export class FooterContactComponent {
  bg :HTMLElement
  winHight :number
  canvas: HTMLCollectionOf<HTMLCanvasElement>;
  canvas2: HTMLCanvasElement;
  openLink() {
  window.open('../assets/BP Extended AAM-Buisness process extended.pdf','_blank')
  }
  stopAnimation() {
    this.canvas = document.getElementsByClassName('vanta-canvas') as HTMLCollectionOf<HTMLCanvasElement>
    this.canvas2 = document.getElementById('defaultCanvas0') as HTMLCanvasElement
    this.bg = (document.getElementById('animated-background') as HTMLElement )
    this.bg.removeChild(this.canvas2)
    this.bg.removeChild(this.canvas[0])
  }
}
