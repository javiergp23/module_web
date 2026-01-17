import { createServer } from "node:http";

const server = createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World from HTTP Server\n");
})

server.listen(3000, "127.0.0.1", ()=> {
    console.log("Server running on port http://127.0.0.1:3000");
});