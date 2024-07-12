# HeyChat App
HeyChat is a real-time chat application built using Node.js, Express, MongoDB (Mongoose), and React. Users can register, log in, set an avatar, chat with other users, delete chats, and delete their accounts.

## Features
* User Registration: Create a new account with a unique username and email.
* User Login: Log in to your account using your credentials.
* Set Avatar: Set an avatr from given options.
* Real-time Chat: Chat with any registered user in real-time.
* Delete Chats: Delete chat history with any user.
* Delete Account: Delete your account along with all associated chats.

## Technologies Used
* Frontend: React, styled-components
* Backend: Node.js, Express
* Database: MongoDB, Mongoose
* Real-time Communication: Socket.io

## Installation
Clone the repository:
+ git clone https://github.com/yourusername/heychat-app.git
+ cd heychat-app

## Install dependencies for both frontend and backend:
### Install backend dependencies
+ cd backend
+ npm install

### Install frontend dependencies
+ cd frontend
+ npm install

## Set up environment variables: 
### Create a .env file in the backend directory and add the following:
- MONGO_URL=your_mongodb_connection_string
- REACT_APP_LOCALHOST_KEY=your_local_storage_key

## Run the application:
### Run backend server
- cd backend
- node index.js

### Run frontend server
- cd frontend
- npm start

### Access the application: 
Open your browser and go to http://localhost:3000.

## API Endpoints
### Auth Routes
1. POST /api/auth/register: Register a new user.
2. POST /api/auth/login: Log in a user.
3. GET /api/auth/allusers/:id: Get all users except the current user.
4. POST /api/auth/setavatar/:id: Set avatar for the user.
5. GET /api/auth/logout/:id: Log out the user.
6. DELETE /api/auth/user/:id: Delete the user and their chats.

### Message Routes
1. POST /api/messages/addmsg: Add a new message.
2. POST /api/messages/getmsg: Get all messages between two users.
3. DELETE /api/messages/delmsg: Delete all messages between two users.

## Usage
1. Register: Create a new account by providing a unique username and email.
2. Login: Log in using your credentials.
3. Set Avatar: Set your avatar from given options.
4. Chat: Start chatting with any registered user.
5. Delete Chats: Delete chat history with any user.
6. Delete Account: Delete your account along with all associated chats.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

### Feel free to customize this README file to better suit your project’s specifics. Let me know if you need any more help! 😊
