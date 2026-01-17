import { get } from "node:http";

const urlSite = {
    hostname: "localhost",
    port: 3000,
    path: "/",
}

get(urlSite, (res) => {
 console.log(`the site ${urlSite.hostname} response status code is: ${res.statusCode}`);
}).on("error", (err) => {
    console.error(`Error: the site ${urlSite.hostname} code: ${err.code} ${err.message}` );
})