## Инструкция по разворачиванию  проекта


- git clone https://github.com/EvgenyGuguev/test-project.git
- cd test-project
- npm install && composer install
- npm run dev
- cd laradock-test1
- docker-compose up -d nginx mysql phpmyadmin
- зайти в консоль phpMyAdmin по адресу http://localhost:8088 (mysql, root, root) и создать новую базу данных под название laravel-test
- docker-compose exec workspace bash
- php artisan migrate
- сайт будет доступен по ссылке http://localhost
