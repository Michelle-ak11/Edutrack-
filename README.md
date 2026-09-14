# EduTrack

A modern student record management system designed to help schools efficiently manage student information, academic records, attendance, and student performance from a centralized platform.

---

## Project Structure & Architecture

edutrack/
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── services/       # API services
│   │   ├── assets/         # Images and other assets
│   │   └── ...
│   └── package.json
│
├── server/                 # Node.js / Express backend
│   ├── controllers/        # Application logic
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Authentication and middleware
│   ├── config/             # Database configuration
│   ├── server.js           # Server entry point
│   └── package.json
│
├── README.md
└── .gitignore


---

##  Architecture

                 EduTrack
                    │
                    │
          ┌─────────▼─────────┐
          │                   │
          │   React Frontend  │
          │                   │
          └─────────┬─────────┘
                    │
                    │ REST API
                    │
          ┌─────────▼─────────┐
          │                   │
          │ Node.js + Express │
          │      Backend      │
          │                   │
          └─────────┬─────────┘
                    │
                    │
          ┌─────────▼─────────┐
          │                   │
          │      MongoDB      │
          │      Database     │
          │                   │
          └───────────────────┘


---

## Core Features

### Authentication

- User registration
- Secure login
- Protected application routes
- User authentication

### Student Management

- Add new students
- View student records
- Edit student information
- Delete student records
- Search and filter students
- View individual student profiles

### Academic Records

- Record student scores
- Manage subjects and grades
- View academic performance
- Maintain academic history

### Attendance Management

- Record student attendance
- Track present and absent students
- View attendance statistics
- Monitor individual attendance records


## API Architecture

EduTrack uses a RESTful API to allow communication between the React frontend and the Node.js/Express backend.

React Application
       │
       │ HTTP Requests
       ▼
Express REST API
       │
       ├── Authentication
       ├── Student Management
       ├── Academic Records
       └── Attendance
       │
       ▼
MongoDB


---

## Main Application Modules

EduTrack
│
├── Authentication
│   ├── Register
│   └── Login
│
├── Dashboard
│   ├── Student Statistics
│   ├── Attendance Overview
│   └── Performance Overview
│
├── Students
│   ├── Add Student
│   ├── View Students
│   ├── Edit Student
│   └── Delete Student
│
├── Academic Records
│   ├── Subjects
│   ├── Scores
│   └── Grades
│
└── Attendance
    ├── Record Attendance
    └── Attendance History


---

## Project Objectives

EduTrack was developed to provide a simple and efficient way of managing student records while reducing reliance on manual record keeping.

The project aims to:

- Centralize student information
- Improve accessibility of student records
- Simplify academic record management
- Make attendance tracking easier
- Provide useful student performance insights
- Improve the overall efficiency of school administration


---





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
