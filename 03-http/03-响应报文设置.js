const http = require('http')

const server = http.createServer((request,response)=>{
    //设置响应状态码
    response.statusCode = 203
    //响应状态的描述
    response.statusMessage = 'response'
    //响应头
    response.setHeader('content-type','text/html;charset=utf-8')
    //设置多个同名的响应头
    response.setHeader('test',['a','b','c'])
    //响应体设置
    response.write('111+')
    //write可以多次调用，end只能有一个
    response.end('response')
})

server.listen(9000,()=>{
    console.log('9000 open')
})