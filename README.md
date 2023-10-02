# register-login-demo
A simple yet effective demonstration of user registration and login functionality using Node.js, Express and MongoDB(Mongoosh).

![Register Preview](https://github.com/liju-ls/register-login-demo/assets/125476717/73d98d67-6ec0-4860-bdd1-14f47b60966d)
![Login Preview](https://github.com/liju-ls/register-login-demo/assets/125476717/e8e83956-b035-44b5-9b04-f301da939e13)
![Profile Preview](https://github.com/liju-ls/register-login-demo/assets/125476717/e770d988-68e2-4a92-a187-1be2b6076f53)


## Features
* Secure Authentication: Passwords are hashed using bcrypt.
* Session Management: Users' sessions are managed securely with JsonWebTokens.
* atabase Integration: MongoDB integration using Mongoose.

## Dependencies
* Node.js
* Express
* Mongoose
* Dotenv
* Cookie-Parser
* Nodemon
* Pug

## Installation
Clone this repo to your local machine using https://github.com/liju-ls/register-login-demo.git

## Setup
* Open: Open the directory in VsCode or in your code editor.
* Run: Run the following commands.
```shell
Copy code
$ cd register-login-demo
$ npm install
$ npm run dev
```
Make sure your MongoDB server is running. Modify the database connection string in the configuration file if necessary.

## Usage
* Visit http://localhost:3000 to access the application.
* Register: Fill out the registration form to create a new account.
* Login: Use your credentials to log in and access protected routes.

