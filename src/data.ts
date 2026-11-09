import { Code2, PanelsTopLeft, Table2, Search, Sparkles, BriefcaseBusiness, type LucideIcon } from 'lucide-react'

export type Service = { number:string; title:string; description:string; tasks:string[]; icon:LucideIcon; tag:string }
export const services: Service[] = [
  {number:'01',title:'Сайты и веб-разработка',description:'Создаю понятные цифровые пространства — от первой структуры до аккуратного адаптивного интерфейса.',tasks:['Лендинги и сайты-визитки','Многостраничные сайты','Интерфейсы и мобильная адаптация','Доработка сайтов и исправление ошибок','Интерактивные элементы'],icon:Code2,tag:'WEB / BUILD'},
  {number:'02',title:'Контент и наполнение',description:'Помогаю поддерживать сайт и каталог в актуальном состоянии, чтобы информация была ясной и аккуратно оформленной.',tasks:['Карточки товаров и интернет-магазины','Добавление материалов на сайты','Тексты, описания и заголовки','Редактирование и форматирование'],icon:PanelsTopLeft,tag:'CONTENT'},
  {number:'03',title:'Таблицы и данные',description:'Привожу информацию в порядок: структурирую, сортирую и оформляю данные для дальнейшей работы.',tasks:['Excel и Google Sheets','Создание и оформление таблиц','Перенос и систематизация информации','Сортировка, фильтрация и отчёты'],icon:Table2,tag:'DATA'},
  {number:'04',title:'Поиск и исследования',description:'Собираю информацию по заданным критериям и превращаю разрозненные результаты в удобную подборку.',tasks:['Поиск информации в интернете','Сбор данных и контактов компаний','Сравнение товаров и предложений','Структурирование результатов'],icon:Search,tag:'RESEARCH'},
  {number:'05',title:'Нейросети и AI',description:'Использую современные AI-инструменты как помощников для ускорения процессов и подготовки черновых решений.',tasks:['Текстовый контент и идеи','Подготовка изображений','Обработка информации','AI-помощь в рабочих процессах','Проверка и доработка результатов'],icon:Sparkles,tag:'AI / TOOLS'},
  {number:'06',title:'Онлайн-помощь бизнесу',description:'Беру на себя небольшие цифровые и административные задачи, освобождая время для главного.',tasks:['Документы и презентации','Обновление информации','Работа с файлами','Выполнение инструкций','Повседневные онлайн-задачи'],icon:BriefcaseBusiness,tag:'SUPPORT'}
]
export const tools = [
 {title:'Web & Development',items:['HTML','CSS','JavaScript','TypeScript','React','SQL','REST API','Git','GitHub']},
 {title:'AI Tools',items:['ChatGPT','Claude','Gemini','DeepSeek','GitHub Copilot','Claude Code','OpenAI Codex']},
 {title:'Productivity',items:['Microsoft Excel','Google Sheets','Работа с документами','Подготовка презентаций']}
]
export type Project = {
  title: string
  category: string
  description: string
  image: string
  url?: string
  sample?: { before: string; after: string }
}

export const projects: Project[] = [
  {
    title: 'Business Analytics',
    category: 'Аналитика данных',
    description: 'Дашборд для анализа продаж. Можно проследить динамику выручки, изучить заказы и посмотреть, какие товары приносят больше дохода.',
    image: '/projects/business-analytics.webp',
    url: 'https://business-analytics-a2ka.vercel.app',
  },
  {
    title: 'TaskFlow',
    category: 'Управление проектами',
    description: 'Рабочее пространство для команды. У каждой задачи есть исполнитель, статус и срок. Календарь помогает планировать неделю, а по списку проектов удобно следить за прогрессом.',
    image: '/projects/taskflow.webp',
    url: 'https://taskflow-pi-pied.vercel.app',
  },
  {
    title: 'Content Studio',
    category: 'Копирайтинг и редактура',
    description: 'Подборка моих текстов для лендингов, рассылок и соцсетей. В демонстрационных кейсах показываю путь от задачи до готового текста.',
    image: '/projects/content-studio.webp',
    sample: {
      before: 'Крем для лица. Хорошо увлажняет. Подходит на каждый день.',
      after: 'Крем для ежедневного ухода с мягкой текстурой. Легко распределяется по коже и помогает сделать привычный уход более комфортным.',
    },
  },
]
