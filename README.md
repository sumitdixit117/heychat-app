# HeyChat App
HeyChat is a real-time chat application built using Node.js, Express, MongoDB (Mongoose), and React. Users can register, log in, set an avatar, chat with other users, delete chats, and delete their accounts.

## Features
User Registration: Create a new account with a unique username and email.
User Login: Log in to your account using your credentials.
Set Avatar: Set an avatr from given options.
Real-time Chat: Chat with any registered user in real-time.
Delete Chats: Delete chat history with any user.
Delete Account: Delete your account along with all associated chats.

## Technologies Used
Frontend: React, styled-components
Backend: Node.js, Express
Database: MongoDB, Mongoose
Real-time Communication: Socket.io

## Installation
Clone the repository:
git clone https://github.com/yourusername/heychat-app.git
cd heychat-app

## Install dependencies for both frontend and backend:
### Install backend dependencies
cd backend
npm install

### Install frontend dependencies
cd frontend
npm install

## Set up environment variables: 
### Create a .env file in the backend directory and add the following:
MONGO_URL=your_mongodb_connection_string
REACT_APP_LOCALHOST_KEY=your_local_storage_key

## Run the application:
### Run backend server
cd backend
node index.js

### Run frontend server
cd frontend
npm start

### Access the application: 
Open your browser and go to http://localhost:3000.

## API Endpoints
### Auth Routes
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in a user.
GET /api/auth/allusers/:id: Get all users except the current user.
POST /api/auth/setavatar/:id: Set avatar for the user.
GET /api/auth/logout/:id: Log out the user.
DELETE /api/auth/user/:id: Delete the user and their chats.

### Message Routes
POST /api/messages/addmsg: Add a new message.
POST /api/messages/getmsg: Get all messages between two users.
DELETE /api/messages/delmsg: Delete all messages between two users.

## Usage
Register: Create a new account by providing a unique username and email.
Login: Log in using your credentials.
Set Avatar: Set your avatar from given options.
Chat: Start chatting with any registered user.
Delete Chats: Delete chat history with any user.
Delete Account: Delete your account along with all associated chats.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

### Feel free to customize this README file to better suit your project’s specifics. Let me know if you need any more help! 😊
