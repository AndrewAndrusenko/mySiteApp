import { Component } from '@angular/core';
import { TranslatePipe } from '../../services/translate.pipe';
import { LocalizationKey } from '../../models/localizations';
interface ISkill{
    name:string,
    img:string,
    tooltip?:string
    alt?:string,
    width?:string,
    height?:string
}
interface ISkillBox {
    title:LocalizationKey,
    skills:ISkill[],
    cssClass?:string
}
@Component({
    selector: 'app-skills-box',
    templateUrl: './skills-box.component.html',
    styleUrls: ['./skills-box.component.scss'],
    imports:[TranslatePipe]
})
export class SkillsBoxComponent {
    public skillData:ISkillBox[] = []
    constructor(){
        let frontSkills:ISkill[] = [
            {
                name:'Angular',
                img:'angular-icon.svg'
            },
            {
                name:'RxJS',
                img:'rxjs-1.svg'
            },
            {
                name:'Material UI',
                tooltip:'Angular Material Design',
                img:'angular-material.svg'
            },
            {
                name:'Konva.js',
                tooltip:'Konva.js - Data visualization',
                img:'konva.png'
            },
            {
                name:'ELK',
                alt:'Eclipse Layout Kernel',
                tooltip:'Eclipse Layout Kernel - Data visualization',
                img:'elk.svg'
            },
            {
                name:'Echarts',
                tooltip:'Apache ECharts - Data visualization',
                img:'echarts.png'
            },
            {
                name:'Sass',
                tooltip:'scss preprocessor',
                img:'sass-icon.svg'
            },
            {
                name:'Jest',
                tooltip:'Jest - testing framework',
                img:'jest.png'
            },

        ];

        let AngularSkills:ISkill[] = [
            {
                name:'HTTP Interceptors',
                img:'angular-icon.svg'
            },
            {
                name:'Websockets',
                img:'angular-icon.svg'
            },
            {
                name:'Defer Import',
                img:'angular-icon.svg'
            },
            {
                name:'Forms&Validation',
                img:'angular-icon.svg'
            },
            {
                name:'ReuseStrategy',
                img:'angular-icon.svg'
            },
            {
                name:'ChangeDetection',
                img:'angular-icon.svg'
            }
        ]
        let BackSkills:ISkill[] = [
            {
                name:'Node.js',
                img:'nodejs-icon.svg',
            },
            {
                name:'PostgreSQL',
                img:'postgresql.png'
            },
            {
                name:'Websockets',
                tooltip:'WebSockets clients and servers',
                img:'ws.png'
            },
            {
                name:'Express.js',
                tooltip:'Express - Rest API servers node.js',
                img:'ex3.png'
            },
            {
                name:'Redis',
                tooltip:'Data caching',
                img:'redis.svg'
            },
            {
                name:'MongoDB',
                tooltip:'NoSQL database',
                img:'mongodb-icon.png',
                width:'unset'
            },
            {
                name:'Nest.js',
                tooltip:'NestJs - Backend framework',
                img:'nest-js-icon.png'
            },
            {
                name:'Passport.js',
                tooltip:'Authentication middleware for Node.js',
                img:'passport2.png',
                width:'unset'
            },
        ];
        let OtherSkills:ISkill[] = [
            {
                name:'Docker',
                img:'docker-icon.png'
            },
            {
                name:'Git',
                img:'git.svg'
            },
            {
                name:'VS Code',
                img:'vs.svg'
            },
            {
                name:'HedgeFunds',
                img:'funds.png',
            },
            {
                name:'Derivatives',
                img:'derivative.png'
            },
            {
                name:'Accounting',
                img:'accounting.png'
            },
            {
                name:'BondsShares',
                img:'bond.png'
            },
/*             {
                name:'MoneyMarket',
                img:'exchange.png'
            }, */
        ];

        this.skillData = [
            {
                title:'frontend',
                skills:frontSkills
            },
            {
                title:'angular',
                skills:AngularSkills
            },
            {
                title:'backend',
                skills:BackSkills
            },
            {
                title:'others',
                skills:OtherSkills
            },
        ]
    }
}

