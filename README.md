Node Postgres CRUD

A simple Node.js + Express + PostgreSQL practice project.
This app connects to a Neon Postgres database and provides basic CRUD (Create, Read, Update, Delete) APIs for users.

Features
- Connects to Postgres using pg package
- Express REST API
- Environment variables via .env
- Users table with id, name, and email
- CRUD operations

Project Structure
node-postgres-crud/
├── src/
│   ├── config/db.js        # Database connection
│   ├── controllers/        # Business logic
│   ├── routes/             # API routes
│   └── index.js            # App entry point
├── .env                    # Environment variables (not committed)
├── .gitignore
├── package.json
└── .readme

Setup
1. Clone the repo:
   git clone https://github.com/ghulamali25/node-postgres-crud.git
   cd node-postgres-crud

2. Install dependencies:
   npm install

3. Create a .env file:
   DATABASE_URL=postgresql://USER:PASSWORD@HOST/neondb?sslmode=require
   PORT=5000

4. Start server:
   npm start

API Endpoints
- GET /users      → Get all users
- POST /users     → Add new user
- PUT /users/:id  → Update user
- DELETE /users/:id → Delete user

Built with Node.js, Express, PostgreSQL
