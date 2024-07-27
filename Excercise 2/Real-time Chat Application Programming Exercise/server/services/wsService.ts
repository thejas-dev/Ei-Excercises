import WebSocket from 'ws';
const PORT:string = process.env.PORT || '3333';
import http from "http";

const httpServer = http.createServer((req,res)=>{
	res.end("hello world");
})

export const server: WebSocket.Server = new WebSocket.Server({server:httpServer});
console.log("Websocket Server started and running on port :-",PORT)

httpServer.listen(PORT,
    () => {
        console.log(
            `HTTP Server running at http://localhost:${PORT}/`
        );
    });