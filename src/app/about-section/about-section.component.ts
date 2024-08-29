import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {
  @Input() deviceType:string;
   constructor (
    private viewportScroller:ViewportScroller
   ){}
  ngOnInit(): void {
    console.log('window.innerHeigh',window.innerHeight);
    let offset = (window.innerHeight<600? 40 : 30)
    let i = 1/(100 / document.documentElement.clientHeight)* offset
    console.log('i',i);
  }
  navigateToSection(anchor:string):void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
