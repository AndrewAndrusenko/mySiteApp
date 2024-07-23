import { ViewportScroller } from '@angular/common';
import { Element } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { of, Subject, tap } from 'rxjs';
declare var VANTA:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit
{
  timerTyping: ReturnType<typeof setTimeout> []=[];
  title = 'mySiteApp';
  deviceType:string=''
  name = 'Angular';
  expertiseSet:string[] =['Full Stack Developer','Financial Expert','Frontend Developer', 'Backend Developer'];
  nextExpert:Subject<number> = new Subject();
  expertInd:number=0;
  expertDesc:string;
  cursor:string='|';
  constructor (
    private deviceService: DeviceDetectorService,
    private viewportScroller:ViewportScroller
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
  ngAfterViewInit(): void {
    VANTA.TOPOLOGY({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })
    this.typingSubscription()
    setTimeout(() => {this.nextExpert.next(this.expertInd)}, 200);
  }
  typingSubscription() {
    this.nextExpert.subscribe(indExp=>{
      console.log('new expert',this.expertiseSet[indExp]);
      let strLng:number = this.expertiseSet[indExp].length
      for (let index = 0; index <= strLng*2 ; index++) {
        this.timerTyping.push (setTimeout (()=>{
           index===strLng*2? this.nextExpert.next(this.expertInd=indExp===this.expertiseSet.length-1? 0: indExp+1):null;
           this.expertDesc = this.expertiseSet[indExp].slice(0, index + (index-strLng) *2* ~~(index/strLng)*-1  )
         },index<=strLng? index*180 :strLng*300 + (index-strLng)*100))

       } 
    })
  }
  toggleTyping() {
    if (this.cursor==='|') {
      this.timerTyping.forEach(i=>clearTimeout(i));
      console.log('[this.expertInd',this.expertInd);
      this.expertDesc=this.expertiseSet[this.expertInd];
      this.cursor=''
    } else {
      this.nextExpert.next(this.expertInd=this.expertiseSet.length===this.expertInd+1? 0:this.expertInd+1)
      this.cursor='|'
    }
  }
  
  navigateToSection(anchor:string):void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
  openPDF (url:string) {window.open(url,'_blank')}

}