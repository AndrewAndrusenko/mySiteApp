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
  openPDF (url:string,title:string) {
    let newTab = window.open(url,'_blank')
    setTimeout(() => {
      newTab? (newTab as Window).document.write('<title>My PDF File Title</title>'):null;
    }, 500);
  }
}

