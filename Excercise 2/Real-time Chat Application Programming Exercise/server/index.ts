import WebSocket from 'ws';
import {chatRoom} from './room/chatRoom';
import {messageManager} from './database/messageManager';
import {usersManager} from './database/usersManager';
import {server} from './services/wsService';

const Chat:chatRoom = chatRoom.getInstance();
const Message:messageManager = messageManager.getInstance();
const Users:usersManager = usersManager.getInstance();

let socketIdCt:number = 0;

function socketIdGenerator():number{
	return socketIdCt++;
}

const addUserToDatabase = (message:string,socketId:number,socket:WebSocket):void => {
	const name:string = message.split("/addUser")[1].trim();
	Users.addUser(name,socketId,socket);
	socket.send(`/socketId ${socketId}`);
}

const addUserToRoom = (message:string,socketId:number):void => {
	const roomId:string = message.split("/addToRoom")[1].trim();
	Chat.addToRoom({roomId,socketId});
}

const removeUserFromRoom = (message:string,socketId:number):void => {
	const roomId:string = message.split("/leave")[1].trim();
	Chat.leaveRoom({roomId,socketId});
}

const sendHistoryOfMessagesToUser = (message:string,socket:WebSocket):void => {
	const roomId:string = message?.split("=")[1].trim();
	const messages:string[] = Message.getMessages(roomId);
	socket.send(`/messageHistory=${messages?.join("D%E%L%I%M%I%T%E%R")}`);
}

const getUsersFromRoomAndNotifyUser = (message:string,socketId:number):void => {
	const roomId:string = message?.split("=")[1].trim();
	Chat.getUserDetailsFromRoom(roomId,socketId);
}

const sendPrivateMessage = (message:string):void => {
	const roomId:string = message?.split("D%E%L%I%M%I%T%E%R")[1].trim();
	Chat.sendPrivateMessage(roomId,message);
}

const sendMessage = (message:string,socketId:number):void => {
	const roomId:string = message?.toString()?.split("=")[1].split('|')[0].trim();
	Message.addMessage({roomId,message});
	Chat.sendMessagesToUsers(roomId,socketId,message);
}



server.on('connection',(socket:WebSocket)=>{
	const socketId:number = socketIdGenerator();

	socket.on("message",(message:string)=>{
		console.log("Recieved Message :- %s",message);

		if(message.toString()?.startsWith("/addUser")){
			addUserToDatabase(message.toString(),socketId,socket);	

		}else if(message.toString()?.startsWith("/addToRoom")) {
			addUserToRoom(message.toString(),socketId);
			
		}else if(message?.toString()?.startsWith("/history")) {
			sendHistoryOfMessagesToUser(message.toString(),socket);
			
		}else if(message?.toString()?.startsWith("/leave")){
			removeUserFromRoom(message.toString(),socketId);

		}else if(message?.toString()?.startsWith('/users')){
			getUsersFromRoomAndNotifyUser(message.toString(),socketId);

		}else if(message?.toString()?.startsWith('/pm')) {
			sendPrivateMessage(message.toString());

		}else{
			sendMessage(message.toString(),socketId);
			
		}
	})

	socket.on("close",()=>{
		console.log("Connection Closed, socket Id :",socketId);
	});
})

