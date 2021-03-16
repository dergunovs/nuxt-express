# Nuxt-Express

Базовый шаблон для работы Nuxt в качестве middleware для Express.

### Используемые технологии

Nuxt.js, Express.js, Mongoose.js, MongoDB.

### Установка

Рекомендуемая среда разработки - VS Code + Prettier.
Предварительно установите Node.js (https://nodejs.org/en/) и MongoDB (https://www.mongodb.com/try/download/community).
Затем в консоли пропишите:

```bash
npm install
```

### Настройка глобальных переменных

В корневой папке проекта создайте файл ".env". В нём укажите:

- BASE_URL: домен вашего сайта
- PORT: порт, на котором будет работать приложение
- DATABASE: название базы MongoDB, с которой будет работать приложение

Например, для разработки:

```bash
BASE_URL=http://localhost:3000
PORT=3000
SECRET=site
```

Для production:

```bash
BASE_URL=https://site.ru
PORT=3000
SECRET=site
```

### Запуск в режиме разработки

```bash
npm run dev
```

### Запуск в продакшене

```bash
npm run build
npm start
```
