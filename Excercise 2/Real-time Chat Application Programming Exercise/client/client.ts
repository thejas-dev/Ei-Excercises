const readline = require('readline');
const { userDetails } = require("./userDetails"); 
const {getIpV4,welcomeMessage,getTime} = require('./handlers.ts');

import WebSocket from "ws";
import { exec } from 'child_process';

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

var ws:WebSocket;
const user = userDetails.getInstance();

console.clear();
console.log("<<< Welcome to Chat App >>>");

let ipv4:string;
var name:string = '';
var roomId:string = '0';

const promptAction = (query:string) => new Promise<string>((resolve)=>rl.question(query,resolve));

function runIpConfig(){
  return new Promise<string>((resolve,reject)=>{
    exec('ipconfig', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      reject();
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      reject();
    }
    resolve(stdout);
  });
  })
}

const clearLastLine = ():void => {
  readline.moveCursor(process.stdout, 0, -1)
  readline.clearLine(process.stdout, 1)
}

async function startSendingMessages(){
  const message:string = await promptAction('');
  clearLastLine();

  if(message?.startsWith('/pm')){
    try{
      const tempSocketId:number = Number(message?.split('/pm')[1].trim().split(' ')[0].trim());

      if(tempSocketId !== user.getSocketId()){
        const {currentTime,currentOffset,ISTOffset,time} = getTime();

        ws.send(`/pm ${tempSocketId} | (Private Message) ${name}: ${message.split(String(tempSocketId))[1].trim()} \x1b[90m(${time.getHours()}:${time.getMinutes()}, ${new Date().toISOString()?.split('T')[0]})\x1b[0mD%E%L%I%M%I%T%E%R${roomId}`);
        console.log(`-> (Private Message) ${name} : ${message}`)
      }
    }catch(ex){
      console.log("Format Error. Expected Private Message Format like the following :- \n/pm <userId> <message>\n");
    }

    startSendingMessages();
    return;
  }

  switch(message){
    case '/leave':
      ws.send(`/leave ${roomId}`);
      roomId = '0';
      console.log("You left the room!");
      
      promptRoomIdToUser();
      break;
    
    case '/history':
      ws.send(`/history=${roomId}`);
      break;

    case '/users':
      ws.send(`/users=${roomId}`);
      break;

    default:
      const {currentTime,currentOffset,ISTOffset,time} = getTime();
      ws.send(`/message=${roomId} | ${name} : ${message} \x1b[90m(${time.getHours()}:${time.getMinutes()}, ${new Date().toISOString()?.split('T')[0]})\x1b[0m`)
      
      console.log(`-> ${name} : ${message}`)
      startSendingMessages();

      break;
  }
}

async function promptRoomIdToUser(){
  if(roomId === '0'){
    roomId = await promptAction("\nEnter Room Id to join or create (CTRL+C to Close) :- ");
  }
  if(roomId === '0') {
    console.log("Room Id 0 not allowed\n");
    promptRoomIdToUser();
    return;
  };
  ws.send(`/addToRoom ${roomId}`);
  welcomeMessage(roomId);

  startSendingMessages();
}

function printUsersInRoom(users:{name:string,socketId:number}[]):void {
  console.log("\nActive Users in room",roomId);
  const tempUsers:{name:string,userId:number}[] = users?.map((user)=>{return {name:user.name,userId:user.socketId}});
  console.table(tempUsers, ["name", "userId"]);  
}

async function main(){
  
  const result:string = await runIpConfig();

  const res:string = await promptAction("Provide Server IP Address\n1) Server running this own machine (Press Enter)\n2) Server running on another machine (Enter IP Address)\n\x1b[90mExample input :- 192.168.1.2\x1b[0m\n");

  if(res){
    ipv4 = res;
  }else{
    ipv4 = getIpV4(result);
  }

  if(ipv4 !== '0'){
    console.log("Connecting to:-" ,`${ipv4}:3333`);
    console.log("It is expected to have server running on the same ip address.");
  }else{
    process.exit(0);
  }

  try{
    ws = new WebSocket(`ws://${ipv4}:3333`);
  }catch(ex){
    console.log(`\nerr${ex}`);
    process.exit(0);
  }

  async function getUserDetails():Promise<void>{
    if(!name){
      name = await promptAction("\nEnter Your Name :- ");
    }
    
    console.log("\n...Connecting to server and obtaining Socket Id...");
    
    try{
      ws.send(`/addUser ${name}`);
    }catch(ex){
      console.log("Error While Connecting to Server, retrying in 5 seconds");
      setTimeout(()=>{
        getUserDetails()
      },5000)
    }

  }

  getUserDetails();


  ws.on('error', (error)=>{
    console.log('\nCannot Establish a connection with the server, please check the ip address provided and try again');
    process.exit(0);

  });

  ws.on('open',(socket:any)=>{

    ws.on("message",async(message:string)=>{
      if(message.toString()?.startsWith("/socketId")){
        const trimmedAndDecoded:string = message.toString().split("/socketId")[1].trim();

        user.setUserDetails({name,socketId:Number(trimmedAndDecoded)});
        user.showSocketId();
        
        promptRoomIdToUser();
        
      } else if(message?.toString().startsWith('/messageHistory')) {
        const messages: string[] = message?.toString()?.split("=")[1].split('D%E%L%I%M%I%T%E%R');
        console.clear();
        welcomeMessage(roomId);
      
        if(messages?.length > 0) messages?.forEach((message)=>{message && console.log(`-> ${message}`)})
      
        startSendingMessages();
      
      } else if(message.toString().startsWith("/usersInRoom")) {
        const users :{name:string,socketId:number}[] = JSON.parse(message?.toString().split("=").splice(1).join().trim())  
         
        printUsersInRoom(users); 
        
        startSendingMessages();
      
      } else {
        console.log("-> %s",message);
      }
    })

    ws.on('close',()=>{
      console.log("\nServer disconnected, Closing the App...!");
      process.exit(0);
    })

  })

}
main();

process.on('SIGINT', function() {
    console.log("\nExiting from room if joined");
    if(roomId !== '0') ws.send(`/leave ${roomId}`);
    process.exit(0);
});