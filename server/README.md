# Introduction to Backend Logic

A simple REST API for a Blogging Platform built with Node.js, Express, and Postgres. The API provides endpoints for user authentication, blog creation, and blog management.

## Architecture

| Layer          | Technology             | Description                                                                                                                                                                                                                       |
| -------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API            | Express                | REST API - Node Project utilizing Typescript was used in building the business logic for the API's.                                                                                                                               |
| Authentication | JWT                    | Authentication and Authorization was achieved using JWT Tokens with specified timelines for their expiry                                                                                                                          |
| Database       | Postgres               | Postgres Database was installed locally on a Ubuntu 22.04 server and then connected to the App.                                                                                                                                   |
| ORM            | TypeORM                | TypeORM was used to connect to the Postgres Database for CRUD operations.                                                                                                                                                         |
| Mailing        | Nodemailer             | Mailing service - ( Email Template files were written in JavaScript as they were not working for local testing when in ts file / before been compiled to js files )                                                               |
| File Upload    | Cloudinary             | Cloudinary was used for all Files upload operations                                                                                                                                                                               |
| Deployment     | VPS                    | The App runs on a Ubuntu 22.04 LTS server                                                                                                                                                                                         |
| CI/CD          | Github                 | Github Actions was used for CI/CD                                                                                                                                                                                                 |
| Security       | Bcrypt / Cors / Dotenv | - BCRYPT was used for Encrypting all passwords stored into the Postgres Database whiles CORS was used to restrict unauthorized access to the server API. Also DOTENV was used to store all sensitive credentials used on the app. |

## Installation and Setup Instructions

After cloning the repo, run the following commands to install the dependencies and run the server.

     npm install

## Requirements

- DATABASE_URL - postgres connection string
- PORT - Port to run the server on
- JWT_SECRET - Secret key for JWT token generation

## Author and Acknowledgement 😊

for more information about me, you can check out my portfolio at [https://github.com/flexywork327](https://github.com/flexywork327)
