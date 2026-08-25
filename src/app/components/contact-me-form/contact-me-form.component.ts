import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '../../services/translate.pipe';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-contact-me-form',
    templateUrl: './contact-me-form.component.html',
    styleUrls: ['./contact-me-form.component.scss'],
    imports:[
        CommonModule,
        MatTooltipModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        TranslatePipe
    ]
})
export class ContactMeFormComponent {
  contactForm: FormGroup
  lang = inject(LanguageService).currentLang
  constructor (
    private fb:FormBuilder,
    private snack:MatSnackBar,
    private http:HttpClient
  ){
    this.contactForm = fb.group ({
      email:[null, {validators:Validators.required}],
      name:null,
      msgSubj:null,
      messageText:null
    })
  }
  sendToTelegram() {
    let p1 ='7474875973'
    let p2 ='AAHMfnvo'
    let p3 ='ahAK4qGs'
    let p4 ='isuqNjk9A'
    let p5 ='8AtE80pws'
    let param = p1+':'+p2+p3+'-'+p4 + p5
    this.http.get(`https://api.telegram.org/bot${param}/sendMessage?chat_id=1005311807&text=`+JSON.stringify(this.contactForm.value))
    .subscribe(()=>{
      let msg = this.lang()==='En'? 'Thank you for your message! \n I will reply you asap' : 'Спасибо за ваше сообщение! \n Я отвечу вам максимально оперативно'
      this.snack.open(msg,'OK',{ panelClass: ['snackbar-success']});
      this.contactForm.reset()
    })
  }
  get email() {return this.contactForm.get('email')}
}
