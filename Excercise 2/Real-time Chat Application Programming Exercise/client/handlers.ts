import {userDetails} from './userDetails';
const user:userDetails = userDetails.getInstance();

interface TimeDetails {
  currentTime: Date;
  currentOffset: number;
  ISTOffset: number;
  time: Date;
}

export const getIpV4 = (stdout:string):string => {
  const ipv4Regex = /IPv4 Address[^\d]*(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g;
  const matches = [];
  let match;

  while ((match = ipv4Regex.exec(stdout)) !== null) {
    matches.push(match[1]);
  }

  if (matches.length > 0) {
    return matches[0];
  } else {
    return '0';
  }
}

export const welcomeMessage = (roomId:string):void => {
  console.clear(); // Clear the terminal
  console.log("<<< Welcome to Chat App >>>");

  user.showName();
  user.showSocketId();

  console.log("\nRoom",roomId,'\n\nMessages :- \n');
}

export const getTime = ():TimeDetails => {
  var currentTime:Date = new Date();
  var currentOffset:number = currentTime.getTimezoneOffset();

  var ISTOffset:number = 330; // 5 Hours 30 minutes

  const time:any = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

  return {currentTime,currentOffset,ISTOffset,time};
}