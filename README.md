# Contact Management System API

This Contact Management System API is a comprehensive RESTful API built with advanced features for managing contacts, including user authentication, contact organization, and file handling capabilities. It provides robust user authentication, a secure environment for handling contacts, and functionality to upload and download contacts in bulk.

## Table of Contents

Features
Technologies Used
Database Schema
Setup and Installation
Environment Variables
Endpoints
Error Handling
Security Measures
License

## Features

- User Authentication

JWT-based user registration and login.
Email verification on registration.
Password reset via a one-time code.

- Contact Management

CRUD operations for contacts (add, retrieve, update, soft delete).
Batch processing for adding/updating multiple contacts.
Filtering and sorting options for retrieving contacts.
Soft delete functionality for deleted contacts.

- Data Validation

Input validation for all endpoints using Joi.
Enforced unique constraints on emails in both user and contact tables.

- Date-Time Handling

Timestamps stored in UTC.
Conversion to user's specified timezone for accurate retrieval.
Retrieve contacts created within a specific date range.

- File Handling

CSV and Excel file upload for bulk contact creation/updates.
Data validation for file uploads.
Download contacts in CSV or Excel format.

- Database

PostgreSQL/MySQL with normalized schema design and necessary relationships.
Transactions for batch processing and file uploads to ensure data integrity.

- Security

Rate limiting on sensitive endpoints.
Secure password hashing and storage.

## Technologies Used

Node.js and Express.js for the backend.
PostgreSQL/MySQL as the SQL database.
Joi for input validation.
JWT for authentication.
Multer for file handling.
Bcrypt for secure password hashing.

bash
Copy code
git clone https://github.com/ShaikInthiyaz786/contact-management-api
cd contact-management-api
Install dependencies:

`npm install`
Configure the environment variables (see below).

Run the database migrations:

`npx sequelize-cli db:migrate`
Start the server:

`npm start`

## Endpoints

### Authentication

- POST /register - Register a new user.
- POST /login - User login.
- POST /verify-email - Verify user email.
- POST /reset-password - Request a password reset.
- POST /reset-password/
- Complete password reset with token.

### Contacts

- POST /contacts - Add a new contact.
- GET /contacts - Retrieve all contacts (with optional filtering and sorting).
- PUT /contacts/
- Update a contact's details.

### DELETE /contacts/

- Soft delete a contact.
- POST /contacts/batch - Add or update multiple contacts in a single request.

### File Handling

- POST /contacts/upload - Upload a CSV/Excel file for bulk contact creation.
- GET /contacts/download - Download all contacts in CSV or Excel format.

### Error Handling

Errors are returned with descriptive messages and HTTP status codes. Common error codes include:

- 400 Bad Request - Invalid user input.
- 401 Unauthorized - Invalid or missing authentication token.
- 404 Not Found - Resource not found.
- 500 Internal Server Error - Server-side error.

### Security Measures

- JWT Authentication: Secures endpoints by requiring valid tokens for access.
- Rate Limiting: Applied to sensitive endpoints such as login and registration.
- Password Hashing: Passwords are securely hashed using Bcrypt.
- Email Verification: Verifies user identity on registration.
