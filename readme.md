# Self Project API

A Node.js + Express + MongoDB backend for restaurant management.

## Tech Stack

- Node.js
- Express
- MongoDB (Mongoose)
- dotenv
- cors
- qrcode

## Project Structure

```
.
├── package.json
├── server.js
└── src
    ├── app.js
    ├── config
    │   └── db.js
    ├── controllers
    ├── models
    └── routes
```

## Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB connection string

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create or update `.env` in the project root:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Run the Project

```bash
node server.js
```

The API starts on `http://localhost:5000` (or the value set in `PORT`).

## Base Route

- `GET /` -> returns API health message

## API Endpoints

### Users

- `POST /api/users` -> create user

### Restaurants

- `POST /api/restaurants` -> create restaurant
- `GET /api/restaurants` -> list restaurants

### Categories

- `POST /api/categories` -> create category
- `GET /api/categories/:restaurantId` -> get categories by restaurant

### Tables

- `POST /api/tables` -> create table

### Menu

- `POST /api/menu` -> create menu item
- `GET /api/menu/:restaurantId` -> get menu by restaurant

## Notes

- Make sure `MONGO_URI` is valid before starting the server.
- The app waits for database connection before listening for requests.
