import http from 'node:http'

const server = http.createServer((request, response)=>{
    response.end("Mi primera api")
})

server.listen(8080, ()=>{
    console.log("SV ON");
    
})

