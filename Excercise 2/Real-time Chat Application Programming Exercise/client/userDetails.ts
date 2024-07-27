interface userInterface{
	name:string;
	socketId:number;
}

export class userDetails{
	private name:string = '';
	private socketId:number = 0;
	
	private static instance: userDetails;

	public static getInstance() :userDetails{
		if(!userDetails.instance){
			userDetails.instance = new userDetails();
		}
		return userDetails.instance;
	}

	setUserDetails({name,socketId}:userInterface){
		this.name = name;
		this.socketId = socketId;
	}

	getUserDetails():void {
		console.log("Name:- ",this.name,"User Id:- ",this.socketId);
	}

	getSocketId():number{
		return this.socketId;
	}

	showSocketId():void{
		console.log("Your Socket Id:- ",this.socketId);
	}

	showName():void{
		console.log("Your Name :- ",this.name);
	}
}

