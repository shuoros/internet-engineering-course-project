# Online shop

## About This Project

Online-Shop with express,sequlize

## RUN

1-clone this repo

2-To run this app, set your variables in .env file at the root of the project

-   PORT

-   JWT_KEY

-   EXPIRE_TIME

-   REDIS_PORT

-   SQL_PORT

-   IMAGE_PREFIX

## example :

PORT=3001
JWT_KEY="secretcode"
EXPIRE_TIME="1w"
SQL_PORT="3306"
IMAGE_PREFIX="http://localhost:3001/"
EMAIL= Your mail
EMAIL_PASS= your mail pass"

3-in config/database/sequlize.js set your database name,user,password,host and port

4-npm install

5-run you redis server

6-node index.js

7- run seeders:

-   npx sequelize-cli db:seed --seed 20211109091139-roles 20211109082457-permission 20211109090157-admins --seed 20211109091829-role-permission 20211214072252-tags 20220108134300-categories 20211214072157-brands 20211215101044-products 20220115205943-customer

8-node index.js

## Node modules

-   Nodejs version 16.11.6
-   express version 4.17.1
-   mysql2 version 2.3.2
-   sequelize version 6.8.0
-   sequelize-cli version 6.3.0
-   validator version 13.6.0
-   dotenv version 10.0.0
-   crypto version 1.0.1
-   jsonwebtoken version 8.5.1
-   nodemon version 2.0.14
-   yargs version 17.2.1
-   bluebird version 3.7.2
-   express-rate-limit 5.5.1
-   multer 1.4.3
-   redis 3.1.2
-   winston 3.3.3
-   sharp 0.29.3
-   nodemailer 6.7.2
