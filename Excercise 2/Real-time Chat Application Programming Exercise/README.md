# 5. Real-time Chat Application Programming Exercise

## Introduction

This project is a simple real-time chat application where users can join different chat rooms or create their own chat rooms. Users can send and receive messages in real-time. The project contains two main components:
- Server
- Client

## Problem Statement

Create a simple real-time chat application where users can join different chat rooms or create their own chat rooms. Users should be able to send and receive messages in real-time.

## Solution Provided

### Overview

The solution is implemented using TypeScript and relies on Node.js for both the server and client components. The server manages chat rooms and facilitates communication between clients using WebSockets. The client allows users to join chat rooms and send/receive messages in real-time.

### Project Structure

<pre>

Chat App
│
├── server
│ ├── index.ts
│ ├── database
│ ├── room.ts
│ ├── services.ts
│ └── ... (other server files)
│
├── client
│ ├── client.ts
│ ├── handlers.ts
└─└── ... (other client files)

</pre>

# Features

### 1. Chat Room Management
- Users can create new chat rooms or join existing ones by entering a unique room ID. 
  
### 2. Real-Time Messaging
- Users can send and receive messages instantly within their chat room. The application uses WebSocket to ensure real-time communication.

### 3. Active Users List
- A list of active users in the chat room is displayed, providing visibility into who is currently participating in the chat.

### 4. Private Messaging: 
- Users can send private messages to each other, enabling private communication within the chat room.

### 5. Message History: 
- The chat application supports message history, allowing users to view past conversations even after leaving and rejoining the chat room. It ensures that the chat persists.

### Design Patterns and Architecture Implemented

- **Observer Pattern:** Applied to notify clients of new messages or user activities, ensuring that all connected users are updated in real-time.
- **Singleton Pattern:** Used to manage the state of the chat room and database, ensuring that there is a single point of control for room management.
- **Adapter Pattern:** Implemented to allow the system to work with different types of client communication protocols (WebSocket).
- **Object-Oriented Principles:** Encapsulation and inheritance are effectively applied to create a modular and maintainable codebase.

# Steps to run the application

## Prerequisites

Node.js should be installed on the machine to run this project. To install Node.js, follow these steps:

1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Install `ts-node` globally using the following command:
   ```sh
   npm install -g ts-node
   ```

## Setup Instructions

1. Clone the repository

```sh
    git clone https://github.com/thejas-dev/Ei-Excercises.git
```

2. Navigate to ChatApp Project Directory
```sh
    cd Excercise 2/Real-time Chat Application Programming Exercise/ 
```

## Starting the Server

1. Navigate to the server directory and install the required packages:
 ```sh
    cd server && npm i
 ```
2. Start the server using ts-node:
 ```sh
    ts-node index.ts
 ```

Preview Screenshot

<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_BnFK_t_GV" style="width:700px"
alt="Preview Image"/>

On starting the server, the HTTP server and WebSocket are initialized on port 3333 on the machine. Using this port combined with the ip address of this machine, clients can connect with the server to interact with each other.

## Starting the Client

<p style="color:lightgray;font-size:0.9em" >
Open another terminal and navigate to the ChatApp project directory. The directory location should be as follows: \Ei Exercises\Exercise 2\Real-time Chat Application Programming Exercise
</p>

1. Navigate to the client directory from the project directory and install the required packages:

 ```sh
    cd server && npm i
 ```

2. Start the client script using ts-node:
 ```sh
    ts-node client.ts
 ```

Preview Screenshot

<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_xxxT-Cuww" style="width:700px"
alt="Preview Image"/>

Upon starting the client, it will prompt you to enter the server machine’s IP address. If the server is running on the same local machine, just press `Enter`. It will automatically fetch current machine's IP address and assign it. 

If you need to connect to a `remote machine` server, enter the IP address of the server machine (the machine running the server script should be on the same network). There is no need to enter the port number. 

After entering the IP address, a `socket connection` will be established with that server.

Entering IP address

<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_z8stfHZAJe" style="width:700px"
alt="Preview Image"/>

`Multiple clients` can be created by running the above commands and following the above steps in multiple terminals like shown below. These clients can then connect and interact with each other.

Preview Screenshot

<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_LmgAZpB68" style="width:700px"
alt="Preview Image"/>

In above screenshot, `three clients` are created in three different terminals and one server running on a separate terminal (bottom-right)

- Multiple terminals are used to create multiple clients.
- All clients need to enter the same Room ID to join the same room and chat with each other.
- The Room ID can be any sequence of numbers or characters (e.g., Room123).
- No spaces should be present in the Room ID (Not mandatory).

Provided `same` Room Id for all the clients

<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_2uI5ytdN4Y" style="width:700px"
alt="Preview Image"/>

After Entering the `Room Id`, the clients will `join the room` and each time a new user joins the room, the user name will be logged with the `timestamp`.

<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_GjgrHB65_" style="width:700px"
alt="Preview Image"/>

Now Clients can communicate with each other through the terminal.

<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_wO1BFdjud" style="width:700px"
alt="Preview Image"/>

# Features
## View List of Users in a Room

### Description

This feature allows clients to view the list of users currently present/active in a chat room. By entering the command `/users` within the chat room, clients can retrieve and display the list of active users along with their unique user IDs. This functionality is particularly useful for identifying other participants in the room and can facilitate `private messaging `by providing the `unique user ID` of each user.

### How to Use

1. **Enter the Command**: While in a chat room, type the command `/users` and press Enter.
   ```sh
   /users
   ```
2. **View the list of users as follow**

<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_8kHdoHRgJ" style="width:700px"
alt="Preview Image"/>

Result will look like this 

<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_llwenSEJg" style="width:700px"
alt="Preview Image"/>

## Private Messaging


### Description

The private messaging feature facilitates privacy by enabling users to communicate directly with a `specific user` without broadcasting the message to the entire room. This ensures that only the intended recipient receives the message, `enhancing privacy and confidential communication` within the chat room.


### How to Use

1. **Enter the Command**: While in a chat room, type the command `/pm` followed by the `userId` (to view user Id of users in room run the /users command) of the recipient followed by the message to send. Press Enter.
   ```sh
   /pm 3 Hey, this is a secret.
   ````
2. **Message Delivery**: The message will be sent to the user with userId 3. Other users in the room will not receive this message.

<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_0dTyRn9C3" style="width:700px"
alt="Preview Image"/>


### Use Case

***Enhance Privacy***: Communicate privately with a specific user without others knowing.

***Confidential Communication***: Share sensitive information securely within the chat application.

### Note  
***Message History***: Private messages are not stored in the database. Hence, they cannot be retrieved using the /history command.

## History Command

### Description

The `/history` command allows users to retrieve the chat history of a room. This is particularly useful for users who have newly joined a room or have left and rejoined a room. The chat history is `stored in the database`, ensuring that all messages persist even if a user leaves and rejoins the room.


### How to Use

1. **Enter the Command**: While in a chat room, type the command /history and press Enter.

```sh
   /history
```

2. **View Chat History**: The chat history of the room will be retrieved and displayed from the beginning of the room's creation. This includes messages from other users that were sent when the requesting user was not in the room.

<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_Hi7B7ycAM" style="width:700px"
alt="Preview Image"/>


## Use Case
***Persistent Chat***: Ensure that the chat persists even if a user leaves and rejoins the room.   

***Complete Context***: Retrieve all messages from the beginning of the room, including those sent by other users when the current user were not present in the room.

## Leave Room

### Description

The `leave` command enables users to leave the current chat room they are in. Upon leaving the room, the terminal will be cleared, and the user will be prompted to enter a new room ID, just as it was at the beginning of the program. Users can then choose to join a different room or rejoin the same room. If they rejoin the same room, they can use the `/history` command to retrieve past messages and continue chatting with the same members.
.

### How to Use

1. **Enter the Command**: While in a chat room, type the command `/leave` and press Enter.
   ```sh
   /leave
   ```

<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_OkEaSnAdO" style="width:700px"
alt="Preview Image"/>


## Use Case
***Switch Rooms***: Easily leave the current room and join a different one.  

***Rejoin Same Room***: Rejoin the same room if desired and retrieve the chat history using the `/history` command to continue conversations seamlessly.
   
   
**Program Termination**:
 
 Press `CTRL+C` anytime to terminate the program on client or server. If the client program is terminated while inside a room, the program will automatically run the `/leave` command to make sure that the client is no more inside the room. 
 
 If the server is terminated all the client scripts also gets terminated to ensure no error occurs.
 

---

<a href="https://www.linkedin.com/in/thejashari/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="cyberspartan" height="30" width="40" /></a>
<a href="https://instagram.com/nuthejashari" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="karthithehacker" height="30" width="40" /></a>

---

