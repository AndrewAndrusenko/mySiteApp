import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
declare var VANTA:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit
{

  title = 'mySiteApp';
  deviceType:string=''
  name = 'Angular';
  bg :any
  canvas: HTMLCollectionOf<HTMLCanvasElement>;
  canvas2: HTMLCanvasElement;
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
  ngOnInit(): void {
/*     VANTA.TOPOLOGY({
      el: "#animated-background",
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    }) */
  }
  ngAfterViewInit(): void {
/*     VANTA.WAVES({
      el: "#animated-background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x43104
    }) */
/*     VANTA.NET({
      el: "#animated-background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    }) */
  }
  stopAnimation() {
    this.canvas = document.getElementsByClassName('vanta-canvas') as HTMLCollectionOf<HTMLCanvasElement>
    this.canvas2 = document.getElementById('defaultCanvas0') as HTMLCanvasElement
    this.bg = (document.getElementById('animated-background') as HTMLElement )
    this.bg.removeChild(this.canvas2)
    this.bg.removeChild(this.canvas[0])
  }
  openPDF (url:string) {window.open(url,'_blank')}
}