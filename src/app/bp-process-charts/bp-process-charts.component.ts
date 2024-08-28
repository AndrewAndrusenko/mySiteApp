import { Component } from '@angular/core';

@Component({
  selector: 'app-bp-process-charts',
  templateUrl: './bp-process-charts.component.html',
  styleUrls: ['./bp-process-charts.component.scss']
})
export class BpProcessChartsComponent {
  openPDF (url:string) {window.open(url,'_blank')}
}
