//导入http模块
const http = require('http')

//创建服务对象
const server = http.createServer((request,response)=>{
    console.log(request.method)//获取请求方式
    console.log(request.url)//获取请求的url,只包含路径和查询字符串，不包括协议、ip、端口
    console.log(request.httpVersion)//获取http协议版本号
    console.log(request.headers)//获取http请求头   
//     {
//   host: 'localhost:9000',
//   connection: 'keep-alive',
//   'sec-ch-ua-platform': '"Windows"',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
//   'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
//   'sec-ch-ua-mobile': '?0',
//   accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
//   'sec-fetch-site': 'same-origin',
//   'sec-fetch-mode': 'no-cors',
//   'sec-fetch-dest': 'image',
//   referer: 'http://localhost:9000/',
//   'accept-encoding': 'gzip, deflate, br, zstd',
//   'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6'
// }
    let body = ''
    request.on('data',chunk=>{
        body += chunk
    })
    request.on('end',()=>{
        console.log(body)//获取http请求体
    })
    response.end('hello http server')//设置响应体，并结束响应
})

//监听端口，启动服务
server.listen(9000,()=>{
    console.log('server 9000')
})




