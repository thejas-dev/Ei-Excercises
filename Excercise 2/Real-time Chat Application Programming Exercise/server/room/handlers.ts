
interface TimeDetails {
  currentTime: Date;
  currentOffset: number;
  ISTOffset: number;
  time: Date;
}

export const getTime = ():TimeDetails => {
  var currentTime:Date = new Date();
  var currentOffset:number = currentTime.getTimezoneOffset();

  var ISTOffset:number = 330; // 5 Hours 30 minutes

  const time:any = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

  return {currentTime,currentOffset,ISTOffset,time};
}