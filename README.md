# JWT Authentication Express App

## Overview

This is a simple Express.js application that demonstrates JWT (JSON Web Token) authentication.
The app allows users to log in and access a profile endpoint, all protected by JWT.

![image](https://github.com/user-attachments/assets/458209c9-51c9-4359-ac26-a7e81151900c)
![image](https://github.com/user-attachments/assets/42943550-d058-4363-909a-77c0b5c8195d)


## Tech Stack

- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **JWT**: JSON Web Token for authentication
- **bcryptjs**: Library for hashing passwords
- **dotenv**: Module for environment variable management
  
Run 
- npm install
- npm start
  
URL: POST -  http://localhost:3001/login
URL: GET -  http://localhost:3001/profile

## Endpoints
### 1.POST /login`

**Description**: Authenticates a user and returns a JWT access token.

**Request Body**:
```json
{
  "email": "string",
  "password": "string"
}
Response:
200 OK:
json
{
  "accessToken": "string"
}
403 Forbidden:
json
{
  "message": "User not found" 
}

2.GET /profile
Description: Retrieves the profile information of the authenticated user.

Headers:

Authorization: Bearer <accessToken>
Response:

200 OK:
json

{
  "email": "string",
  "username": "string"
}
401 Unauthorized:
json

{
  "message": "Unauthorized"
}
403 Forbidden:
json
Копировать код
{
  "message": "Forbidden"
}
404 Not Found:
json
Копировать код
{
  "message": "User not found"
}
