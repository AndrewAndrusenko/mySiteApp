import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  deviceType:string=''
  myName:string="<Andrey/Andrusenko>"
  constructor(
    private deviceService: DeviceDetectorService,
    private viewportScroller:ViewportScroller) 
    { }
  ngOnInit(): void {
    console.log('window.innerHeigh',window.innerHeight);
    let offset = (window.innerHeight<600? 40 : 30)
    let i = 1/(100 / document.documentElement.clientHeight)* offset
    this.viewportScroller.setOffset([1,i])
    switch (true) {
      case this.deviceService.isDesktop():
          this.deviceType='Desktop'
      break;
      case this.deviceService.isMobile():
          this.deviceType='Mobile'
      break;
      case this.deviceService.isTablet():
          this.deviceType='Tablet'
      break;
      default:
        this.deviceType='Unknown'
      break;
    }
  }
  navigateToSection(anchor:string):void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
  openPDF (url:string) {
    window.open(url,'_blank')
  }
}

