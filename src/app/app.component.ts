import { Component, ElementRef, HostListener, QueryList, ViewChildren} from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'Andrew Andrusenko';
  deviceType:string=''
  name = 'Angular';
  @ViewChildren('reveal') sectionsToReveal :QueryList<ElementRef>
  @HostListener('document:scroll', ['$event'])
  onScrollReveal(event: Event) {  
    
     this.sectionsToReveal.forEach(el=>{
      let elTop = el.nativeElement.getBoundingClientRect().top
      let windowTop = window.innerHeight
      if (windowTop - 150 > elTop) {
        el.nativeElement.classList.add('active')
      } else {
        el.nativeElement.classList.remove('active')
      }
     })
    }
  constructor (
    private deviceService: DeviceDetectorService,
  ){
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
}