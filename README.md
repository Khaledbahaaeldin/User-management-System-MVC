# User Management System (MVC)

A user management system built using Node.js and MongoDB, following the MVC architectural pattern.

## Overview

This application provides a complete user management solution with authentication, authorization, and CRUD operations for user data.

## Tech Stack

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- bcrypt for password security

### Frontend
- Next.js with App Router
- React
- Material UI
- TypeScript
- Axios for API requests

## Features

- User registration and authentication
- Protected routes with JWT validation
- Complete CRUD operations for user management
- Responsive Material UI interface

## Installation

### Prerequisites
- Node.js
- MongoDB

### Setup Instructions
1. Clone the repository
2. Setup backend:

cd backend npm install

3. Setup frontend:

cd frontend npm install


## Usage

Start the backend:

cd backend
node server.js


Start the frontend:

cd frontend
npm run dev


Visit http://localhost:3000 in your browser.

## API Endpoints

| Method | Endpoint         | Description                    |
|--------|------------------|--------------------------------|
| POST   | /api/register    | Register new user              |
| POST   | /api/login       | Authenticate user              |
| GET    | /api/users       | Get all users                  |
| PUT    | /api/users/:id   | Update user by ID              |
| DELETE | /api/users/:id   | Delete user by ID              |





