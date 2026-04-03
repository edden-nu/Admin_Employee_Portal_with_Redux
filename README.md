# Admin & Employee Portal with Redux

## Overview
This is a full-stack web application with role-based access control.

Users can log in as **admin** or **employee**:
- Admin can create jobs
- Employee can view jobs

---

## Tech Stack
- Frontend: React, Redux Toolkit, Material UI
- Backend: Node.js, Express
- Database: MongoDB

---

## Features
- User authentication (login)
- Role-based routing (admin / employee)
- Create job (admin only)
- View jobs (employee only)
- RESTful API integration

---

## Setup Instructions

### 1. Clone repository
- bash
- git clone <your-repo-url>
- cd Admin-Employee-Portal-with-Redux

### 2. Backend setup
- cd backend
- npm install
- node server.js

### 3. Frontend setup
- cd frontend
- npm install
- npm start

### 4. Test Accounts
{
  "email": "admin@test.com",
  "password": "123456"
}

{
  "email": "employee@test.com",
  "password": "123456"
}

---

## API Endpoints
###  Auth
- POST /api/auth/login
###  Users
- POST /api/users/create
- GET /api/users
###  Jobs
- POST /api/jobs/create
- GET /api/jobs

---

## Notes
- MongoDB must be running locally (mongodb://localhost:27017)
- Role-based access is handled on frontend routing
