export const LOCALIZATION = {
  updates: {
    En: 'Site updates in progress...',
    Ru: 'Сайт в процессе обновления...',
  },
  greeting: {
    En: 'Hi, I am Andrey Andusenko!',
    Ru: 'Привет, я Андрей Андусенко!',
  },
  love_coding: {
    En: 'I really love what I do',
    Ru: 'Я люблю програмировать и получаю от этого массу удовольствия',
  },
  commited: {
    En: 'Fully committed full stack developer',
    Ru: 'Преданный своему делу full-stack разработчик',
  },
  drives_me: {
    En: 'Creating apps and pushing limits drives me',
    Ru: 'Создание приложений и вызовы драйвят меня',
  },
  eng_c1: { En: 'English - C1', Ru: 'Английский — C1' },

  repo_code: { En: 'Code Repository', Ru: 'Репозиторий' },
  live_demo: { En: 'Live Demo', Ru: 'Демо стенд' },
  more: { En: 'More', Ru: 'Еще' },
  projects: { En: 'Projects', Ru: 'Проекты' },
  main_stack: { En: 'Main stack', Ru: 'Основной стек' },

  i_m_a: { En: 'I am a', Ru: ' ' },

  menu: { En: 'Menu', Ru: 'Меню' },
  me: { En: '<Andrey/Andrusenko>', Ru: '<Андрей/Андрусенко>' },
  skills: { En: 'Skills', Ru: 'Стек/Навыки' },
  resume: { En: 'Resume', Ru: 'Резюме' },
  experience: { En: 'Experience', Ru: 'Опыт' },
  projects_menu: { En: 'Projects', Ru: 'Проекты' },
  github: { En: 'Github', Ru: 'Github' },
  contact: { En: 'Contact', Ru: 'Контакты' },

  go_to_linked_in: {
    En: 'Go to LinkedIn page',
    Ru: 'Переход на станицу LinkedIn',
  },
  go_to_facebook: {
    En: 'Go to Facebook page',
    Ru: 'Переход на станицу Facebook',
  },

  angular: { En: 'Angular', Ru: 'Angular' },
  backend: { En: 'Backend', Ru: 'Backend' },
  frontend: { En: 'Frontend', Ru: 'Frontend' },
  others: { En: 'Others', Ru: 'Другое' },

  hard_skills: { En: 'Hard Skills', Ru: 'Технические навыки' },
  skills_introduce: {
    En: 'Here are some of my skills on which I have been working on for the past 5 years.',
    Ru: 'Вот некоторые из моих навыков, которые я активно развиваю последние 5 лет',
  },

  my_exp_introduce: {
    En: 'My experience as a developer and financial expert in various companies and projects',
    Ru: 'Мой опыт работы разработчиком и финансовым экспертом в различных компаниях и проектах',
  },

  aam: {
    En: 'Asset Management Platform ',
    Ru: 'Система управления активами',
  },
  bp: { En: 'Business Process', Ru: 'Бизнес-процесс' },
  basic_bp: { En: 'Basic Business process', Ru: 'Базовый бизнес-процесс' },
  extended_bp: {
    En: 'Extended Business process ',
    Ru: 'Развернутый бизнес-процесс',
  },

  contact_me: { En: 'Contact Me', Ru: 'Свяжитесь со мной' },
  let_me_know: {
    En: 'Please let me know if you need any further information',
    Ru: 'Пожалуйста, дайте мне знать, если вам понадобится дополнительная информация',
  },
  glad_discuss: {
    En: 'I will be glad to discuss any new opportunities',
    Ru: 'Я буду рад обсудить любые новые возможности',
  },

  send_me: {
    En: 'Send a message (TG:Russia via VPN) ',
    Ru: 'Отправить сообщение (TG: Россия через VPN)',
  },
  email: { En: 'Email', Ru: 'Email' },
  email_required: {
    En: 'Required: Please fill in the email address',
    Ru: 'Обязательное поле: пожалуйста, введите адрес электронной почты',
  },
  name: { En: 'Name', Ru: 'Имя' },
  subject: { En: 'Subject', Ru: 'Тема' },
  message: { En: 'Message', Ru: 'Текст' },
  send: { En: 'Send', Ru: 'Отправить' },
  send_disabled: {
    En: 'Send: please fill in the email address',
    Ru: 'Отправить: пожалуйста, введите адрес электронной почты',
  },
  send_disabled_2: {
    En: 'Disabled: Please fill in the email address',
    Ru: 'Отключено: Пожалуйста, введите адрес электронной почты',
  },
  me_2: {
    En: 'Andrey Andrusenko',
    Ru: 'Андрей Андрусенко',
  },
} as const;
export type LocalizationKey = keyof typeof LOCALIZATION;