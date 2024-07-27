import {usersManager} from '../database/usersManager';
import {messageManager} from '../database/messageManager';
import {getTime} from './handlers';
import WebSocket from 'ws';

const Message:messageManager = messageManager.getInstance();
const Users:usersManager = usersManager.getInstance();

interface userInterface {
	name:string;
	socketId:number;
	socket?:WebSocket;
}

interface roomInterface {
	roomId:string;
	socketId:number;
}

class baseChatRoom{
	protected rooms: Map<string,number[]>;

	protected constructor() {
	    this.rooms = new Map<string,number[]>();
	}

	protected getSocketIdsFromRoom(roomId:string):number[]{
		const socketIds: number[] = this.rooms.get(roomId) ?? [];
		return socketIds;
	}
}


export class chatRoom extends baseChatRoom{
	private static instance: chatRoom;
	
	private constructor() {
	    super();
	}

	public static getInstance(): chatRoom {
	    if (!chatRoom.instance) {
	      chatRoom.instance = new chatRoom();
	    }
	    return chatRoom.instance;
	}

	addToRoom({roomId,socketId}:roomInterface):void{
		let room = this.rooms?.get(roomId) ?? [];
		room = [...room,socketId];
		this.rooms.set(roomId,room);

		const filtered:number[] = room.filter((roomTemp)=>roomTemp !== socketId);
		const joinedUser: userInterface | undefined = Users.getUserBySocketId(socketId);
		
      	const {currentTime,currentOffset,ISTOffset,time} = getTime();
		filtered.forEach((filterId)=>{
			const message = `New User Joined : ${joinedUser.name} \x1b[90m(${time.getHours()}:${time.getMinutes()}, ${new Date().toISOString()?.split('T')[0]})\x1b[0m`;
			this.notifyUser(filterId,message)
		})
		
		const message = `New User Joined : ${joinedUser.name} \x1b[90m(${time.getHours()}:${time.getMinutes()}, ${new Date().toISOString()?.split('T')[0]})\x1b[0m`;
		Message.addInfoMessage({roomId,message});
	}

	leaveRoom({roomId,socketId}:roomInterface):void{
		const room = this.rooms?.get(roomId) ?? [];
		const filtered = room.filter((roomTemp)=>roomTemp !== socketId);
		
		this.rooms.set(roomId,filtered);
		const leftUser: userInterface|undefined = Users.getUserBySocketId(socketId);
		
      	const {currentTime,currentOffset,ISTOffset,time} = getTime();
		filtered.forEach((filterId)=>{
			const message = `User left : ${leftUser.name} \x1b[90m(${time.getHours()}:${time.getMinutes()}, ${new Date().toISOString()?.split('T')[0]})\x1b[0m`;
			this.notifyUser(filterId,message)
		})

		const message = `User Left : ${leftUser.name} \x1b[90m(${time.getHours()}:${time.getMinutes()}, ${new Date().toISOString()?.split('T')[0]})\x1b[0m`;
		Message.addInfoMessage({roomId,message});
	}

	sendMessagesToUsers(roomId:string,socketId:number,message:string):void{
		const socketIdsInRoom:number[] = this.getSocketIdsFromRoom(roomId);
		const tempMessage = message.toString().split("|").splice(1).join().trimLeft();

		socketIdsInRoom?.forEach((tempSocketId)=>{
			if(tempSocketId !== socketId){
				this.notifyUser(tempSocketId,tempMessage)
			}
		})
	}

	getUserDetailsFromRoom(roomId:string,socketId:number):void{
		const socketIdsInRoom:number[] = this.getSocketIdsFromRoom(roomId);
		let users:{name:string,socketId:number}[] = [];
		
		socketIdsInRoom.forEach((tempId)=>{
			const user: userInterface|undefined = Users.getUserBySocketId(tempId);
			if(user){
				users.push({name:user.name,socketId:tempId})
			}
		})

		const message = `/usersInRoom=${JSON.stringify(users)}`;
		this.notifyUser(socketId,message);
	}

	sendPrivateMessage(roomId:string,message:string):void{
		const socketIdsInRoom:number[] = this.getSocketIdsFromRoom(roomId);
		const socketId:number = Number(message?.split('/pm')[1].trim().split(' ')[0].trim());
		const messageDecoded:string =  message?.split('|')[1].split("D%E%L%I%M%I%T%E%R")[0].trim();

		if(socketIdsInRoom?.includes(socketId)){
			this.notifyUser(socketId,messageDecoded);
		}
	}

	private notifyUser(tempSocketId:number,message:string){
		const userSocket :WebSocket | undefined = Users.getUserSocketFromSocketId(tempSocketId);

		if(userSocket) userSocket.send(message);
	}	

	getAllRoomDetails(){
		console.log(this.rooms);
	}

} 