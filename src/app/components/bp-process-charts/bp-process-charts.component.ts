import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '../../services/translate.pipe';

@Component({
    selector: 'app-bp-process-charts',
    templateUrl: './bp-process-charts.component.html',
    styleUrls: ['./bp-process-charts.component.scss'],
    imports:[MatButtonModule,TranslatePipe]
})
export class BpProcessChartsComponent {
  openPDF (url:string) {window.open(url,'_blank')}
}
