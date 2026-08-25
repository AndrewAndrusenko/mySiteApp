import { Component, inject } from '@angular/core';
import { AppIntersectDirective } from '../../directives/intersect-view.directive';
import { TranslatePipe } from '../../services/translate.pipe';
import { LanguageService } from '../../services/language.service';
interface IExperience {
  company: { En: string; Ru: string };
  logo: string;
  logo_backgroud?: string;
  padding?: string;
  position: { En: string; Ru: string };
  period: string;
  period2?: string;
  periodRu?:string,
  bullets: { En: string; Ru: string }[];
}
@Component({
  selector: 'app-timeline-experience',
  templateUrl: './timeline-experience.component.html',
  styleUrls: ['./timeline-experience.component.scss'],
  imports: [AppIntersectDirective, TranslatePipe],
})
export class TimelineExperienceComponent {
  public expData: IExperience[];
  public lang = inject(LanguageService).currentLang
  constructor() {
    this.expData = [
      {
        company: {'En':'System Solutions','Ru':'Системные решения'},
        logo: 'pro.svg',
        logo_backgroud: '#ffffff',
        padding: '2px',
        position: {'En':'Senior Frontend/FullStack Engineer','Ru':'Старший Frontend-разработчик/FullStack-разработчик'},
        period: '02/2025 - Present',
        period2: '2025 - Present',
        periodRu: '2025 - Сейчас',
        bullets: [
          {
            En: 'Interactive data visualization and management of business process diagrams and contracts. Creating an in-house library based on Konva (graphics), Elk and Dagre (graph layout)',
            Ru: 'Интерактивная визуализация данных и управление диаграммами бизнес-процессов и контрактов. Создание собственной библиотеки на базе Konva (графика), Elk и Dagre (компоновка графов)',
          },
          {
            En: 'Implementing new design model with refactoring and integrating best practices (rxjs, standalone, defer import)',
            Ru: 'Внедрение новой модели дизайна с рефакторингом и интеграцией лучших практик (rxjs, standalone, defer import)',
          },
          {
            En: 'Performance optimization: bundle size (one chunk 10mb => 5.5 of small chunks => 1.5mb via Brotli compressing) , lazy loading, data memorization, rendering ',
            Ru: 'Оптимизация производительности: размер бандла (один чанк 10мб => 5.5мб мелких чанков => 1.5мб сжатия через Brotli), lazy loading, мемоизация данных, рендеринг',
          },
          {
            En: 'Detecting and resolving memory leaks',
            Ru: 'Обнаружение и устранение утечек памяти',
          },
          {
            En: 'Real-Time processing system for stock quotes. Frequency is up to 50 milliseconds. WebSockets. Page rendering optimization. RxJS streams with buffering and refresh settings. Server states handling',
            Ru: 'Система обработки биржевых котировок в реальном времени. Частота до 50 миллисекунд. WebSockets. Оптимизация рендеринга страниц. Потоки RxJS с буферизацией и настройками обновления. Обработка состояний сервера',
          },
          {
            En: 'Flexible JWT authentication server. The access + refresh token pattern. Seamless renewal of the expired token. Easily connecting to other applications. The admin panel. Redis caching. Detailed logs',
            Ru: 'Гибкий сервер аутентификации JWT. Паттерн access + refresh токенов. Бесшовное обновление просроченного токена. Легкое подключение к другим приложениям. Админ-панель. Кэширование в Redis. Детализированные логи',
          },
        ],
      },
      {
        company: {'En':'3A Solutions Inc','Ru':'3A Solutions'},
        logo: '3A.png',
        logo_backgroud: '#add8e6',
        position: {'En':'FullStack Developer','Ru':'FullStack Разработчик'},
        period: '2023 - 02/2025',
        period2: '2023 - 2025',
        bullets: [
          {
            En: 'Developed a decoupled, scalable, ready-to-go asset management application platform from scratch',
            Ru: 'Разработал с нуля слабосвязанную, масштабируемую и готовую к развертыванию платформу для управления активами',
          },
          {
            En: 'Implemented full-scale asset management model:Model Portfolios, Strategies, Orders, Balance, Trades, Portfolios, Accounts, Investment Restrictions, Performance and Management Fees (hwm, sliding scales), Portfolio returns analysis (time-weighed rate of return, pl factor analysis)',
            Ru: 'Реализовал полномасштабную модель управления активами: модельные портфели, стратегии, ордера, баланс, сделки, портфели, счета, инвестиционные ограничения, комиссии за успех и управление (HWM, скользящие шкалы), анализ доходности портфеля (взвешенная по времени доходность, факторный анализ P&L)',
          },
          {
            En: 'Implemented a comprehensive financial accounting system',
            Ru: 'Внедрил комплексную систему финансового учета',
          },
          {
            En: 'Built RESTful API architecture using NodeJs (Express) layer',
            Ru: 'Построил архитектуру RESTful API с использованием слоя на Node.js (Express)',
          },
          {
            En: 'Created frontend using Angular, Material Design and RxJS. Wrote unit tests using Jest',
            Ru: 'Создал фронтенд с использованием Angular, Material Design и RxJS. Написал юнит-тесты на Jest',
          },
          {
            En: 'Built an effectively structured PostgresSQL DB and created functions to perform complex calculations',
            Ru: 'Разработал эффективно структурированную базу данных PostgreSQL и создал функции для выполнения сложных расчетов',
          },
        ],
      },
      {
        company: {'En':'BNP Paribas','Ru':'БНП Париба'},
        logo: 'BNP.png',
        position:{'En':'Middle Frontend Engineer','Ru':'Мидл Фронтенд Разработчик'},
        period: '2021 - 2023',
        bullets: [
          {
            En: 'Created BackOffice Dashboard. Flexible UI to get live customized data regarding trades and payments in order to process them duly and timely (Web UI vanilla - Node JS - SQL Server)',
            Ru: 'Создал панель управления BackOffice. Гибкий пользовательский интерфейс для получения кастомизированных данных о сделках и платежах в реальном времени с целью их должной и своевременной обработки (Web UI vanilla - Node JS - SQL Server)',
          },
          {
            En: 'Developed a tax suspension verification service for clients applying for deposits (Browser Automation - Scripting)',
            Ru: 'Разработал сервис проверки приостановки налоговых операций для клиентов, подающих заявки на депозиты (Browser Automation - Scripting)',
          },
          {
            En: 'Developed a module to track the document flow for trades’ confirmations. User-friendly interface for status management and reconciliation functionality',
            Ru: 'Разработал модуль для отслеживания документооборота по подтверждениям сделок. Удобный интерфейс для управления статусами и функционал сверки данных',
          },
        ],
      },
      {
        company: {'En':'Own Asset Portfolio Inc','Ru':'Частный портфель инвестиций'},
        logo: 'OWN.png',
        position: {'En':'Private Investor','Ru':'Частный инвестор'},
        period: '2016 - 2021',
        bullets: [
          {
            En: 'Managed my own investment portfolio using various products through brokerage account and collective investments',
            Ru: 'Управлял собственным инвестиционным портфелем, используя различные продукты через брокерский счет и коллективные инвестиции',
          },
          {
            En: 'Self-education and development in financial markets',
            Ru: 'Самообразование и развитие в сфере финансовых рынков',
          },
        ],
      },
      {
        company:{'En':'Renaissance Investment Management','Ru':'Ренессанс Инвестмент Менеджмент'},
        logo: 'RIM RND.png',
        position: {'En':'Head of Operations and Support Department','Ru':'Руководитель бэк и мидл офиса'},
        period: '2006 - 2011',
        bullets: [
          {
            'En': '2 middle office platforms were launched to ensure consecutive growth of the private client asset management business',
            'Ru': 'Для обеспечения последовательного роста бизнеса по управлению активами частных клиентов были запущены две платформы для среднего менеджмента.'
          },
          {
            'En':'Developed an additional module for the first middle-office platform, which allowed it to be launched on time. The module was a crucial part and was constantly being developed in accordance with business demands',
            'Ru':'Разработал дополнительный модуль для первой платформы мидл-офиса, что позволило запустить ее в срок. Модуль был важной частью системы и постоянно совершенствовался в соответствии с потребностями бизнеса.'
          }
        ],
      },
    ];
  }
}
