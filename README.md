#Небольшое приложение по поиску книг в google books с помощью Google Books APIs

### Установка:
Заходим в папку, куда хотим клонировать репозиторий и клонируем репозиторий
```
git clone https://github.com/DeadInside48/GoogleSearchBook.git
```

Переходим в папку и устанавливаем зависимости
```
cd GoogleSearchBook
```
```
npm i
```

Запускаем локальный сервер
```
npm run dev
```

В браузере переходим на страницу
```
http://localhost:5173
```

### Получаем google API key

Заходим в консоль разработчика
```
https://console.cloud.google.com/apis
```

В разделе library ищем Books API и подключаем

```
https://console.cloud.google.com/apis/library/books.googleapis.com
```

Возвращаемся в раздел credentials, жмём create credentials и выбираем API key

```
https://console.cloud.google.com/apis/credentials
```

Инструкция от google

```
https://developers.google.com/books/docs/v1/using?hl=ru#auth
```