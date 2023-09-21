# User Management API (Work in Progress)

## Description

The User Management API is a RESTful API built with Node.js, Hapi.js, and MySQL to manage user accounts. It includes authentication using JSON Web Tokens (JWT) and provides endpoints for user registration, login, user retrieval, update, and deletion.

Please note that this project is currently a work in progress, and some features may not be fully implemented. Contributions and feedback are welcome.

## Features

- User registration with email and password
- User login with JWT authentication
- Retrieving a list of all users
- Retrieving a single user by ID
- Updating a user's information
- Deleting a user account

## Technologies Used

- Node.js
- Hapi.js
- Sequelize (for MySQL database interaction)
- JSON Web Tokens (JWT) for authentication
- MySQL (or your preferred database)
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/user-management-api.git

    Change into the project directory:

    bash

cd user-management-api

Install project dependencies:

bash

npm install

Configure the database connection by updating the config/database.js file with your database credentials.

Start the server:

bash

    npm start

    The server should now be running at http://localhost:3000. You can access the API endpoints using a tool like Postman or your preferred API client.

API Endpoints

    POST /api/register: Register a new user.
    POST /api/login: Log in a user and obtain a JWT token.
    GET /api/users: Retrieve a list of all users.
    GET /api/users/{id}: Retrieve a user by ID.
    PUT /api/users/{id}: Update a user's information.
    DELETE /api/users/{id}: Delete a user's account.

Configuration

You can configure the JWT secret key and other settings in the config/auth.js file.
Usage

    Register a new user using the /api/register endpoint.
    Log in to obtain a JWT token using the /api/login endpoint.
    Use the JWT token to access protected routes like /api/users.
    Update or delete user accounts as needed.

Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.
