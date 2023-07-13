# Balancer

для запуска необходимо cклонировать репозиторий balancer1 

затем перейти в директорию /frontend 

установить все зависимости 

```bash
npm i
```
и запустить фронтенд часть с помощью команды

```bash
npm run dev
```

затем перейти в директорию /backend 

установить все зависимости 

```bash
npm i
```
затем создать файл .env с данными для БД 

пример
```bash
DATABASE_URL=postgres://admindb:admindb@localhost:5432/balancer1
```


затем созадть БД 
```bash
npx prisma migrate dev --name init 
```   

и запустить бэкэнд часть с помощью команды

```bash
npm start
```
Это откроет приложение в режиме разработки в вашем браузере по адресу [http://localhost:3000]
а сервер будет запущен по адресу 
[http://localhost:3100]