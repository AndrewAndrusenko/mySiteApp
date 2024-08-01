import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-typing-animation',
  templateUrl: './typing-animation.component.html',
  styleUrls: ['./typing-animation.component.scss']
})
export class TypingAnimationComponent {
  expertiseSet:string[] =['Full Stack Developer','Financial Expert','Frontend Developer', 'Backend Developer'];
  nextExpert:Subject<number> = new Subject();
  expertInd:number=0;
  expertDesc:string;
  cursor:string='|';
  timerTyping: ReturnType<typeof setTimeout> []=[];
  ngAfterViewInit(): void {
    this.typingSubscription()
    setTimeout(() => {this.nextExpert.next(this.expertInd)}, 200);
  }
  typingSubscription() {
    this.nextExpert.subscribe(indExp=>{
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
      this.expertDesc=this.expertiseSet[this.expertInd];
      this.cursor=''
    } else {
      this.nextExpert.next(this.expertInd=this.expertiseSet.length===this.expertInd+1? 0:this.expertInd+1)
      this.cursor='|'
    }
  }
}