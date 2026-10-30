# Карина Мейсарош — Digital Portfolio

Премиальное адаптивное портфолио на React, TypeScript, Vite, Tailwind CSS и Framer Motion.

## Запуск локально

Требуется Node.js 20+.

```bash
npm install
npm run dev
```

Откройте адрес, который выведет Vite (обычно `http://localhost:5173`).

## Production-сборка

```bash
npm run build
npm run preview
```

Готовая сборка появится в `dist/`.

## Структура

- `src/App.tsx` — секции страницы, навигация, анимации и интерактивность.
- `src/data.ts` — направления услуг, инструменты и массив проектов.
- `src/styles.css` — дизайн-система, адаптивные стили и reduced-motion.
- `index.html` — SEO, Open Graph и favicon подключение.
- `public` не требуется: favicon лежит в корне и доступен как `/favicon.svg`.

## Как добавить проект

Откройте `src/data.ts` и добавьте объект в массив `projects`:

```ts
{
  title: 'Название проекта',
  description: 'Краткое описание реальной задачи и результата.',
  image: '/projects/project-cover.webp',
  stack: ['React', 'TypeScript'],
  url: 'https://example.com',
  github: 'https://github.com/username/repository'
}
```

Изображения проекта разместите в `public/projects/`. Не добавляйте кейсы, пока у вас нет реального проекта и разрешения на публикацию материалов.

## Контакты

Telegram и GitHub уже подключены. Email сейчас указан как предоставленный адрес `karinameisarosh@mail.ru`; при необходимости замените его в `src/App.tsx` в ссылке `mailto:` и в отображаемом тексте.
