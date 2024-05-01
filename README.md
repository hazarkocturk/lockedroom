# LOKKEDROOM API

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
