import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.scss']
})
export class FooterContactComponent {
  openLink() {
  window.open('../assets/BP Extended AAM-Buisness process extended.pdf','_blank')
  }
}
