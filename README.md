# CTF Challenge - User Guide

Welcome to our CTF challenge! This guide will walk you through setting up the frontend and backend of our web-based CTF platform. Please follow the instructions below carefully to ensure everything runs smoothly.

## Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the required dependencies (only needed the first time):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   This will start the frontend, and it should be accessible at `http://localhost:5173` by default.

## Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Run the backend server:
   ```bash
   go run main.go
   ```

   The backend will start and listen for requests. Make sure the frontend and backend are properly configured to communicate.

## Database Information

To ensure a fair challenge and prevent cheating, we have included the following database files:

1. **`db.go`**: Contains an empty database schema. This is included to prevent users from accessing any answers directly by reviewing the source code.
2. **`CTF.db`**: This file contains the necessary hashed answers for the challenges.

The answers have been securely hashed, so direct access to the database will not reveal the solutions.

Enjoy the challenge, and good luck!

---

We hope you have fun solving the challenges on our CTF platform. May the best solver win!
