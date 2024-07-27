import WebSocket from 'ws';

interface userInterface {
	name:string;
	socketId:number;
	socket?:WebSocket;
}

class baseUserManager{
	protected onlineUsers :userInterface[];

	protected constructor(){
		this.onlineUsers = [];
	}

	addUser(name :string,socketId :number,socket: WebSocket){
		this.onlineUsers.push({name,socketId,socket})
	}	

	getUsersDetails():void {
		this.onlineUsers.map((user:userInterface)=>{
			console.log("Name:- ",user.name,"Socket Id:- ",user.socketId);
		})
	}
}

export class usersManager extends baseUserManager{
	private static instance : usersManager;

	private constructor(){
		super();
	}

	public static getInstance() :usersManager{
		if(!usersManager.instance){
			usersManager.instance = new usersManager();
		}
		return usersManager.instance;
	}	

	getUserBySocketId(socketId:number) :userInterface {
		const idx:number = this.onlineUsers.findIndex((user:userInterface)=>{
			if(user.socketId === socketId) return true;
			return false;
		})
		if(idx > -1){
			return this.onlineUsers[idx];
		}else{
			return {name:'',socketId:-1,socket:new WebSocket("")}
		}
	}

	getMultipleUsersBySocketIds(socketId:number[]) :userInterface[] {
		let users:userInterface[] = this.onlineUsers.filter((user)=>socketId.includes(user.socketId));
		return users;
	}

	getUserSocketFromSocketId(socketId:number):WebSocket | undefined{

		const idx:number = this.onlineUsers.findIndex((user:userInterface)=>{
			if(user.socketId === socketId) return true;
			return false;
		})

		if(idx > -1){
			return this.onlineUsers[idx].socket;
		}else{
			return undefined;
		}
	}
}

