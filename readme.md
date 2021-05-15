# Nuxt-Express

Базовый шаблон для работы Nuxt в качестве middleware для Express.

### Используемые технологии

Nuxt.js, Express.js, Mongoose.js, MongoDB.

### Установка

Рекомендуемая среда разработки - VS Code + Prettier.
Предварительно установите Node.js 16 (https://nodejs.org/en/) и MongoDB 4.4.5 (https://www.mongodb.com/try/download/community).
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
DATABASE=site
```

Для production:

```bash
BASE_URL=https://site.ru
PORT=3000
DATABASE=site
```
### Запуск mongodb в Ubuntu 
```bash
sudo chown mongodb /tmp/mongodb-27017.sock
sudo chgrp mongodb /tmp/mongodb-27017.sock
sudo service mongod start
sudo systemctl status mongod
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
