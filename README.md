# URL Shortener - ShortEN

This project is a challenge answer requested by Speedio made with Vue and Node.js.
Deadline: 5 days.
Check [Functionalities](#functionalities) to see what was implemented or this short [Video](https://share.vidyard.com/watch/ZWbZrKRy66itERHapCBXoa?)

## Software Description

```
A URL shortener involves designing and implementing a system that can effectively shorten long URLs and provide a seamless redirection mechanism. This project evaluates user interface development, backend development, database management, analytics and tracking, error handling and security, testing, and deployment, among other aspects.
```

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

## <a id="functionalities"></a>🛠️ Functionalities

1. URL shortening service with the smallest possible size.
2. Basic user registration (sign up/login) feature.
3. (Optional) User loggout.
4. Allow users to create URLs anonymously (without logging in).
5. Registered users can view the shortened links in their history along with the original links.
6. Registered users can delete the URLs they created.
7. Redirect to the original URL when the shortened URL is visited (e.g., localhost:8001/124asgjq -> www.google.com).
8. Increment the visit count of a URL with each visit.
9. Page with the top 100 most visited URLs sorted by total visits.

### What could be improved if I had more time

1. Code refactoring to make it cleaner.
2. Implementation of a toggle button in the frontend to expand and shrink the original links.
3. Unit and End-To-End tests

## <a id="maintenance"></a>🔨 Backend Maintenance 

### Url controller 

1. Get the first 100 Url's sorted by number of visits.
```
async function handleGetAllURLs(req, res) {
  try {
    const urls = await URL.find()
      .sort({ "visitHistory.length": -1 })
      .limit(100);
    return res.json({ urls });
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}
```

2. Generate new short Url.
```
async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortId = shortid();
  try {
    await URL.create({
      shortId: shortId,
      redirectURL: body.url,
      visitHistory: [],
    });
    return res.json({ shortId });
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}
```

3. Get Url Details.
```
async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  try {
    const result = await URL.findOne({ shortId });
    if (!result) return res.status(404).json({ error: "URL not found" });
    return res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}
```

### User Controller

1. Create a new User.
```
async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (!body.userName)
    return res.status(400).json({ error: "User Name is required" });
  if (!body.password)
    return res.status(400).json({ error: "Password is required" });
  const existingUser = await User.findOne({ userName: body.userName });
  if (existingUser)
    return res.status(400).json({ error: "Username already registered" });
  await User.create({
    userName: body.userName,
    password: body.password,
  });
  return res.json({ User: body.userName });
}
```

2. User Login.
```
async function handleLoginUser(req, res) {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }
    if (user.password !== password) {
      return res.status(400).json({ error: "Wrong password" });
    }
    user.session = true;
    await user.save();
    return res.json({ message: "User logged in successfully" });
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}
```

3. User Generate new short Url.
```
async function handleUserCreateNewUrl(req, res) {
  const body = req.body;
  const shortID = shortid();
  console.log(body);
  try {
    const user = await User.findOne({ userName: body.userName });
    console.log(user);
    if (!user) return res.status(400).json({ error: "User not found" });
    if (!user.session)
      return res.status(401).json({ error: "User not logged in" });
    const newURL = await URL.create({
      shortId: shortID,
      redirectURL: body.url,
      visitHistory: [],
      user: user.userName,
    });
    user.storedLinks.push({ link: body.url, short: shortID });
    await user.save();
    return res.json(newURL);
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}
```

4. Check User session.
```
async function handleUserSession(req, res) {
  const body = req.body;
  console.log(body);
  try {
    const user = await User.findOne({ userName: body.userName });
    console.log(user);
    if (!user) return res.status(400).json({ error: "User not found" });
    if (!user.session) return res.status(401).json({ error: "User not logged in" });
    return res.status(200).json({ message: "User is logged in" });
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}
```

5. User LogOut.
```
async function handleUserLogOut(req, res) {
  const body = req.body;
  console.log(body);
  try {
    const user = await User.findOne({ userName: body.userName });
    console.log(user);
    if (!user) return res.status(400).json({ error: "User not found" });
    if (!user.session) return res.status(401).json({ error: "User not logged in" });
    user.session = false
    await user.save()
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}
```

6. User Delete a short Url.
```
async function onClickDelete(urlId: string) {
  try {
    const response = await axios.post("http://localhost:8001/user/links/delete", {
        userName: route.params.userName,
        url: urlId
    });
    console.log(response)
    if (response.status === 200) {
      console.log(urls)
      window.location.reload();
    }
  } catch (error) {
    console.error(error);
  }
}
```

7. User Url's list.
```
async function handleGetUserLinks(req, res) {
  const body = req.body;
  try {
    const user = await User.findOne({ userName: body.userName });
    console.log(user.storedLinks);
    if (!user) return res.status(400).json({ error: "User not found" });
    if (!user.session)
      return res.status(401).json({ error: "User not logged in" });
    return res.json(user.storedLinks);
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}
```

