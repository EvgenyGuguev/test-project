## Инструкция по разворачиванию  проекта


- git clone https://github.com/EvgenyGuguev/test-project.git
- cd test-project
- npm install && composer install
- npm run dev
- cd laradock-test1
- cp env-example .env
- docker-compose up -d nginx mysql phpmyadmin (Если выдаст ошибку про занятые порты, изменить порт для контейнера можно в файле laradock-test1/.env)
- зайти в консоль phpMyAdmin по адресу http://localhost:8088 (mysql, root, root) и создать новую базу данных под название laravel-test
- docker-compose exec workspace bash
- php artisan migrate
- сайт будет доступен по ссылке http://localhost
