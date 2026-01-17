import { createServer } from "node:http";

const server = createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Home Page");
    }else if(req.url === "/hello"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hello Page");
    }
})

server.listen(3000, "127.0.0.1", ()=> {
    console.log("Server running on port http://127.0.0.1:3000");
});