# URL Shortener - ShortEN

This project is a challenge answer requested by Speedio made with Vue and Node.js.
Deadline: 5 days.

## Software Description

A URL shortener involves designing and implementing a system that can effectively shorten long URLs and provide a seamless redirection mechanism. This project evaluates user interface development, backend development, database management, analytics and tracking, error handling and security, testing, and deployment, among other aspects.

## 🚀 Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

See **[Deployment](#-deployment)** for notes on how to deploy the project.

### 📋 Prerequisites

```
Visual Studio Code
Git/Git Bash
Node.js
```

### 🔧 Installation

To install the project, follow these steps:

1. Clone the repository using the command `git clone`.

[URL Shortener - ShortEN](https://github.com/caiocesar333/URL-Shortener)

2. After cloning the repository, open the folder in VSCode.

#### For Backend:

1. Navigate to the `backend` directory.

```
cd backend
```

2. Install dependencies.

```
npm install
```

3. Build the project.

```
npm start
```

```
Note: The backend PORT is set to 8001 and can be changed in backend/index.js. The MongoDB connection is set to my test account. For a different MongoDB, change the connection string in backend/connect.js.
```

#### For Frontend:

1. Navigate to the `frontend` directory.

```
cd frontend
```

2. Install dependencies.

```
npm install
```

3. Start the development server.

```
npm run dev
```

## 🛠️ Built With

Here are the tools used to create this project:

- [Vue](https://vuejs.org/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - A popular web application framework for Node.js.
- [MongoDB](https://www.mongodb.com/) - A cross-platform document-oriented NoSQL database.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.

## 📌 Versioning

I use [SemVer](http://semver.org/) for versioning. For the available versions, see the

 [tags on this repository](https://github.com/caiocesar333/project/tags).

## ✒️ Authors

[Caio César](https://github.com/caiocesar333)

## 📄 License

This project is a challenge and is not licensed. See the [LICENSE.md](https://github.com/caiocesar333/project/license) file for details.

## 🛠️ Functionalities

1. URL shortening service with the smallest possible size.
2. Basic user registration (sign up/login) feature.
3. Allow users to create URLs anonymously (without logging in).
4. Registered users can view the shortened links in their history along with the original links.
5. Registered users can delete the URLs they created.
6. Redirect to the original URL when the shortened URL is visited (e.g., localhost:8001/124asgjq -> www.google.com).
7. Increment the visit count of a URL with each visit.
8. Page with the top 100 most visited URLs sorted by total visits.

### What could be improved if I had more time

1. Code refactoring to make it cleaner.
2. Handling login exceptions: An unregistered user would be redirected to the login page if they accessed a logged-in page without an active session. A registered user would be redirected to the logged-in page when accessing an anonymous page with an active session.
3. Implementation of a toggle button in the frontend to expand and shrink the original links.
4. Logout functionality.
5. Unit and End-To-End tests
