# LOKKEDROOM BACKEND API

## Overview
This backend server provides the necessary API endpoints for a real-time chat application. It handles user authentication, message storage, and conversation management. This README file contains instructions for setting up and using the backend server.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Data Structure](#data-structure)



### Getting Started

### Prerequisites
Before you can use this backend server, ensure that you have the following prerequisites installed:

- Node.js (v14 or higher)
- npm or Yarn package manager

Installation
Clone this repository to your local machine:

```bash
git clone  [git@github.com:Junior-dev-Track/23-fullstack-lokkeroom-hazarkocturk.git](https://github.com/Junior-dev-Track/23-fullstack-lokkeroom-hazarkocturk.git)
cd server
```
Install dependencies:

```bash
npm install
# Or
yarn install
```

## Usage

### Running the Server

To start the backend server, run the following command:

```bash
npm start
# Or
yarn start
```

By default, the server will run on port 8000.

### API Endpoints
##### API Reference

#### Signup

```http
  POST /auth/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. fullName,    |
| `api_key` | `string  | username,                  |
| `api_key` | `string  | email,                     |
| `api_key` | `string  | password,                  |
| `api_key` | `string  | confirmpassword,           |
| `api_key` | `string  | gender,                    |
 
            

#### Login

```http
  POST /auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. username,           |
| `api_key` | `string  | password,                         |

#### Logout

```http
  POST /auth/logout
```

#### Get Users

```http
  GET /users
```

#### Send Messages

```http
  POST /messages/send/:id
```

#### Get Messages

```http
  GET /messages/:id
```


## Data Structure

The data structure for the backend server is defined in the database. You can customize the database schema or add more data types to suit your chat application's needs.

# LOKKEDROOM FRONTEND API


## Overview
The frontend of the Lokkedroom application provides a user interface for chat-app. It interacts with the backend server to handle user authentication, message sending and receiving, and conversation management. This README file contains instructions for setting up and using the frontend application.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)

### Getting Started

### Prerequisites
Before you can use this frontend application, ensure that you have the following prerequisites installed:

- Node.js (v14 or higher)
- npm or Yarn package manager

### Installation
Clone this repository to your local machine:

```bash
git clone [git@github.com:Junior-dev-Track/23-fullstack-lokkeroom-hazarkocturk.git](https://github.com/Junior-dev-Track/23-fullstack-lokkeroom-hazarkocturk.git)
cd frontend
```

### Install dependencies:

```bash
npm install
# Or
yarn install
```
### Usage
####Running the Application
To start the frontend application, run the following command:

```bash
Copy code
npm start
# Or
yarn start
```

### Features
User Authentication: Users can sign up, log in, and log out securely.
Real-time Chat: Users can send and receive messages.
User List: Users can see a list of other users and start conversations with them.
Message History: Users can view past messages in a conversation.

### Folder Structure
The frontend application follows a typical folder structure:

php

frontend/
  ├── public/            # Public assets and HTML template
  ├── src/               # Source files
  │   ├── components/    # React components
  │   ├── context/       # React contexts
  │   ├── hooks/         # Custom hooks
  │   ├── utils/         # Custom functions for emojis and Message Time
  │   ├── pages/         # Application pages
  │   ├── services/      # API service functions
  │   └── App.js         # Main application component
  └──  package.json      # Node.js dependencies and scripts
  
### Dependencies

React: JavaScript library for building user interfaces.
React Router: Declarative routing for React applications.
Tailwind: Frontend framework for responsive and mobile-first development.
Zustand: Library for creating global states.

Feel free to customize the frontend application according to your specific requirements and design preferences.
