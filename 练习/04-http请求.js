const http = require('http')

const server = http.createServer((request,response)=>{
    let url = new URL(request.url,'http://127.0.0.1:9000')
    if(url.pathname === '/login')
    {
        response.end('login')
    }
    else{
        response.end('reg')
    }
})

server.listen(9000,()=>{
    console.log('9000 open')
})