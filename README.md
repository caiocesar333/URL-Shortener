# URL Shorterner - ShortEN

This project is a challenge answer requested by Speedio made with Vue and NodeJs. 
Deadline: 5 days.

## Software Description

```
A URL shortener would involve designing and implementing a system that can effectively shorten long URLs and provide a seamless redirection mechanism. This project evaluate: User interface development, backend development, database management, analytics and tracking, error handling and security, test and deployment, etc.
```

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

See **[Deployment](#-deployment)** for notes on how to deploy the project.

### 📋 Prerequisites

```
Visual Studio Code
Git/git bash
Node

```

### 🔧 Installation

Execute the cloning of the repository with _git -clone

[URLshortener - ShortEN](https://github.com/caiocesar333/URL-Shortener)

After cloning the repository, open the folder in VSCode

#### For backend:

1. _cd backend_

2. _npm install_ to install dependencies

3. _npm start_ to build the project

#### For Frontend

1. _cd frontend_

2. _npm install_ to install dependencies

3. _npm run dev_ to start development server

```
Note: Backend PORT is 8001 and can be changed in backend/index.js. 
The mongodb connection is setted to my test account. For a diferent mongodb change the connection string at backend/connect.js

```

## ⚙️ Running the tests

To run the tests for this project, follow the steps below:

### 🔩 Break down into end-to-end tests

The backend tests can be run by following these steps:

1. Open your terminal and navigate to the `backend` directory of the project.
2. Run the command `npm test` to execute the backend tests.

This should run the backend tests for GetSalesController and
CreateSaleController

### ⌨️ And coding style tests

The frontend tests can be run by following these steps:

1. Open your terminal and navigate to the `frontend` directory.
2. Run the command `npm test` to execute the frontend tests.

This should run the frontend tests for ErrorComponent and TransactionsTable
commponents

These tests are designed to check the code for any syntax errors and to ensure
that it conforms to the coding style standards used in this project. Running
these tests before committing code changes is highly recommended.

## 🛠️ Built With

Here are the tools used to create this project:

- [Vue](https://vuejs.org/) - A JavaScript library for building user
  interfaces
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript
  that compiles to plain JavaScript
- [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8
  JavaScript engine
- [Express](https://expressjs.com/) - A popular web application framework for
  Node.js
- [MongoDB](https://www.mongodb.com/) - A cross-platform document-oriented NoSQL
  database
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for
  rapidly building custom user interfaces
- [Jest](https://jestjs.io/) - A JavaScript testing framework designed to ensure
  the correctness of any JavaScript codebase

## 📌 Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository](https://github.com/caiocesar333/project/tags).

## ✒️ Authors

[Caio César](https://github.com/caiocesar333)

## 📄 License

This project is a challenge and is not licensed - see the
[LICENSE.md](https://github.com/caiocesar333/project/license) file for details.

## 🛠️ Functionalities

1. URL shortening service with the smallest possible size.
2. Basic user registration (sign up/login) feature.
3. Allow users to create URLs anonymously (without logging in).
4. Registered users should be able to delete the URLs they created.
5. Redirect to the original URL when the shortened URL is visited (e.g., localhost:8001/124asgjq -> www.google.com).
6. Increment the visit count of a URL with each visit.
7. Page with the top 100 most visited URLs sorted by total visits.



### What could be improved if i had more time

1. Code refactoring to make it cleaner.
2. Handling login exceptions: An unregistered user would be redirected to the login page if they accessed a logged-in page without an active session. A registered user would be redirected to the logged-in page when accessing an anonymous page with an active session.
3. Registered users would be able to see the shortened links in their history, along with the original links.
4. For the frontend, implement a toggle button capable of expanding and shortening the original links.
5. Logout functionality.
6. Improved styling for better visual appeal.


