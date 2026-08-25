import { Component } from '@angular/core';
import { TranslatePipe } from '../../services/translate.pipe';

@Component({
    selector: 'app-footer-contact',
    templateUrl: './footer-contact.component.html',
    styleUrls: ['./footer-contact.component.scss'],
    imports:[TranslatePipe]
})
export class FooterContactComponent {

}
